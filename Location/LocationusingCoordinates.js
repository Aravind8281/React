import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const LocationMap = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    height: '1000px',
    width: '1000px',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const [infoWindow, setInfoWindow] = useState({
    position: null,
    content: null,
  });

  const handleMarkerClick = () => {
    setInfoWindow({
      position: center,
      content: `Latitude: ${latitude}, Longitude: ${longitude}`,
    });
  };

  const handleInfoWindowClose = () => {
    setInfoWindow({
      position: null,
      content: null,
    });
  };

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
      <Marker position={center} onClick={handleMarkerClick} />
      {infoWindow.position && (
        <InfoWindow position={infoWindow.position} onCloseClick={handleInfoWindowClose}>
          <div>{infoWindow.content}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default LocationMap;
