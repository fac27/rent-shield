import { Loader } from '@googlemaps/js-api-loader';
import { ILocation } from '../../types';

export const initializeMap = async (center: ILocation) => {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['maps', 'places'],
  });
  const mapOptions = {
    center: center,
    zoom: 4,
  };

  const googleMaps = await loader.importLibrary('maps')
  const map = new googleMaps.Map(document.getElementById('map')as HTMLElement, mapOptions)
    return map;
};

export const initializeSearch = async () => {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['maps', 'places'],
  });
  const autocompleteOptions = {
    types: ['establishment'],
    componentRestrictions: {'country': ['GB']},
      fields:['place_id','geometry','name']
  };
  const googlePlaces = await loader.importLibrary('places')

  const input = document.getElementById('autocomplete')as HTMLInputElement;
  const autocomplete = new googlePlaces.Autocomplete(input, autocompleteOptions)
  return new Promise((resolve) => {
    autocomplete.addListener('place_changed', ()=>{
      const place = autocomplete.getPlace();
      const center = {
        lat:place.geometry?.location?.lat(),
        lng:place.geometry?.location?.lng()
      }
      console.log(center)
      if(place.geometry){
        resolve(center)
      }
      //insert error handling
    })
  })
  
    //insert error handing
  }
  