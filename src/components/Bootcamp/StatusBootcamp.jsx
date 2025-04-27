import React from "react";

const requestedBootcamps = [
  {
    bootcamp: {
      name: "Full Stack Web Dev Bootcamp",
      description: "Learn MERN stack with real-world projects.",
      startDate: "2025-05-01",
      endDate: "2025-06-01",
      locationName: "Bangalore Tech Hub",
    },
    status: "Pending",
    role: "Student",
  },
  {
    bootcamp: {
      name: "Data Science Accelerator",
      description: "Dive deep into machine learning and AI.",
      startDate: "2025-04-15",
      endDate: "2025-05-15",
      locationName: "Mumbai Innovation Center",
    },
    status: "Accepted",
    role: "Instructor",
  },
  {
    bootcamp: {
      name: "UI/UX Design Bootcamp",
      description: "Master Figma, user flows, and prototyping.",
      startDate: "2025-04-10",
      endDate: "2025-04-30",
      locationName: "Delhi Design Lab",
    },
    status: "Rejected",
    role: "Student",
  },
];

const StatusBootcamp = () => {
  return (
    <div className="text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Bootcamp Join Requests</h2>
      <ul className="space-y-3">
        {requestedBootcamps?.length > 0 ? (
          requestedBootcamps.map((request, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-bold">{request.bootcamp.name}</h3>
                <p className="text-sm">{request.bootcamp.description}</p>
                <p className="text-sm mt-1">
                  📅 {request.bootcamp.startDate} to {request.bootcamp.endDate}
                </p>
                <p className="text-sm mt-1">
                  📍 Location: {request.bootcamp.locationName || "N/A"}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  request.status === "Accepted"
                    ? "bg-green-500"
                    : request.status === "Rejected"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
              >
                {request.status}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-300">
            You haven’t requested to join any bootcamps yet.
          </p>
        )}
      </ul>
    </div>
  );
};

export default StatusBootcamp;
