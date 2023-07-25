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

export { getPropertyById };
