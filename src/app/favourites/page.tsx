import {
  createClientComponentClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
// import ListingsContainer from "components/ListingsContainter";
// import { getFavourites, getPropertyById, getUserId } from "lib/models";
import { Database } from '../../../types/supabase'
import supabaseClient from 'lib/supabaseClient'
import { getAllPropertiesById } from 'lib/models'

const page = async () => {
  const supabase = await createClientComponentClient<Database>()

  const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser()
    const { user } = data
    const sessionUserId = user?.id as string
    console.log(sessionUserId)
    return sessionUserId
  }
  const getFavourites = async () => {
    const id = await getUserId()
    const { data, error } = await supabaseClient
      .from('favourite')
      .select()
      .eq('user_id', id)
    console.log('some data', data)
    return data?.map((item) => item.property_id) || []
  }

  //   const faves = await getFavourites();
  //   const properties = await getAllPropertiesById(faves);

  //   return <ListingsContainer listings={listings} />
}
export default page
