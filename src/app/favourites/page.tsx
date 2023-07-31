import {
  createClientComponentClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
import ListingsContainer from 'components/ListingsContainter'
import { Database } from '../../../types/supabase'
import supabaseClient from 'lib/supabaseClient'
import { getAllPropertiesById } from 'lib/models'

const Page = async () => {
  const supabase = await createClientComponentClient<Database>()

  const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser()
    const { user } = data

    if (error) {
      console.error('Error getting user:', error)
      return
    }
    const sessionUserId = user?.id as string
    console.log(sessionUserId)
    return sessionUserId
  }

  const getFavourites = async (userId: any) => {
    // const id = await getUserId()
    const { data, error } = await supabaseClient
      .from('favourites')
      .select()
      .eq('user_id', userId)
    if (error) {
      console.error('Error getting favourites data', error)
      return []
    }
    console.log('favourite data', data)
    return data?.map((item) => item.property_id) || []
  }
  const userId = await getUserId()
  const faves = await getFavourites(userId)
  const listings = await getAllPropertiesById(faves)

  return <ListingsContainer listings={listings} />
}
export default Page
