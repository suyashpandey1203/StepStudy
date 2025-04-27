import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const fallbackCenter = {
  lat: 28.6139,
  lng: 77.209,
};

const NearestBootcamp = ({ initialLocation, nearestBootcampList }) => {
  const [selectedLocation, setSelectedLocation] = useState(
    initialLocation || fallbackCenter
  );
  const [activeBootcamp, setActiveBootcamp] = useState(null);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={10}
      >
        {/* User's current location */}
        <Marker position={selectedLocation} label="You" />

        {/* Bootcamp markers */}
        {nearestBootcampList?.map((bootcamp, index) => (
          <Marker
            key={index}
            position={{ lat: bootcamp.lat, lng: bootcamp.lng }}
            onClick={() => setActiveBootcamp(bootcamp)}
            label="B"
          />
        ))}

        {/* InfoWindow for selected bootcamp */}
        {activeBootcamp && (
          <InfoWindow
            position={{ lat: activeBootcamp.lat, lng: activeBootcamp.lng }}
            onCloseClick={() => setActiveBootcamp(null)}
          >
            <div>
              <h4 className="font-bold">{activeBootcamp.name}</h4>
              <p>{activeBootcamp.description}</p>
              <p>
                🧑‍🎓 Students: {activeBootcamp.maxStudents} | 👨‍🏫 Instructors:{" "}
                {activeBootcamp.maxInstructors}
              </p>
              <p>
                📅 {activeBootcamp.startDate} to {activeBootcamp.endDate}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      {/* Bootcamp list below the map */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2 text-white">
          Nearest Bootcamps
        </h2>
        <ul className="space-y-2 bg-white">
          {nearestBootcampList?.map((bootcamp, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer"
              onClick={() =>
                setSelectedLocation({ lat: bootcamp.lat, lng: bootcamp.lng })
              }
            >
              <h3 className="font-bold">{bootcamp.name}</h3>
              <p>{bootcamp.description}</p>
              <p>
                🧑‍🎓 {bootcamp.maxStudents} students | 👨‍🏫{" "}
                {bootcamp.maxInstructors} instructors
              </p>
              <p>
                📅 {bootcamp.startDate} to {bootcamp.endDate}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NearestBootcamp;
