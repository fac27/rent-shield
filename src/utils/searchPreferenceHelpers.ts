import { ReadonlyURLSearchParams } from 'next/navigation';
import { SearchPreferenceProps } from '../../types/types';
import { convertAddress } from './mapHelper';

/**
 * @returns a query string from all key:value pairs in a nested Object
 * @param data - should be the prop object received from your query to be turned into a url
 * @remarks This function is a helper for the filter functionality or our app. It allows us to send search preferences from the SearchPreferencesForm to the /listings route
 */
export const makeIntoQuery = (
  data: { [key: string]: any },
  lastKey: string,
) => {
  return Object.keys(data)
    .map((key) => {
      let value = data[key];
      if (value !== null && typeof value === 'object') {
        value = makeIntoQuery(value, key);
      }
      if (key === 'min' || key === 'max') 
        return `&${lastKey}_${key}=${value}`
      return `&${key}=${value}`;
      
    })
    .join('');
};

/**
 * @returns a props object suited for the search preference functionality of our page.
 * @remarks this function is a helper for the filter functionality in our app
 * @param submitted should be the event.target object from your submission event.
 */
export const makeIntoProps = (submitted: any): SearchPreferenceProps => {
  return {
    preferences: {
      location: submitted.location.value,
      proximity: {
        lat: submitted.lat,
        lon: submitted.lng,
        radius: submitted.radius.value,
      },
      cost: {
        min: submitted.min_cost.value,
        max: submitted.max_cost.value,
      },
      bills_included: submitted.bills?.checked || false,
      rooms: {
        min: submitted.roomsMin.value,
        max: submitted.roomsMax.value,
      },
      min_tenancy_months: submitted.tenancy.value,
      features: {
        pets_allowed: submitted.pets_allowed.checked,
        smokers_allowed: submitted.smokers_allowed.checked,
        bike_storage: submitted.bike_storage.checked,
        garden: submitted.garden.checked,
        fireplace: submitted.fireplace.checked,
        elevator: submitted.elevator.checked,
        wheelchair_accessible: submitted.wheelchair_accessible.checked,
        electric_heating: submitted.electric_heating.checked,
        gas_heating: submitted.gas_heating.checked,
        visitor_parking: submitted.visitor_parking.checked,
        allocated_parking: submitted.allocated_parking.checked,
        street_parking: submitted.street_parking.checked,
      },
    },
  };
};

export const toBoolean = (string: string): boolean => {
  return string === 'true' ? true : false;
};
