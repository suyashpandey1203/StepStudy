import React, { useEffect, useState } from "react";
import axios from "axios";

const Videocall = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you store the token in local storage

        const response = await axios.get(
          "http://localhost:4000/api/student/instructors",
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

  const handleVideoCall = (instructorId) => {
    // Logic to start a video call (navigate to room, open call, etc.)
    console.log("Starting call with instructor:", instructorId);
    // Example: redirect to a call page
    // navigate(`/videocall/${instructorId}`);
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
