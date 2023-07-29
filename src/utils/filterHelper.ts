import { all } from 'cypress/types/bluebird';
import { ListingType, SearchPreferenceProps } from '../../types/types';

enum FilterOperation {
  'bool',
  'range',
  'match',
  'greater_than_or_equal',
  'geo_distance',
}

interface Filter {
  operation: FilterOperation;
  field: string;
  args: any[];
}

const allFilters: { [key: string]: Filter } = {
  location: {
    operation: FilterOperation.match,
    field: 'address2',
    args: [],
  },
  proximity: {
    operation: FilterOperation.geo_distance,
    field: 'lat_lon_point',
    args: [],
  },
  cost: {
    operation: FilterOperation.range,
    field: 'rent',
    args: [],
  },
  billsIncluded: {
    operation: FilterOperation.bool,
    field: 'bills_included',
    args: [],
  },
  propertyType: {
    operation: FilterOperation.match,
    field: 'property_type',
    args: [],
  },
  rooms: {
    operation: FilterOperation.range,
    field: 'bedrooms',
    args: [],
  },
  tenancyMinMonths: {
    operation: FilterOperation.greater_than_or_equal,
    field: 'min_tenancy',
    args: [],
  },
  pets: {
    operation: FilterOperation.bool,
    field: 'pets_allowed',
    args: [],
  },
  smokers: {
    operation: FilterOperation.bool,
    field: 'smokers_welcome',
    args: [],
  },
  bikeStorage: {
    operation: FilterOperation.bool,
    field: 'bike_storage',
    args: [],
  },
  garden: {
    operation: FilterOperation.bool,
    field: 'garden',
    args: [],
  },
  fireplace: {
    operation: FilterOperation.bool,
    field: 'fireplace',
    args: [],
  },
  elevator: {
    operation: FilterOperation.bool,
    field: 'elevator',
    args: [],
  },
  electricHeating: {
    operation: FilterOperation.bool,
    field: 'electric_heating',
    args: [],
  },
  gasHeating: {
    operation: FilterOperation.bool,
    field: 'gas_heating',
    args: [],
  },
  visitorParking: {
    operation: FilterOperation.bool,
    field: 'visitor_parking',
    args: [],
  },
  allocatedParking: {
    operation: FilterOperation.bool,
    field: 'allocated_parking',
    args: [],
  },
  streetParking: {
    operation: FilterOperation.bool,
    field: 'street_parking',
    args: [],
  },
};

const filterPropertyListings = (
  searchParams: SearchPreferenceProps,
  listings: ListingType[],
) => {
  const currentSearchFilters: [] = [];
  const searchPrefs = searchParams.preferences;

  parseSearchParamObject(searchPrefs, 'preferences', currentSearchFilters);

  return [];
};

const parseSearchParamObject = (
  params: any,
  lastKey: string,
  filters: Array<Filter>,
) => {
  const searchPrefKeys = Object.keys(params);
  console.log(`Keys received: ${searchPrefKeys}`);
  searchPrefKeys.forEach((key) => {
    const val = params[key];
    let keyHasBeenParsed = false;
    console.log(`This key: ${key}\nLast key: ${lastKey}`);
    const filterObj = allFilters[key];
    console.log(`Filter object for val = '${key}': ${filterObj}`);

    if (filterObj) {
      const operation = filterObj.operation;
      let args: any[];

      switch (operation) {
        case FilterOperation.bool:
          args = [val];
          break;
        case FilterOperation.range:
          args = [val.min, val.max];
          break;
        case FilterOperation.geo_distance:
          args = [val.lat, val.lon, val.radius];
          break;
        case FilterOperation.match:
          args = [val];
          break;
        case FilterOperation.greater_than_or_equal:
          args = [val];
          break;
        default:
          args = [];
      }
      
      filters.push(
        {
          operation: operation,
          field: filterObj.field,
          args: args,
        });

      keyHasBeenParsed = true;
    }

    if (!Array.isArray(val) && typeof val === 'object' && !keyHasBeenParsed) {
        parseSearchParamObject(params[key], key, filters);
      }

  });
  console.log(`Filters: ${JSON.stringify(filters)}`);
  return filters;
};

export { filterPropertyListings };
