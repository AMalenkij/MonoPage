'use client';

import { memo, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
  children: React.ReactNode
}

const containerStyle = {
  width: '100%',
  height: '60vh',
};

function Map({ location, children }: MapProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleMarkerClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
        <Marker position={location} onClick={handleMarkerClick} />
        {isOpen && (
          <InfoWindow position={location} onCloseClick={handleCloseClick}>
            {children}
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);
