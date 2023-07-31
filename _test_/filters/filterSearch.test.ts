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
    //bills_included: false,
    proximity: {
      lat: 51.56440233705475, 
      lon: -0.10831598442105773,
      radius: 3,
    },
    property_type: ['Detached House', 'Semi-Detached House'],
    rooms: {
      min: 1,
      max: 10,
    },
    min_tenancy_months: 6,
    features: {
      //pets: true,
      // smokers: false,
      //bike_storage: false,
      garden: true,
      // fireplace: false,
      // elevator: false,
      // wheelchair_accessible: true,
      // electric_heating: false,
      // gas_heating: false,
      // visitor_parking: false,
      // allocated_parking: false,
      // street_parking: false,
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
