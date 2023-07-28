import ListingsContainer from '../../components/ListingsContainer';
import { getAllProperties } from 'lib/models';

export default async function SearchResults() {
  const listings = await getAllProperties();
  return <ListingsContainer listings={listings} />;
}
