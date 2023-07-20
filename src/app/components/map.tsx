"use client"
import React, { ReactElement } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { IMapProps } from '../../../types';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const location = {
  lat: 51.507351,
  lng: -0.127758,
};


const Map = ({ apiKey }): ReactElement => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12}>
        {/* Add markers or additional components as needed */}
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;