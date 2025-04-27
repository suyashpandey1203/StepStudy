// import React from "react";
// import ContactUsForm from "./ContactUsForm";

// const ContactForm = () => {
//   return (
//     <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
//       <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
//         Got a Idea? We&apos;ve got the skills. Let&apos;s team up
//       </h1>
//       <p className="">
//         Tell us more about yourself and what you&apos;re got in mind.
//       </p>

//       <div className="mt-7">
//         <ContactUsForm />
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white rounded-xl p-8 lg:p-16 shadow-lg transform transition-all hover:scale-105">
      <h1 className="text-4xl font-extrabold leading-tight text-center mb-4">
        Got an Idea? We’ve Got the Skills. Let’s Team Up!
      </h1>
      <p className="text-lg font-medium text-center mb-8">
        Tell us more about yourself and what you're thinking. We're here to help!
      </p>

      <div className="mt-8">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
