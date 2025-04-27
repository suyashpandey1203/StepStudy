// import React from "react";

// const HighlightText = ({text}) => {
//   return (
//     <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
//       {" "}
//       {text}
//     </span>
//   );
// };

// export default HighlightText;


import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span
      className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text 
        font-semibold tracking-wide 
        transition-all duration-500 ease-in-out 
        hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
    >
      {text}
    </span>
  );
};

export default HighlightText;
