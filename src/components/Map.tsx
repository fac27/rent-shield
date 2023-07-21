'use client';
import React, { useEffect, useState } from 'react';
import {
  convertPostCode,
  initializeMap,
  initializeSearch,
} from '@/utils/mapHelper';

const Map = ({ center }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeSearch()
        .then((selected) => {
          setLocation(selected);
          console.log(selected);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    initializeMap(location);
  }, [location]);
  return (
    <>
      <h1></h1>
      <input
        id="autocomplete"
        placeholder="search here"
        type="text"
        style={{ color: 'black' }}
      ></input>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </>
  );
};

export default Map;
