import ListingsContainer from '../../components/ListingsContainter';
import { PropertyType } from '../../../types/types';
import { getAllProperties } from 'lib/models';
import { get } from 'cypress/types/lodash';

export default async function SearchResults() {
  const exampleListings: PropertyType[] = await getAllProperties();
  return <ListingsContainer listings={exampleListings} />;
}
