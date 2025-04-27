// import { FcGoogle } from "react-icons/fc"
// import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/frame.png"
// import LoginForm from "./LoginForm"
// import SignupForm from "./SignupForm"

// function Template({ title, description1, description2, image, formType }) {
//   const { loading } = useSelector((state) => state.auth)

//   return (
//     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
//           <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
//               {title}
//             </h1>
//             <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
//               <span className="text-richblack-100">{description1}</span>{" "}
//               <span className="font-edu-sa font-bold italic text-blue-100">
//                 {description2}
//               </span>
//             </p>
//             {formType === "signup" ? <SignupForm /> : <LoginForm />}
//           </div>
//           <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <img
//               src={frameImg}
//               alt="Pattern"
//               width={558}
//               height={504}
//               loading="lazy"
//             />
//             <img
//               src={image}
//               alt="Students"
//               width={558}
//               height={504}
//               loading="lazy"
//               className="absolute -top-4 right-4 z-10"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Template



import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="bg-[#F7F8FA] min-h-screen flex items-center justify-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex flex-col-reverse md:flex-row items-center gap-y-12 md:gap-y-0 md:gap-x-12 w-full max-w-7xl py-12 px-6 md:px-16">
          {/* Left Section: Text and Form */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 max-w-[450px]">
            <h1 className="text-[#1E1E1E] text-3xl font-semibold tracking-wide mb-4">
              {title}
            </h1>
            <p className="text-[#555555] text-lg leading-[1.625rem] mb-6 text-center md:text-left">
              <span>{description1}</span>{" "}
              <span className="font-bold text-[#007BFF]">{description2}</span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* Right Section: Images */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff] rounded-lg shadow-xl z-0"></div>
            <img
              src={frameImg}
              alt="Frame"
              className="w-full h-full object-cover rounded-lg shadow-lg z-0"
              loading="lazy"
            />
            <img
              src={image}
              alt="Main Image"
              className="absolute top-0 right-0 z-10 w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
