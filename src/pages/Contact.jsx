// import React from "react"

// import Footer from "../components/common/Footer"
// import ContactDetails from "../components/ContactPage/ContactDetails"
// import ContactForm from "../components/ContactPage/ContactForm"
// import ReviewSlider from "../components/common/ReviewSlider"

// const Contact = () => {
//   return (
//     <div>
//       <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
//         {/* Contact Details */}
//         <div className="lg:w-[40%]">
//           <ContactDetails />
//         </div>

//         {/* Contact Form */}
//         <div className="lg:w-[60%]">
//           <ContactForm />
//         </div>
//       </div>
//       <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Reviws from Other Learner */}
//         <h1 className="text-center text-4xl font-semibold mt-8">
//           Reviews from other learners
//         </h1>
//         <ReviewSlider />
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Contact


import React from "react";

import Footer from "../components/common/Footer";
import ContactDetails from "../components/ContactPage/ContactDetails";
import ContactForm from "../components/ContactPage/ContactForm";
import ReviewSlider from "../components/common/ReviewSlider";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Contact Section */}
      <section className="w-11/12 max-w-maxContent mx-auto flex flex-col gap-10 lg:flex-row py-20">

        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form with Dark Theme */}
        <div className="lg:w-[60%]">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl">
            <ContactForm />
          </div>
        </div>

      </section>

      {/* Review Section */}
      <section className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center py-20 gap-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          What Our Learners Say
        </h2>
        <ReviewSlider />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;


