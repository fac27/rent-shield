import { ReadonlyURLSearchParams } from 'next/navigation'
import { SearchPreferenceProps } from '../../types/types'
import { convertAddress } from './mapHelper'

/**
 * @returns a query string from all key:value pairs in a nested Object
 * @param data - should be the prop object received from your query to be turned into a url
 * @remarks This function is a helper for the filter functionality or our app. It allows us to send search preferences from the SearchPreferencesForm to the /listings route
 */
export const makeIntoQuery = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map((key) => {
      let value = data[key]
      if (value !== null && typeof value === 'object')
        value = makeIntoQuery(value)
      return `&${key}=${value}`
    })
    .join('')
}

const ifTrue = (value: boolean): boolean | undefined => {
  return value === true ? true : undefined
}

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
        radius: submitted.radius,
      },
      cost: {
        min: submitted.min_cost.value,
        max: submitted.max_cost.value,
      },
      bills_included: submitted.bills.checked,
      property_type: submitted.property_type.value,
      rooms: {
        min_rooms: submitted.roomsMin.value,
        max_rooms: submitted.roomsMax.value,
      },
      min_tenancy_months: submitted.tenancy.value,
      features: {
        pets_allowed: ifTrue(submitted.pets_allowed.checked),
        smokers_allowed: ifTrue(submitted.smokers_allowed.checked),
        bike_storage: ifTrue(submitted.bike_storage.checked),
        garden: ifTrue(submitted.garden.checked),
        fireplace: ifTrue(submitted.fireplace.checked),
        elevator: ifTrue(submitted.elevator.checked),
        wheelchair_accessible: ifTrue(submitted.wheelchair_accessible.checked),
        electric_heating: ifTrue(submitted.electric_heating.checked),
        gas_heating: ifTrue(submitted.gas_heating.checked),
        visitor_parking: ifTrue(submitted.visitor_parking.checked),
        allocated_parking: ifTrue(submitted.allocated_parking.checked),
        street_parking: ifTrue(submitted.street_parking.checked),
      },
    },
  }
}

export const toBoolean = (string: string): boolean => {
  return string === 'true' ? true : false
}
