'use client';
import SearchPreferencesForm from 'components/SearchPreferencesForm';
import { useSearchParams } from 'next/navigation';

const preferences = {
  location: '',
  cost: {
    max: 2300,
    min: 965,
  },
  propertyDetails: {
    type: ['studio', 'detached house', 'flatshare'],
    rooms: [0, 1, 2, 4, 7],
    tenancyMin: ['1 month', '6 months', '1 year', '2 years'],
  },
  features: [
    'pets allowed',
    'smokers allowed',
    'bike storage',
    'garden',
    'fireplace',
  ],
  parking: ['allocated parking', 'no parking', 'exterior parking'],
};

export default function SearchPreferences() {
  const searchParams = useSearchParams();

  const location = searchParams.get('location');

  if (!location) return;
  preferences.location = location;

  // account for null in search form, dont let it get to this route without a lat and lng
  // const lat = parseInt(searchParams.get('lat') as string);
  // const lng = parseInt(searchParams.get('lng') as string);
  return <SearchPreferencesForm preferences={preferences} />;
}
