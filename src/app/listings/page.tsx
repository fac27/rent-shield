'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import ListingsContainer from '../../components/ListingsContainter'
import { getAllProperties } from 'lib/models'
import { ListingType, SearchPreferenceProps } from '../../../types/types'
import { toBoolean } from 'utils/searchPreferenceHelpers'

export default function SearchResults() {
  const params = useSearchParams()
  const [listings, setListings] = useState<ListingType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProperties()
      setListings(data)
    }
    fetchData()
  }, [params])

  const searchFilters: SearchPreferenceProps = {
    preferences: {
      location: params.get('location') as string,
      proximity: {
        lat: Number(params.get('lat')),
        lon: Number(params.get('lon')),
        radius: Number(params.get('radius')),
      },
      cost: {
        min: Number(params.get('min-cost')),
        max: Number(params.get('max-cos')),
      },
      bills_included: toBoolean(params.get('bills_included') as string),
      property_type: params.get('type')?.split(',') as string[],
      rooms: {
        min_rooms: Number(params.get('min_rooms')),
        max_rooms: Number(params.get('max_rooms')),
      },
      min_tenancy_months: Number(params.get('min_tenancy')),
      features: {
        pets_allowed: toBoolean(params.get('pets_allowed') as string),
        smokers_allowed: toBoolean(params.get('smokers_allowed') as string),
        bike_storage: toBoolean(params.get('bike_storage') as string),
        garden: toBoolean(params.get('garden') as string),
        fireplace: toBoolean(params.get('fireplace') as string),
        elevator: toBoolean(params.get('elevator') as string),
        wheelchair_accessible: toBoolean(
          params.get('wheelchair_accessible') as string,
        ),
        electric_heating: toBoolean(params.get('electric_heating') as string),
        gas_heating: toBoolean(params.get('gas_heating') as string),
        visitor_parking: toBoolean(params.get('visitor_parking') as string),
        allocated_parking: toBoolean(params.get('allocated') as string),
        street_parking: toBoolean(params.get('exterior_parking') as string),
      },
    },
  }

  return <ListingsContainer listings={listings} filters={searchFilters} />
}
