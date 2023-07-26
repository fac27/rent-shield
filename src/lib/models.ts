import supabaseClient from '../lib/supabaseClient';
import { ListingType, PropertyType, StatusType } from '../../types/types';

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
  
    if (error) {
      console.log(`Error getting property: ${error.message}`);
      throw error;
    }
  
    return data;
  };

const getAllPropertyTypes = async (): Promise<PropertyType[]> => {
  const { data, error } = await supabaseClient
    .from('type')
    .select('id, description')

  if (error) {
    console.log(`Error getting property types: ${error.message}`);
    throw error;
  }

  return data;
}

const getAllPropertyStatuses = async (): Promise<StatusType[]> => {
  const { data, error } = await supabaseClient
    .from('status')
    .select('id, description')

  if (error) {
    console.log(`Error getting property statuses: ${error.message}`);
    throw error;
  }

  return data;
}

export { getPropertyById, getAllProperties, getAllPropertyStatuses, getAllPropertyTypes };
