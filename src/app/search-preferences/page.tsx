'use client';

import SearchPreferencesForm from 'components/SearchPreferencesForm';
import { useSearchParams } from 'next/navigation';
import { getAllPropertyTypes } from '../../lib/models';
import { useState, useEffect } from 'react';
import { PropertyType, SearchFormProps } from '../../../types/types';

const preferences: SearchFormProps = {
  preferences:{
    location: '',
    cost: {
      max: 2300,
      min: 965,
    },
    property_details: {
      type: [],
      rooms: [0, 1, 2, 4, 7],
      min_tenancy_months: [6, 12, 18],
    },
    features: [
      'pets allowed',
      'smokers allowed',
      'bike storage',
      'garden',
      'fireplace',
      'elevator',
      'wheelchair accessible',
      'electric heating',
      'gas heating',
      'visitor parking',
      'allocated parking',
      'street parking',
    ],
  }
};


export default function SearchPreferences() {
  
  const [allPropertyTypes, setAllPropertyTypes] = useState<string[]>([]);
  
  const searchParams = useSearchParams();
  const location = searchParams.get('location');

  useEffect(()=>{
    const getTypes = async ()=>{
      const data = await getAllPropertyTypes()
      const typesArray:string[] = []
      data.map(type => typesArray.push(type.description))
      setAllPropertyTypes(typesArray)
      preferences.preferences.property_details.type = allPropertyTypes
    }
    getTypes()
  }, [allPropertyTypes])

  if (location) preferences.preferences.location = location;

  return <SearchPreferencesForm preferences={preferences.preferences} />;
}

