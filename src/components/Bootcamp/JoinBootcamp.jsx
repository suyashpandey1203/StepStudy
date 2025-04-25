import React, { useEffect, useState } from "react";
import NearestBootcamp from "./NearestBootcamp";
import axios from "axios";

const JoinBootcamp = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 28.6139,
    lng: 77.209,
  });
  const [nearestBootcampList, setNearestBootcampList] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (err) => {
          console.error("Location error:", err);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const token1 = localStorage.getItem("token");
        const token = token1.slice(1, -1);

        const response = await axios.get(
          "http://localhost:4000/api/v1/bootcamp/all",

          {
            headers: {
              Authorization: token, // ← include Bearer prefix
            },
          }
        );

        console.log("Bootcamps fetched successfully:", response.data.data);
        setNearestBootcampList(response.data.data);
      } catch (error) {
        console.error("Error fetching bootcamps:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <NearestBootcamp
        initialLocation={currentLocation}
        nearestBootcampList={nearestBootcampList}
      />
    </div>
  );
};

export default JoinBootcamp;
