'use client'

import SearchPreferencesForm from 'components/SearchPreferencesForm'
import { useSearchParams } from 'next/navigation'

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
    'street parking',
  ],
}

export default function SearchPreferences() {
  const searchParams = useSearchParams()
  const location = searchParams.get('location')

  if (location) preferences.location = location

  return (
    <main>
      <div className="text-center justify-between p-5 m-5">
        <h2 className="text-xl font-semibold">Set your search preferences</h2>
        <p>
          Start your home search by typing in a neighbourhood, city, county, or
          post code.
          <br></br>
          The search result page contains a map view. You can also filter to
          refine your search further.
        </p>
      </div>
      <SearchPreferencesForm preferences={preferences} />
    </main>
  )
}
