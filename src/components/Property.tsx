'use client'
import Image from 'next/image'
import location from '../../public/location.svg'
import bed from '../../public/bed.svg'
import bath from '../../public/bath.svg'
import price from '../../public/price.svg'
import heart from '../../public/heart.svg'
import fullHeart from '../../public/full-heart.svg'
import transportIcon from '../../public/transport.svg'
import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Map from './Map'
import { ILocation, ListingType } from '../../types/types'
import { Json } from '../../types/supabase'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../types/supabase'
import { useRouter } from 'next/navigation'

const Property = ({ id, listing }: { id: string; listing: ListingType }) => {
  // const [liked, setLiked] = useState(listing.favourited);
  const [liked, setLiked] = useState(false)
  const [center, setCenter] = useState({
    lat: Number(listing.latitude),
    lng: Number(listing.longitude),
  })
  const [markers, setMarkers] = useState<ILocation[]>([])
  const [loading, setLoading] = useState(true) // added a loading state in case the map doesn't load...
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState<string>('')
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

  useEffect(() => {
    setCenter(center)
    setMarkers([center])
    setLoading(false)
  }, [center])

  useEffect(() => {
    const getUserId = async () => {
      const { data, error } = await supabase.auth.getUser()
      const { user } = data
      const sessionUserId = user?.id
      return sessionUserId
    }
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (session) setLoggedIn(true)
      const sessionUserId = await getUserId()
      setUserId(sessionUserId as string)
    }
    checkSession()
  }, [supabase.auth])

  const addFavourite = async (property_id: number, user_id: string) => {
    try {
      await supabase.from('favourites').insert({ property_id, user_id })
      setLiked(true)
    } catch (error) {
      console.error('Error adding favourite: ', error)
    }
  }
  const deleteFavourite = async (property_id: number, user_id: string) => {
    try {
      await supabase
        .from('favourites')
        .delete()
        .eq('property_id', property_id)
        .eq('user_id', user_id)
      setLiked(false)
    } catch (error) {
      console.error('Error deleting favourite: ', error)
    }
  }
  const handleFavourite = async (property_id: number, user_id: string) => {
    if (!loggedIn) {
      router.push('/log-in')
    } else {
      liked
        ? await deleteFavourite(property_id, user_id)
        : await addFavourite(property_id, user_id)
    }
  }

  return (
    <div data-id={id} className="flex flex-col test-class-property">
      {/* images */}
      {/* animate */}
      <Carousel images={listing.image} />

      {/* details */}
      <section className="flex justify-evenly bg-[#202A37] py-5">
        <span className="flex gap-2 text-xl">
          <Image src={price} alt="price" width={20} height={20} />
          <p className="text-slate-200"> {listing.rent}</p>
        </span>
        <span className="flex gap-2 text-xl">
          <Image src={bed} alt="bed" width={20} height={20} />
          <p className="text-slate-200"> {listing.bedrooms} </p>
        </span>
        <span className="flex gap-2 text-xl">
          <Image src={bath} alt="bath" width={20} height={20} />
          <p className="text-slate-200"> {listing.bathrooms} </p>
        </span>
        <button onClick={() => handleFavourite(listing.id, userId)}>
          {liked ? (
            <Image src={fullHeart} alt="saved" width={25} height={25} />
          ) : (
            <Image src={heart} alt="not saved" width={25} height={25} />
          )}
        </button>
      </section>

      {/* description */}
      <p className="p-10">{listing.description}</p>

      {/* location info */}
      <section className="flex justify-around lg:justify-center lg:gap-60">
        <b className="flex  items-center gap-2 text-sm">
          <Image
            src={location}
            alt="location"
            width={20}
            height={20}
            className="invert"
          />
          2 mi from desired location
        </b>
        <b className="flex items-center gap-2 text-sm">
          <Image src={transportIcon} alt="transport" width={20} height={20} />
          Piccadilly Circus
        </b>
      </section>

      {/* map */}
      <div className="flex justify-center py-5">
        {loading ? (
          <div>loading...</div>
        ) : (
          <Map id={listing.id} center={center} markers={markers} />
        )}
      </div>
    </div>
  )
}

export default Property
