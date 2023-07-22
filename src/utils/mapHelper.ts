import { Loader } from '@googlemaps/js-api-loader';
import { ILocation } from '../../types';

//using google's API loader feature
const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: 'weekly',
  libraries: ['maps', 'places'],
});

//function to create a map
export const initializeMap = async (center: ILocation) => {
  const mapOptions = {
    center: center,
    zoom: 16,
  };
  const googleMaps = await loader.importLibrary('maps');
  const map = new googleMaps.Map(
    document.getElementById('map') as HTMLElement,
    mapOptions,
  );
  return map;
};

//function to create autocomplete when searching for a location
export const initializeSearch = async () => {
  const autocompleteOptions = {
    types: ['geocode'],
    componentRestrictions: { country: ['GB'] },
    fields: ['place_id', 'geometry', 'name'],
  };
  const googlePlaces = await loader.importLibrary('places');

  const input = document.getElementById('autocomplete') as HTMLInputElement;
  const autocomplete = new googlePlaces.Autocomplete(
    input,
    autocompleteOptions,
  );

  return new Promise((resolve, reject) => {
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const center = {
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      };
      if (place.geometry) {
        resolve(center);
      } else {
        reject(new Error('place does not exist'));
      }
    });
  });

  //insert error handing
};

//function to convert address into lat/long to put into map function above
export const convertAddress = async (address: string) => {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      resolve(jsonData.results[0].geometry.location);
    })
    .catch((error) => {
      console.log(error);
    });
};
