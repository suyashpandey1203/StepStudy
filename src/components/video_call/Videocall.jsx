import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Videocall = () => {
  const [instructors, setInstructors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you store the token in local storage

        const response = await axios.get(
          "http://localhost:4000/api/v1/student/instructors",
          {
            headers: {
              Authorization: token.slice(1, -1),
            },
          }
        );
        console.log("hello", response.data);

        if (response.data.success) {
          setInstructors(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch instructors:", error);
      }
    };

    fetchInstructors();
  }, []);

  const handleVideoCall = async (instructorId) => {
    const roomId = `${instructorId}`; // Combine user and instructor IDs to create a unique room
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/bootcamp-notify/request",
        {
          bootcampOwnerId: instructorId, // ensure this field exists in bootcamp
          message: "Requesting a video call",
          resumeUrl: "http://localhost:3000/dashboard/video-call/" + roomId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token").slice(1, -1),
          },
        }
      );
    } catch (error) {
      console.error("Failed to send video call request:", error);
    }

    navigate(`/dashboard/video-call/${roomId}`); // Navigate to the video call page
  };

  return (
    <div className="text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Your Instructors</h1>
      {instructors.length === 0 ? (
        <p>No instructors found.</p>
      ) : (
        <div className="space-y-4">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow"
            >
              <div>
                <h2 className="text-xl font-semibold">{instructor.name}</h2>
                <p className="text-gray-400">{instructor.email}</p>
              </div>
              <button
                onClick={() => handleVideoCall(instructor._id)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Video Call
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Videocall;
