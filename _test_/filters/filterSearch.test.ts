import { SearchPreferenceProps } from '../../types/types';
import { filterPropertyListings } from '../../src/utils/filterHelper'

import {
  getAllProperties,
  getAllPropertiesJoinedData,
  getAllPropertiesJoinedDataInGeoRange,
} from '../../src/lib/models'

// Mock data for search test
const searchParams: SearchPreferenceProps = {
  preferences: {
    //location: 'hackney',
    cost: {
      min: 1000,
      max: 2500,
    },
    //billsIncluded: false,
    proximity: {
      lat: 51.56440233705475, 
      lon: -0.10831598442105773,
      radius: 5,
    },
    //propertyType: ['flat', 'house'],
    rooms: {
      min: 1,
      max: 10,
    },
    //tenancyMinMonths: 6,
    features: {
      //pets: true,
      // smokers: false,
      // bikeStorage: false,
      garden: true,
      // fireplace: false,
      // elevator: false,
      // wheelchairAccessible: true,
      // electricHeating: false,
      // gasHeating: false,
      // visitorParking: false,
      // allocatedParking: false,
      // streetParking: false,
    },
  },
};

let listings: any[];

// beforeAll(async () => {
//   listings = await getAllProperties();
// });

// describe('filterPropertyListings', () => {
//   it('should return an array of properties', () => {
//     const filteredProperties = filterPropertyListings(searchParams, listings);
//     expect([]).toBeInstanceOf(Array);
//   });
// });

// describe('get property_view results', () => {
//   it('should return an array of properties', async () => {
//     const properties = await getAllPropertiesJoinedData();
//     expect(properties).toBeInstanceOf(Array);
//   });
// });

// describe('get property_view results', () => {
//   it('should return an array of properties', async () => {
//     const lat = 51.564;
//     const long = -0.108;
//     const radius = 3;
//     const properties = await getAllPropertiesJoinedDataInGeoRange(lat, long, radius);
//     expect(properties).toBeInstanceOf(Array);
//   });
// });

describe('get filtered properties', () => {
  it('should return an array of properties', async () => {
    const properties = await filterPropertyListings(searchParams);

    expect(properties).toBeInstanceOf(Array);
  });
});
