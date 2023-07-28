'use client';

import Property from './Property';
import { ContainerProps } from '../../types/types';
import { isWithin } from 'utils/locationHelper';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

const ListingsContainer = ({ listings }: ContainerProps) => {
  const searchParams = useSearchParams();
  let filteredListings = listings;

  const proximity = searchParams.get('proximity');
  if (proximity) {
    // lat lng and radius should always be present if proximity is present
    const { lat, lng, radius } = Object.fromEntries(
      new URLSearchParams(proximity),
    );

    filteredListings = listings.filter((listing) =>
      isWithin(
        { lat: parseInt(lat), lng: parseInt(lng) },
        { lat: listing.latitude, lng: listing.longitude },
        parseInt(radius), // radius needs to be  validated
      ),
    );
  }

  return (
    <div>
      {filteredListings.map((listing, index) => (
        <Property
          key={listing.id}
          id={`listing-${index + 1}`}
          listing={listing}
        />
      ))}
    </div>
  );
};

export default memo(ListingsContainer);
