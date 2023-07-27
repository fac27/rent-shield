import ListingsContainer from '../../components/ListingsContainter'
import { getAllProperties } from 'lib/models'

export default async function SearchResults() {
  const listings = await getAllProperties()
  return <ListingsContainer listings={listings} />
}
