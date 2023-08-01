import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import ListingsContainer from 'components/ListingsContainter'
import { Database } from '../../../types/supabase'
import { cookies } from 'next/headers'
import { ListingType } from '../../../types/types'

export default async function page() {
  //   const supabase = await createClientComponentClient<Database>()
  const supabase = await createServerComponentClient<Database>({ cookies })

  const getUserId = async () => {
    const userId = await (await supabase.auth.getSession()).data.session?.user
    return userId?.id
  }
  const userId = await getUserId()

  const getFavourites = async (userId: any) => {
    const { data, error } = await supabase
      .from('favourites')
      .select()
      .eq('user_id', userId)
    if (error) {
      console.error('Error getting favourites data', error)
      throw error
    }
    console.log('favourite data', data)
    return data.map((item) => item.property_id)
  }
  const getAllPropertiesById = async (ids: any[]): Promise<ListingType[]> => {
    const { data, error } = await supabase
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
      .in('id', ids)

    if (error) {
      console.log(`Error getting property: ${error.message}`)
      throw error
    }

    return data as unknown as ListingType[]
  }

  const getAllListings = async () => {
    // 'use server'
    const userId = await getUserId()
    const favourites = await getFavourites(userId)
    const list = await getAllPropertiesById(favourites)
    return list
  }
  const listings = await getAllListings()

  return <ListingsContainer listings={listings} />
}
