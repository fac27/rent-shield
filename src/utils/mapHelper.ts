import { Loader } from '@googlemaps/js-api-loader'
import { ILocation, IMapProps } from '../../types/types'

//added this in because typescript didn't like that it had only a string
//plut makes the fetch string cleaner
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

//using google's API loader feature to access various libraries
const loader = new Loader({
  apiKey: apiKey,
  version: 'weekly',
  libraries: ['maps', 'places'],
})

//function to create a map
export const initializeMap = async ({ id, center, markers }: IMapProps) => {
  const mapOptions = {
    center: center,
    zoom: 16,
  }
  const googleMaps = await loader.importLibrary('maps')
  const mapElement = document.getElementById(id) as HTMLElement

  const map = new googleMaps.Map(mapElement, mapOptions)
  //added this is so that if we did want a map view with more than one property it is possible :D
  const { Marker } = await loader.importLibrary('marker')
  markers.forEach((markerLocation: ILocation) => {
    new Marker({
      position: markerLocation,
      map,
    })
  })
  return map
}

//function to create autocomplete when searching for a location
export const initializeSearch = async () => {
  const autocompleteOptions = {
    types: ['geocode'],
    componentRestrictions: { country: ['GB'] },
    fields: ['place_id', 'geometry', 'name'],
  }
  const googlePlaces = await loader.importLibrary('places')

  const input = document.getElementById('default-search') as HTMLInputElement
  const autocomplete = new googlePlaces.Autocomplete(input, autocompleteOptions)

  return new Promise((resolve, reject) => {
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      const center = {
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      }
      if (place.geometry) {
        resolve(center)
      } else {
        reject(new Error('place does not exist'))
      }
    })
  })
}

//function to convert address into lat/long to put into map function above
export const convertAddress = async (address: string) => {
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address,
    )}&key=${apiKey}`,
  )
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      console.log(jsonData)
      return jsonData.results[0].geometry.location
    })
    .catch((error) => {
      console.log(error)
    })
}
