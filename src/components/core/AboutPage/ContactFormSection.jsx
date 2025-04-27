// import React from "react";
// import ContactUsForm from "../../ContactPage/ContactUsForm";

// const ContactFormSection = () => {
//   return (
//     <div className="mx-auto">
//       <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
//       <p className="text-center text-richblack-300 mt-3">
//         We&apos;d love to here for you, Please fill out this form.
//       </p>
//       <div className="mt-12 mx-auto">
//         <ContactUsForm />
//       </div>
//     </div>
//   );
// };

// export default ContactFormSection;


import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto px-6 py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl shadow-lg max-w-7xl">
      <h1 className="text-center text-4xl font-semibold text-white">
        Get in Touch
      </h1>
      <p className="text-center text-lg text-gray-400 mt-3 max-w-3xl mx-auto">
        We’d love to hear from you! Please fill out the form below and let’s start the conversation.
      </p>

      <div className="mt-12 mx-auto max-w-4xl bg-gray-900 p-8 rounded-xl shadow-xl">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;

