import ListingsContainer from '../../components/ListingsContainter';
import { getAllProperties } from 'lib/models';
import { isWithin } from 'utils/locationHelper';

export default async function SearchResults() {
  const listings = await getAllProperties();
  const filteredListings = listings.filter((listing) =>
    isWithin(
      { lat: 51.507351, lng: -0.127758 },
      { lat: listing.latitude, lng: listing.longitude },
      20,
    ),
  );
  return <ListingsContainer listings={filteredListings} />;
}
