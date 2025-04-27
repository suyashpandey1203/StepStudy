import React, { useEffect, useState } from "react";
import NearestBootcamp from "./NearestBootcamp";

const JoinBootcamp = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 28.6139,
    lng: 77.209,
  });

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

  const nearestBootcampList = [
    {
      name: "React Native Mobile Development Bootcamp",
      description:
        "Learn how to build mobile apps using React Native and Redux.",
      lat: 28.6153,
      lng: 77.2085,
      maxStudents: 25,
      maxInstructors: 3,
      startDate: "2025-06-01",
      endDate: "2025-06-15",
    },
    {
      name: "Full-Stack Development Bootcamp",
      description:
        "Become a full-stack developer with MERN stack and modern JavaScript.",
      lat: 28.617,
      lng: 77.21,
      maxStudents: 30,
      maxInstructors: 4,
      startDate: "2025-06-05",
      endDate: "2025-06-20",
    },
    {
      name: "Cybersecurity Bootcamp",
      description:
        "Protect data and systems with this hands-on cybersecurity bootcamp.",
      lat: 28.6115,
      lng: 77.211,
      maxStudents: 20,
      maxInstructors: 2,
      startDate: "2025-06-10",
      endDate: "2025-06-25",
    },
    {
      name: "Data Science and Machine Learning Bootcamp",
      description:
        "Master data analysis, machine learning algorithms, and Python programming.",
      lat: 28.6132,
      lng: 77.215,
      maxStudents: 35,
      maxInstructors: 3,
      startDate: "2025-06-12",
      endDate: "2025-06-30",
    },
    {
      name: "UI/UX Design Bootcamp",
      description:
        "Learn the fundamentals of user interface and experience design.",
      lat: 28.609,
      lng: 77.2075,
      maxStudents: 25,
      maxInstructors: 2,
      startDate: "2025-06-15",
      endDate: "2025-06-30",
    },
  ];

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
