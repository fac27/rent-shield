import { all } from 'cypress/types/bluebird';
import { ListingType, SearchPreferenceProps } from '../../types/types';
import { allFilters, Filter, FilterOperation } from '../lib/filterObjects';
import { getFilteredProperties } from '../lib/models';

// enum FilterOperation {
//   'bool',
//   'range',
//   'match',
//   'greater_than_or_equal',
//   'geo_distance',
// }

// interface Filter {
//   operation: FilterOperation;
//   field: string;
//   args: any[];
// }

const filterPropertyListings = (searchParams: SearchPreferenceProps) => {
  const currentSearchFilters: [] = [];
  const searchPrefs = searchParams.preferences;

  const filters = parseSearchParamObject(searchPrefs, currentSearchFilters);

  // Call model function to apply filters to property listings view

  return getFilteredProperties(filters);
};

const parseSearchParamObject = (params: any, filters: Array<Filter>) => {
  const searchPrefKeys = Object.keys(params);
  searchPrefKeys.forEach((key) => {
    const val = params[key];
    let keyHasBeenParsed = false;
    const filterObj = allFilters[key];

    if (filterObj) {
      const operation = filterObj.operation;
      let args: any[];

      switch (operation) {
        case FilterOperation.bool:
          args = [val];
          break;
        case FilterOperation.range:
          args = [val.min, val.max];
          console.log(`key: ${key}, min: ${val.min}, max: ${val.max}`)
          break;
        case FilterOperation.geo_distance:
          args = [val.lat, val.lon, val.radius];
          break;
        case FilterOperation.match:
          args = Array.isArray(val) ? val : [val];
          break;
        case FilterOperation.greater_than_or_equal:
          args = [val];
          break;
        default:
          args = [];
      }

      if (
        operation === FilterOperation.bool &&
        args[0] === false &&
        !filterObj.includeFalsy
      ) {
        // Do nothing
      } else {
        filters.push({
          operation: operation,
          field: filterObj.field,
          args: args,
          includeFalsy: filterObj.includeFalsy,
        });

        keyHasBeenParsed = true;
      }
    }

    if (!Array.isArray(val) && typeof val === 'object' && !keyHasBeenParsed) {
      parseSearchParamObject(params[key], filters);
    }
  });
  console.log(`Filters: ${JSON.stringify(filters)}`);
  return filters;
};

export { filterPropertyListings };
