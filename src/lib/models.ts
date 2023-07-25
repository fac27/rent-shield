import { log } from 'console';
import supabaseClient from '../lib/supabaseClient';
//import type { Database } from '../../types/supabase';

const getPropertyById = async (id: string) => {
  const { data, error } = await supabaseClient
    .from('property')
    .select(
      `
        id,
        address1,
        address2,
        image (id, url)`,
    )
    .eq('id', id);

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
};

export { getPropertyById };
