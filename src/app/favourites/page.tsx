import {
  createClientComponentClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
import ListingsContainer from 'components/ListingsContainter'
import { Database } from '../../../types/supabase'
import supabaseClient from 'lib/supabaseClient'
import { getAllPropertiesById } from 'lib/models'
import { cookies } from 'next/headers'
import { getFavourites } from 'lib/models'

export default async function page() {
  //   const supabase = await createClientComponentClient<Database>()
  const supabase = await createServerComponentClient<Database>({ cookies })

  const getUserId = async () => {
    const userId = await (await supabase.auth.getSession()).data.session?.user
    return userId?.id
  }

  const faveList = async () => {
    // 'use server'
    const userId = await getUserId()
    const favourites = await getFavourites(userId)
    const list = await getAllPropertiesById(favourites)
    return list
  }
  const listings = await faveList()

  console.log('list', listings)
  return <div>{listings}</div>
  //   return <ListingsContainer listings={listings} />
}
