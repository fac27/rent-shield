'use client';
import React, { useEffect, FC } from 'react';
import { initializeMap } from 'utils/mapHelper';
import { IMapProps } from '../../types/types';
const Map = ({ center, markers }: IMapProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeMap(center, markers);
    }
  }, [center, markers]);
  return (
    <>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </>
  );
};

export default Map;
