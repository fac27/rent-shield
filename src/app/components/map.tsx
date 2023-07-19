"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

interface MapProps {
  apiKey: string;
}

const Map: React.FC<MapProps> = ({ apiKey }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Add markers or additional components as needed */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;