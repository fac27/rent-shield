'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ListingsContainer from '../../components/ListingsContainter';
import { getAllProperties } from 'lib/models';
import { ListingType, SearchPreferenceProps } from '../../../types/types';
import { toBoolean } from 'utils/searchPreferenceHelpers';

async function getListings(){
  const listings = await getAllProperties()
  return listings
}

export default function SearchResults() {
  const params = useSearchParams();
  const [listings, setListings] = useState<ListingType[] | []>([] )

  useEffect(()=>{
    (async ()=> {
      const data = await getAllProperties()
      setListings(data)
    })
  }, [listings])

  const renterFilters: SearchPreferenceProps = {
    preferences: {
      location: params.get('location') as string,
      cost: {
        max: Number(params.get('max')),
        bills_included: toBoolean(params.get('bills_included') as string),
      },
      propertyDetails: {
        type: params.get('type')?.split(',') as string[],
        rooms: {
          min_rooms: Number(params.get('min_rooms')),
          max_rooms: Number(params.get('max_rooms')),
        },
        min_tenancy: params.get('min_tenancy') as string,
      },
      features: {
        pets: toBoolean(params.get('pets_allowed') as string) ,
        smokers: toBoolean(params.get('smokers_allowed') as string),
        bike_storage: toBoolean(params.get('bike_storage') as string),
        garden: toBoolean(params.get('garden') as string),
        fireplace: toBoolean(params.get('fireplace') as string),
        elevator:toBoolean(params.get('elevator') as string),
        wheelchair_accessible: toBoolean(params.get('wheelchair_accessible') as string),
        electric_heating: toBoolean(params.get('electric_heating') as string),
        gas_heating: toBoolean(params.get('gas_heating') as string),
        visitor_parking: toBoolean(params.get('visitor_parking') as string),
        parking: {
          allocated: toBoolean(params.get('allocated') as string),
          exterior_parking: toBoolean(params.get('exterior_parking') as string)
        }
      }
    }
  }

  console.log(renterFilters)
 
  return <ListingsContainer listings={listings as ListingType[]} filters={renterFilters} />;
}
