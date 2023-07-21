'use client';
import React, { useEffect, useState } from 'react';
import { initializeMap, initializeSearch } from '@/utils/mapHelper';

const Map = ({ center }) => {
  const [location, setLocation] = useState(null)
  
  useEffect(()=>{
    initializeSearch().then(selected =>{
      setLocation(selected)
      console.log(selected)

    })
  },[])
  
  useEffect(() => {
    initializeMap(center);
  }, [center]);
  return (
    <>
      <h1></h1>
      <input id="autocomplete" placeholder='search here' type='text'style={{ color: 'black'}}></input>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </>
  );
};

export default Map;
