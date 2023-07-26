'use client';
import SearchPreferencesForm from 'components/SearchPreferencesForm';

const preferences = {
  location: 'Hackney',
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
  return <SearchPreferencesForm preferences={preferences} />;
}
