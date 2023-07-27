import supabaseClient from '../lib/supabaseClient';
import {
  ListingType,
  PropertyType,
  StatusType,
  RentRangeType,
  AttributesType,
  TransportDataType,
} from '../../types/types';

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
          image (id, url)`,
  );

  if (error) {
    console.log(`Error getting property: ${error.message}`);
    throw error;
  }

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

const getAttributesById = async (id: number): Promise<AttributesType[] | string[]> => {
  const { data, error } = await supabaseClient
    .from('property')
    .select(
      `
        id,
        bills: attributes->bills,
        garden: attributes->garden,
    `,
    )
    .eq('id', id);

  if (error) {
    console.log(`Error getting attributes: ${error.message}`);
    throw error;
  }

  return data;
};

// THURSDAY: FIX TYPE FOR TRANSPORT
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
/*
{
  "bills": "included",
  "garden": "yes",
  "transport": [
    {
      "name": "Clapton",
      "type": "overground",
      "distance": "6 minutes"
    },
    {
      "name": "Rectory Road",
      "type": "overground",
      "distance": "17 minutes"
    }
  ]
}
*/

export {
  getPropertyById,
  getAllProperties,
  getAllPropertyStatuses,
  getAllPropertyTypes,
  getRentRange,
};
