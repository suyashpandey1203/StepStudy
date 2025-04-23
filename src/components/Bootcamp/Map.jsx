// MapComponent.jsx
import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

// Container style for the map
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Default center (e.g., New Delhi)
const center = {
  lat: 28.6139,
  lng: 77.209,
};

const Map = ({ onSelectLocation, initialLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(
    initialLocation || center
  );

  const handleMapClick = (e) => {
    const { latLng } = e;
    const newLat = latLng.lat();
    const newLng = latLng.lng();
    setSelectedLocation({ lat: newLat, lng: newLng });
    onSelectLocation(newLat, newLng); // Pass selected coordinates back to the parent
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={selectedLocation}
      zoom={10}
      onClick={handleMapClick}
    >
      <Marker position={selectedLocation} />
      {selectedLocation && (
        <InfoWindow position={selectedLocation}>
          <div>
            <strong>Selected Location</strong>
            <p>
              Lat: {selectedLocation.lat}, Lng: {selectedLocation.lng}
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
