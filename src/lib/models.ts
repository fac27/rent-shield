import supabaseClient from '../lib/supabaseClient';
import { PropertyType } from '../../types/types';

const getPropertyById = async (id: number): Promise<PropertyType[]> => {
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

const getAllProperties = async (): Promise<PropertyType[]> => {
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

const getAllRoles = async (): Promise<Role[]> => {
  const { data, error } = await supabaseClient
    .from('role')
    .select('id, description');

  if (error) {
    console.log(`Error getting roles: ${error.message}`);
    throw error;
  }

  return data;
};

const getRoleByDescription = async (description: string): Promise<Role[]> => {
  const { data, error } = await supabaseClient
    .from('role')
    .select('id')
    .eq('description', description);

  if (error) {
    console.log(`Error getting roles: ${error.message}`);
    throw error;
  }

  return data;
};

export { getPropertyById, getAllProperties, getRoleByDescription, getAllRoles };
