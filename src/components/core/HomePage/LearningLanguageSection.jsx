// import React from 'react'
// import HighlightText from './HighlightText'
// import CTAButton from "../../../components/core/HomePage/Button";
// import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
// import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
// import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

// const LearningLanguageSection = () => {
//   return (
//     <div>
//         <div className="text-4xl font-semibold text-center my-10">
//             Your swiss knife for
//             <HighlightText text={"learning any language"} />
//             <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
//               Using spin making learning multiple languages easy. with 20+
//               languages realistic voice-over, progress tracking, custom schedule
//               and more.
//             </div>
//             <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
//               <img
//                 src={Know_your_progress}
//                 alt=""
//                 className="object-contain  lg:-mr-32 "
//               />
//               <img
//                 src={Compare_with_others}
//                 alt=""
//                 className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
//               />
//               <img
//                 src={Plan_your_lessons}
//                 alt=""
//                 className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
//               />
//             </div>
//           </div>

//           <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
//             <CTAButton active={true} linkto={"/signup"}>
//               <div className="">Learn More</div>
//             </CTAButton>
//           </div>
//     </div>
//   )
// }

// export default LearningLanguageSection



import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div className="bg-richblack-900 text-white py-20 px-6 lg:px-24">
      <div className="text-4xl lg:text-5xl font-semibold text-center my-10">
        Your Swiss Knife for
        <HighlightText text={"Learning Any Language"} />
        <div className="text-center text-richblack-200 font-medium lg:w-[75%] mx-auto leading-8 text-lg mt-5">
          Using spin to make learning multiple languages easy with 20+ languages,
          realistic voice-over, progress tracking, custom schedule, and more.
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-16 gap-10">
        {/* Image Group */}
        <div className="flex gap-8 justify-center">
          <img
            src={Know_your_progress}
            alt="Know your progress"
            className="object-contain w-full lg:w-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
          />
          <img
            src={Compare_with_others}
            alt="Compare with others"
            className="object-contain w-full lg:w-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
          />
          <img
            src={Plan_your_lessons}
            alt="Plan your lessons"
            className="object-contain w-full lg:w-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
          />
        </div>
      </div>

      <div className="w-fit mx-auto mt-10">
        <CTAButton active={true} linkto={"/signup"}>
          <div className="text-lg font-semibold tracking-wide">
            Learn More
          </div>
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
