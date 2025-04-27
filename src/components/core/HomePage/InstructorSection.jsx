// import React from 'react'
// import CTAButton from "../../../components/core/HomePage/Button";
// import { FaArrowRight } from "react-icons/fa";
// import Instructor from "../../../assets/Images/Instructor_1.jpg";
// import HighlightText from './HighlightText';

// const InstructorSection = () => {
//   return (
//     <div>
//         <div className="flex flex-col lg:flex-row gap-20 items-center">
//           <div className="lg:w-[50%]">
//             <img
//               src={Instructor}
//               alt=""
//               className="shadow-white shadow-[-20px_-20px_0_0]"
//             />
//           </div>
//           <div className="lg:w-[50%] flex gap-10 flex-col">
//             <h1 className="lg:w-[50%] text-4xl font-semibold ">
//               Become an
//               <HighlightText text={"instructor"} />
//             </h1>

//             <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
//               Instructors from around the world teach millions of students on
//               StudyNotion. We provide the tools and skills to teach what you
//               love.
//             </p>

//             <div className="w-fit">
//               <CTAButton active={true} linkto={"/signup"}>
//                 <div className="flex items-center gap-3">
//                   Start Teaching Today
//                   <FaArrowRight />
//                 </div>
//               </CTAButton>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default InstructorSection



import React from "react";
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor_1.jpg";
import HighlightText from "./HighlightText";

const InstructorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 px-6 lg:px-20 py-16">
      {/* Image Section */}
      <div className="lg:w-[50%] relative">
        <img
          src={Instructor}
          alt="Instructor"
          className="rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-[50%] flex flex-col gap-6 items-start">
        <h1 className="text-4xl lg:text-5xl font-semibold text-richblack-900">
          Become an{" "}
          <HighlightText text={"instructor"} />
        </h1>
        <p className="text-lg text-richblack-400 font-medium text-justify lg:w-[80%]">
          Instructors from around the world teach millions of students on StudyNotion. We provide the tools and
          skills to teach what you love.
        </p>

        {/* CTA Button */}
        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-3 text-lg font-semibold">
              Start Teaching Today <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
