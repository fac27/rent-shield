"use client"
import React, { useEffect } from 'react';
import { initializeMap } from '@/utils/mapHelper';


const Map = ({center}) => {
  useEffect(()=>{
    initializeMap(center)
  },[center])
  return (
    <>
        <h1></h1>
    <input id="autocomplete"></input>
    <div id ="map" style={{ width: '100%', height: '400px' }}></div>
    </>
  )
}

export default Map;