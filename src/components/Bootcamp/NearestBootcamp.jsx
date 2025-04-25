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

  const handleJoin = (bootcamp) => {
    alert(`Request sent to join ${bootcamp.name}`);
  };

  const currentDate = new Date();

  const categorizedBootcamps = {
    active: [],
    upcoming: [],
    past: [],
  };

  nearestBootcampList?.forEach((bootcamp) => {
    const startDate = new Date(bootcamp.startDate);
    const endDate = new Date(bootcamp.endDate);

    if (currentDate >= startDate && currentDate <= endDate) {
      categorizedBootcamps.active.push(bootcamp);
    } else if (currentDate < startDate) {
      categorizedBootcamps.upcoming.push(bootcamp);
    } else {
      categorizedBootcamps.past.push(bootcamp);
    }
  });

  const renderBootcampCards = (bootcamps) =>
    bootcamps.map((bootcamp, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition cursor-pointer"
        onClick={() =>
          setSelectedLocation({ lat: bootcamp.lat, lng: bootcamp.lng })
        }
      >
        <div className="flex flex-col justify-between h-full space-y-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {bootcamp.title}
            </h3>
            <p className="text-sm text-gray-600">{bootcamp.description}</p>
            <div className="text-sm mt-2 text-gray-700">
              🧑‍🎓 {bootcamp.maxStudents} students | 👨‍🏫 {bootcamp.maxInstructors}{" "}
              instructors
            </div>
            <div className="text-sm text-gray-500">
              📅 {bootcamp.startDate} – {bootcamp.endDate}
            </div>
          </div>

          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            onClick={(e) => {
              e.stopPropagation();
              handleJoin(bootcamp);
            }}
          >
            Join Bootcamp
          </button>
        </div>
      </div>
    ));

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        🗺️ Nearest Bootcamps
      </h2>

      {["active", "upcoming", "past"].map((category) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-gray-700 capitalize mb-2 text-white">
            {category} Bootcamps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorizedBootcamps[category].length > 0 ? (
              renderBootcampCards(categorizedBootcamps[category])
            ) : (
              <p className="text-gray-500">No {category} bootcamps.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NearestBootcamp;
