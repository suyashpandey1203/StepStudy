import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";

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
  const [selectedBootcamp, setSelectedBootcamp] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleJoin = (bootcamp) => {
    setActiveBootcamp(bootcamp);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/bootcamp-notify/request",
        {
          bootcampOwnerId: activeBootcamp.createdBy, // ensure this field exists in bootcamp
          message,
          resumeUrl,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token").slice(1, -1),
          },
        }
      );
      console.log("Response:", res.data);

      if (res.data.success) {
        setStatus("Request sent successfully!");
        setShowForm(false);
        setMessage("");
        setResumeUrl("");
      } else {
        setStatus("Failed to send request.");
      }
    } catch (error) {
      setStatus("Server error. Please try again later.");
    }
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
    <div className="p-4 space-y-6 relative">
      <h2 className="text-2xl font-bold text-white mb-4">
        🗺️ Nearest Bootcamps
      </h2>

      {["active", "upcoming", "past"].map((category) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-white capitalize mb-2">
            {category} Bootcamps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorizedBootcamps[category].length > 0 ? (
              renderBootcampCards(categorizedBootcamps[category])
            ) : (
              <p className="text-gray-400">No {category} bootcamps.</p>
            )}
          </div>
        </div>
      ))}

      {/* Modal Form */}
      {showForm && activeBootcamp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-xl font-semibold mb-4">
              Join {activeBootcamp.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  className="w-full border rounded p-2"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Resume URL
                </label>
                <input
                  type="url"
                  className="w-full border rounded p-2"
                  value={resumeUrl}
                  onChange={(e) => setResumeUrl(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send Request
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
              {status && (
                <p className="text-sm text-green-600 mt-2">{status}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NearestBootcamp;
