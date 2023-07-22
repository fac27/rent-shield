'use client';
import React, { useEffect, useState } from 'react';
import {
  initializeMap,
  initializeSearch,
  convertAddress,
} from '@/utils/mapHelper';

const Map = ({ center, markers }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeMap(center, markers);
      setLocation(center);
    }
  }, [location]);
  return (
    <>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </>
  );
};

export default Map;