// import React from "react";

// // Importing React Icons
// import { HiUsers } from "react-icons/hi";
// import { ImTree } from "react-icons/im";

// const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
//   return (
//     <div
//       className={`w-[360px] lg:w-[30%] ${
//         currentCard === cardData?.heading
//           ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
//           : "bg-richblack-800"
//       }  text-richblack-25 h-[300px] box-border cursor-pointer`}
//       onClick={() => setCurrentCard(cardData?.heading)}
//     >
//       <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
//         <div
//           className={` ${
//             currentCard === cardData?.heading && "text-richblack-800"
//           } font-semibold text-[20px]`}
//         >
//           {cardData?.heading}
//         </div>

//         <div className="text-richblack-400">{cardData?.description}</div>
//       </div>

//       <div
//         className={`flex justify-between ${
//           currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
//         } px-6 py-3 font-medium`}
//       >
//         {/* Level */}
//         <div className="flex items-center gap-2 text-[16px]">
//           <HiUsers />
//           <p>{cardData?.level}</p>
//         </div>

//         {/* Flow Chart */}
//         <div className="flex items-center gap-2 text-[16px]">
//           <ImTree />
//           <p>{cardData?.lessionNumber} Lession</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      className={`w-[360px] lg:w-[30%] h-[300px] box-border cursor-pointer rounded-xl transition-all duration-300 ease-in-out transform
        ${isActive
          ? "bg-white text-richblack-900 shadow-[0_12px_25px_-5px_rgba(255,230,0,0.4)] scale-[1.02] border border-yellow-50"
          : "bg-richblack-800 text-richblack-25 hover:scale-[1.015] hover:shadow-md border border-richblack-700"}
      `}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Top Content */}
      <div className="border-b-[1px] border-dashed border-richblack-400 h-[80%] p-6 flex flex-col gap-4">
        <h3
          className={`text-[20px] font-semibold ${
            isActive ? "text-richblack-900" : "text-richblack-100"
          }`}
        >
          {cardData?.heading}
        </h3>

        <p className="text-sm text-richblack-400 leading-relaxed">
          {cardData?.description}
        </p>
      </div>

      {/* Bottom Info */}
      <div
        className={`flex justify-between items-center px-6 py-3 text-[15px] font-medium ${
          isActive ? "text-blue-600" : "text-richblack-300"
        }`}
      >
        <div className="flex items-center gap-2">
          <HiUsers className="text-lg" />
          <span>{cardData?.level}</span>
        </div>

        <div className="flex items-center gap-2">
          <ImTree className="text-base" />
          <span>{cardData?.lessionNumber} Lesson</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;



