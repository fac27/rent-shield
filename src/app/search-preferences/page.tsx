'use client';

import SearchPreferencesForm from 'components/SearchPreferencesForm';
import { useSearchParams } from 'next/navigation';

const preferences = {
    location: '',
    cost: {
      max: 2300,
      min: 965,
    },
    property_details: {
      type: ['studio', 'detached house', 'flatshare'],
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
      'street parking'
    ]
};

export default function SearchPreferences() {
  const searchParams = useSearchParams();
  const location = searchParams.get('location');

  if (location) preferences.location = location;

  return <SearchPreferencesForm preferences={preferences} />;
}
