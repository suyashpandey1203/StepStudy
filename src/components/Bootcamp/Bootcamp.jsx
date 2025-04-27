import React, { useEffect, useState } from "react";
import Map from "./Map";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createBootcamp } from "../../services/operations/bootcampApi";

const Bootcamp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    maxStudents: 10,
    maxFaculty: 2,
    startDate: "",
    endDate: "",
    location: {
      lat: "",
      lng: "",
    },
  });

  const [showMap, setShowMap] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 28.6139,
    lng: 77.209,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    handleUseCurrentLocation();
  }, []);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setFormData((prev) => ({
            ...prev,
            location: { ...prev.location, lat: latitude, lng: longitude },
          }));
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (err) => console.error("Location error:", err)
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  const handleMapSelect = (lat, lng, address = "") => {
    setFormData((prev) => ({
      ...prev,
      location: { lat, lng, address },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { lat, lng, ...rest } = formData.location;

    const bootcampData = {
      ...formData,
      technologies: formData.technologies.split(",").map((tech) => tech.trim()),
      location: {
        type: "Point",
        coordinates: [parseFloat(lng), parseFloat(lat)],
        ...rest, // keeps address if provided
      },
    };

    console.log("Bootcamp Data:", bootcampData);

    const sendData = async () => {
      try {
        const token1 = localStorage.getItem("token");
        const token = token1.slice(1, -1);

        const response = await axios.post(
          "http://localhost:4000/api/v1/bootcamp/create",
          bootcampData,
          {
            headers: {
              Authorization: token, // ← include Bearer prefix
            },
          }
        );

        console.log("Bootcamp created successfully:", response.data);
      } catch (error) {
        console.error("Error creating bootcamp:", error);
      }
    };

    sendData();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="shadow-xl rounded-2xl p-6 bg-blue-200">
        <h2 className="text-2xl font-bold mb-4">Create Bootcamp</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block font-medium text-gray-700 mb-1"
            >
              Bootcamp Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-blue-100"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="technologies"
              className="block font-medium text-gray-700 mb-1"
            >
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-blue-100"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="maxStudents"
                className="block font-medium text-gray-700 mb-1"
              >
                Max Students
              </label>
              <input
                type="number"
                id="maxStudents"
                name="maxStudents"
                value={formData.maxStudents}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-blue-100"
              />
            </div>
            <div>
              <label
                htmlFor="maxFaculty"
                className="block font-medium text-gray-700 mb-1"
              >
                Max Instructors
              </label>
              <input
                type="number"
                id="maxFaculty"
                name="maxFaculty"
                value={formData.maxFaculty}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-blue-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block font-medium text-gray-700 mb-1"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-blue-100"
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block font-medium text-gray-700 mb-1"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-blue-100"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm"
              >
                Use Current Location
              </button>
              <button
                type="button"
                onClick={() => setShowMap(true)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg text-sm"
              >
                Select on Map
              </button>
            </div>
            {formData.location.lat && (
              <p className="text-sm text-green-700 mt-1">
                📍 Lat: {formData.location.lat}, Lng: {formData.location.lng}
              </p>
            )}
          </div>

          {showMap && (
            <div className="mt-4 border rounded-xl overflow-hidden">
              <Map
                onSelectLocation={handleMapSelect}
                initialLocation={currentLocation}
              />
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl"
            >
              Submit Bootcamp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bootcamp;
