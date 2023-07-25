import ListingsContainer from '../../components/ListingsContainter';
import { PropertyType } from '../../../types/types';

export const exampleListings: PropertyType[] = [
  {
    address1: '3 Finsbury Road',
    address2: null,
    attributes: null,
    bathrooms: 1,
    bedrooms: 1,
    city: 'London',
    county: 'Essex',
    created_at: '25-07-2023 09:21:03',
    description: 'This is house number one',
    id: 1,
    latitude: 1.2353,
    longitude: 2.4312,
    postcode: 'N3 45Z',
    rent: 1500,
    status: [{id: 1, description: 'rented'}],
    type: [{id: 1, description: 'flat'}],
    user_id: '1D',
    image: [{id: 2, url: '/images/interior-1.jpeg'}, {id:7, url:'/images/interior-3.jpeg'}],
  },
  {
    address1: '5 Finsbury Road',
    address2: null,
    attributes: null,
    bathrooms: 2,
    bedrooms: 5,
    city: 'London',
    county: 'Essex',
    created_at: '25-07-2023 09:22:15',
    description: 'Das ist WG nummer zwei',
    id: 1,
    latitude: 1.2353,
    longitude: 2.4312,
    postcode: 'N3 45Z',
    rent: 3750,
    status: [{id: 3, description: 'rented'}],
    type: [{id: 2, description: 'flat'}],
    user_id: '1D',
    image: [{id: 1, url: '/images/interior-3.jpeg'}, {id: 1, url:'/images/interior-1.jpeg'}],
  },
];

export default function SearchResults() {

  return <ListingsContainer listings={exampleListings} />;
}
