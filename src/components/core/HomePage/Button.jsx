// import React from "react";
// import { Link } from "react-router-dom";

// const Button = ({ children, active, linkto }) => {
//   return (
//     <Link to={linkto}>
//       <div
//         className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
//           active ? "bg-yellow-50 text-black " : "bg-richblack-800"
//         } hover:shadow-none hover:scale-95 transition-all duration-200 `}
//       >
//         {children}
//       </div>
//     </Link>
//   );
// };

// export default Button;


import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out 
          ${
            active
              ? "bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 text-black shadow-md hover:from-yellow-300 hover:to-yellow-100"
              : "bg-richblack-800 text-richblack-200 border border-richblack-600 hover:bg-richblack-700"
          } 
          hover:scale-95 hover:shadow-sm`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
