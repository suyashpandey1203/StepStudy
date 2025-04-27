// import React from "react";
// import TimeLineImage from "../../../assets/Images/TimelineImage.png";
// import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
// import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
// import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
// import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

// const TimeLine = [
//     {
//       Logo: Logo1,
//       Heading: "Leadership",
//       Description: "Fully committed to the success company",
//     },
//     {
//       Logo: Logo2,
//       Heading: "Responsibility",
//       Description: "Students will always be our top priority",
//     },
//     {
//       Logo: Logo3,
//       Heading: "Flexibility",
//       Description: "The ability to switch is an important skills",
//     },
//     {
//       Logo: Logo4,
//       Heading: "Solve the problem",
//       Description: "Code your way to a solution",
//     },
//   ];


// const TimelineSection = () => {
//   return (
//     <div>
//       <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
//         <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
//           {TimeLine.map((ele, i) => {
//             return (
//               <div className="flex flex-col lg:gap-3" key={i}>
//                 <div className="flex gap-6" key={i}>
//                   <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
//                     <img src={ele.Logo} alt="" />
//                   </div>
//                   <div>
//                     <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
//                     <p className="text-base">{ele.Description}</p>
//                   </div>
//                 </div>
//                 <div
//                   className={`hidden ${
//                     TimeLine.length - 1 === i ? "hidden" : "lg:block"
//                   }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
//                 ></div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
//           <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
//             {/* Section 1 */}
//             <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
//               <h1 className="text-3xl font-bold w-[75px]">10</h1>
//               <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
//                 Years experiences
//               </h1>
//             </div>

//             {/* Section 2 */}
//             <div className="flex gap-5 items-center lg:px-14 px-7">
//               <h1 className="text-3xl font-bold w-[75px]">250</h1>
//               <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
//                 types of courses
//               </h1>
//             </div>
//             <div></div>
//           </div>
//           <img
//             src={TimeLineImage}
//             alt="timelineImage"
//             className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimelineSection;


import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success of the company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skill",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div className="bg-richblack-900 py-20 px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        {/* Left Side (Timeline) */}
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => (
            <div className="flex flex-col lg:gap-5" key={i}>
              <div className="flex gap-6 items-center">
                {/* Logo with Shadow */}
                <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#FFB300] to-[#FF8000] rounded-full flex justify-center items-center shadow-xl hover:scale-105 transform transition-all duration-300">
                  <img src={ele.Logo} alt={ele.Heading} className="w-3/4" />
                </div>
                <div>
                  <h2 className="font-semibold text-2xl text-white">{ele.Heading}</h2>
                  <p className="text-richblack-200 text-lg">{ele.Description}</p>
                </div>
              </div>

              {/* Dotted Line (Between Items) */}
              <div
                className={`${
                  TimeLine.length - 1 === i ? "hidden" : "lg:block"
                } h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px] mx-auto`}
              ></div>
            </div>
          ))}
        </div>

        {/* Right Side (Timeline Image & Stats) */}
        <div className="relative w-full lg:w-fit h-fit shadow-[0px_0px_30px_0px] shadow-blue-300">
          {/* Stats Section */}
          <div className="absolute left-[50%] bottom-0 transform -translate-x-[50%] translate-y-[50%] bg-gradient-to-r from-[#0072ff] via-[#00c6ff] to-[#00e5ff] text-white uppercase py-8 lg:py-10 px-6 lg:px-14 shadow-lg rounded-lg">
            {/* Section 1 */}
            <div className="flex gap-5 items-center border-b-2 border-white pb-5 mb-5">
              <h1 className="text-4xl font-bold text-white">10</h1>
              <h1 className="text-caribbeangreen-300 text-xl">Years of Experience</h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center">
              <h1 className="text-4xl font-bold text-white">250</h1>
              <h1 className="text-caribbeangreen-300 text-xl">Types of Courses</h1>
            </div>
          </div>

          {/* Timeline Image */}
          <img
            src={TimeLineImage}
            alt="Timeline"
            className="object-cover h-[400px] lg:h-[500px] w-full rounded-xl shadow-[0px_10px_30px_0px] shadow-[#00000050] hover:scale-105 transform transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
