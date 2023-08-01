import supabaseClient from '../lib/supabaseClient';
import {
  ListingType,
  PropertyType,
  StatusType,
  RentRangeType,
  TransportDataType,
} from '../../types/types';
import { FilterOperation } from './filterObjects';
import { Database } from '../../types/supabase';
//import { types } from 'util';

type PropertiesWithDistanceFromReturnType =
  Database['public']['Functions']['properties_with_distance_from']['Returns'];

const getPropertyById = async (id: number): Promise<ListingType[]> => {
  const { data, error } = await supabaseClient
    .from('property')
    .select(
      `
        id,
        created_at,
        postcode,
        address1,
        address2,
        city,
        county,
        latitude,
        longitude,
        type (id, description),
        bedrooms,
        bathrooms,
        description,
        rent,
        status (id, description),
        attributes,
        wheelchair_accessible,
        pets_allowed,
        garden,
        elevator,
        bills_included,
        image (id, url)`,
    )
    .eq('id', id);

  if (error) {
    console.log(`Error getting property: ${error.message}`);
    throw error;
  }

  return data;
};

const getAllProperties = async (): Promise<ListingType[]> => {
  const { data, error } = await supabaseClient.from('property').select(
    `
    id,
    created_at,
    postcode,
    address1,
    address2,
    city,
    county,
    latitude,
    longitude,
    type (id, description),
    bedrooms,
    bathrooms,
    description,
    rent,
    status (id, description),
    attributes,
    wheelchair_accessible,
    pets_allowed,
    garden,
    elevator,
    bills_included,
    image (id, url)`,
  );

  if (error) {
    console.log(`Error getting property: ${error.message}`);
    throw error;
  }

  return data;
};

const getAllPropertiesJoinedData = async (): Promise<any[]> => {
  const { data, error } = await supabaseClient
    .from('property_view')
    .select('*');

  if (error) {
    console.log(`Error getting property types: ${error.message}`);
    throw error;
  }
  return data;
};

const getFilteredProperties = async (filters: any[]): Promise<any[]> => {
  const geoFilter = filters.find(
    (item) => item.operation === FilterOperation.geo_distance,
  );
  // Create default search area for if none specified in filters
  const londonArea = { lat: 51.507391, long: -0.1277, radius: 30 };

  const lat: number = geoFilter ? geoFilter.args[0] : londonArea.lat;
  const long: number = geoFilter ? geoFilter.args[1] : londonArea.long;
  const radius: number = geoFilter ? geoFilter.args[2] : londonArea.radius;

  const geoParams = { lat: lat, long: long, radius_km: radius };

  let { data, error } = await supabaseClient.rpc(
    'properties_with_distance_from',
    geoParams
  );

  if (error) {
    console.log(`Error getting property types: ${error.message}`);
    throw error;
  }

  filters.forEach((filter) => {
    const filterOp = filter.operation;

    data = data.filter((row: PropertiesWithDistanceFromReturnType) => {
      switch (filterOp) {
        case FilterOperation.bool:
        case FilterOperation.match:
          if (filter.args.length > 1) {
            return filter.args.includes(row[filter.field]);
          }
          return row[filter.field] === filter.args[0];
          break;
        case FilterOperation.greater_than_or_equal:
          return row[filter.field] >= filter.args[0];
          break;
        case FilterOperation.range:
          return (
            row[filter.field] >= filter.args[0] &&
            row[filter.field] <= filter.args[1]
          );
          break;
        default:
          return data;
      }
    });
  });
  console.log(`\x1b[33m Geo search results: ${JSON.stringify(data)} \x1b[0m`);
  return data;
};

const getAllPropertiesJoinedDataInGeoRange = async (
  lat: number,
  long: number,
  radius: number,
): Promise<any[]> => {
  const { data, error } = await supabaseClient
    .rpc('properties_within_range', {
      lat: lat,
      long: long,
      radius: radius,
    })
    .filter('dist_km', 'lte', radius);

  if (error) {
    console.log(`Error getting property types: ${error.message}`);
    throw error;
  }
  console.log(`Geo search results: ${JSON.stringify(data)}`);
  return data;
};

const getAllPropertyTypes = async (): Promise<PropertyType[]> => {
  const { data, error } = await supabaseClient
    .from('type')
    .select('id, description');

  if (error) {
    console.log(`Error getting property types: ${error.message}`);
    throw error;
  }

  return data;
};

const getAllPropertyStatuses = async (): Promise<StatusType[]> => {
  const { data, error } = await supabaseClient
    .from('status')
    .select('id, description');

  if (error) {
    console.log(`Error getting property statuses: ${error.message}`);
    throw error;
  }

  return data;
};

const getRentRange = async (): Promise<RentRangeType[]> => {
  const { data, error } = await supabaseClient.rpc('get_min_max_rent');

  if (error) {
    console.log(`Error getting rent range: ${error.message}`);
    throw error;
  }

  return data;
};

const GetTransportDataById = async (
  id: number,
): Promise<TransportDataType[]> => {
  const { data, error } = await supabaseClient
    .from('property')
    .select(
      `
    id,
    transport: attributes->transport
  `,
    )
    .eq('id', id);

  if (error) {
    console.log(`Error getting attributes: ${error.message}`);
    throw error;
  }

  return data;
};

export {
  getPropertyById,
  getAllProperties,
  getAllPropertyStatuses,
  getAllPropertyTypes,
  getRentRange,
  GetTransportDataById,
  getAllPropertiesJoinedData,
  getAllPropertiesJoinedDataInGeoRange,
  getFilteredProperties,
};
