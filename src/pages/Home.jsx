
// // Icons Import
// import { FaArrowRight } from "react-icons/fa"
// import { Link } from "react-router-dom"

// // Image and Video Import
// import Banner from "../assets/Images/banner.mp4"
// // Component Imports
// import Footer from "../components/common/Footer"
// import ReviewSlider from "../components/common/ReviewSlider"
// import CTAButton from "../components/core/HomePage/Button"
// import CodeBlocks from "../components/core/HomePage/CodeBlocks"
// import ExploreMore from "../components/core/HomePage/ExploreMore"
// import HighlightText from "../components/core/HomePage/HighlightText"
// import InstructorSection from "../components/core/HomePage/InstructorSection"
// import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
// import TimelineSection from "../components/core/HomePage/TimelineSection"

// function Home() {
//   return (
//     <div>
//       {/* Section 1 */}
//       <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
//         {/* Become a Instructor Button */}
//         <Link to={"/signup"}>
//           <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
//             <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
//               <p>Become an Instructor</p>
//               <FaArrowRight />
//             </div>
//           </div>
//         </Link>

//         {/* Heading */}
//         <div className="text-center text-4xl font-semibold">
//           Empower Your Future with
//           <HighlightText text={"Coding Skills"} />
//         </div>

//         {/* Sub Heading */}
//         <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
//           With our online coding courses, you can learn at your own pace, from
//           anywhere in the world, and get access to a wealth of resources,
//           including hands-on projects, quizzes, and personalized feedback from
//           instructors.
//         </div>

//         {/* CTA Buttons */}
//         <div className="mt-8 flex flex-row gap-7">
//           <CTAButton active={true} linkto={"/signup"}>
//             Learn More
//           </CTAButton>
//           <CTAButton active={false} linkto={"/login"}>
//             Book a Demo
//           </CTAButton>
//         </div>

//         {/* Video */}
//         <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
//           <video
//             className="shadow-[20px_20px_rgba(255,255,255)]"
//             muted
//             loop
//             autoPlay
//           >
//             <source src={Banner} type="video/mp4" />
//           </video>
//         </div>

//         {/* Code Section 1  */}
//         <div>
//           <CodeBlocks
//             position={"lg:flex-row"}
//             heading={
//               <div className="text-4xl font-semibold">
//                 Unlock your
//                 <HighlightText text={"coding potential"} /> with our online
//                 courses.
//               </div>
//             }
//             subheading={
//               "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//             }
//             ctabtn1={{
//               btnText: "Try it Yourself",
//               link: "/signup",
//               active: true,
//             }}
//             ctabtn2={{
//               btnText: "Learn More",
//               link: "/signup",
//               active: false,
//             }}
//             codeColor={"text-yellow-25"}
//             codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
//             backgroundGradient={<div className="codeblock1 absolute"></div>}
//           />
//         </div>

//         {/* Code Section 2 */}
//         <div>
//           <CodeBlocks
//             position={"lg:flex-row-reverse"}
//             heading={
//               <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
//                 Start
//                 <HighlightText text={"coding in seconds"} />
//               </div>
//             }
//             subheading={
//               "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
//             }
//             ctabtn1={{
//               btnText: "Continue Lesson",
//               link: "/signup",
//               active: true,
//             }}
//             ctabtn2={{
//               btnText: "Learn More",
//               link: "/signup",
//               active: false,
//             }}
//             codeColor={"text-white"}
//             codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
//             backgroundGradient={<div className="codeblock2 absolute"></div>}
//           />
//         </div>

//         {/* Explore Section */}
//         <ExploreMore />
//       </div>

//       {/* Section 2 */}
//       <div className="bg-pure-greys-5 text-richblack-700">
//         <div className="homepage_bg h-[320px]">
//           {/* Explore Full Catagory Section */}
//           <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
//             <div className="lg:h-[150px]"></div>
//             <div className="flex flex-row gap-7 text-white lg:mt-8">
//               <CTAButton active={true} linkto={"/signup"}>
//                 <div className="flex items-center gap-2">
//                   Explore Full Catalog
//                   <FaArrowRight />
//                 </div>
//               </CTAButton>
//               <CTAButton active={false} linkto={"/login"}>
//                 Learn More
//               </CTAButton>
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
//           {/* Job that is in Demand - Section 1 */}
//           <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
//             <div className="text-4xl font-semibold lg:w-[45%] ">
//               Get the skills you need for a{" "}
//               <HighlightText text={"job that is in demand."} />
//             </div>
//             <div className="flex flex-col items-start gap-10 lg:w-[40%]">
//               <div className="text-[16px]">
//                 The modern StepStudy is the dictates its own terms. Today, to
//                 be a competitive specialist requires more than professional
//                 skills.
//               </div>
//               <CTAButton active={true} linkto={"/signup"}>
//                 <div className="">Learn More</div>
//               </CTAButton>
//             </div>
//           </div>

//           {/* Timeline Section - Section 2 */}
//           <TimelineSection />

//           {/* Learning Language Section - Section 3 */}
//           <LearningLanguageSection />
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Become a instructor section */}
//         <InstructorSection />

//         {/* Reviws from Other Learner */}
//         <h1 className="text-center text-4xl font-semibold mt-8">
//           Reviews from other learners
//         </h1>
//         <ReviewSlider />
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

// export default Home






import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../assets/Images/large.mp4";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimelineSection from "../components/core/HomePage/TimelineSection";

function Home() {
  return (
    <div className="bg-gradient-to-tr from-[#f0f4f8] to-[#e0eafc] text-gray-800">
      {/* Hero Section */}
      <div className="relative mx-auto flex w-11/12 max-w-[1400px] flex-col items-center justify-center gap-10 py-24">
        
        {/* Instructor CTA */}
        <Link to="/signup">
          <div className="group w-fit rounded-full bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] p-[2px] shadow-lg hover:scale-95 transition-all duration-300">
            <div className="flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-bold text-[#333] group-hover:bg-[#f5f5f5] transition-all duration-300">
              Become an Instructor <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
        {/*hero heading*/}
        <h1 className="text-center text-6xl md:text-8xl font-bold leading-tight tracking-tight text-[#2D3748]">
  Elevate Your <HighlightText text="Future with StepStudy" />
</h1>

      

        {/* Subheading */}
        <p className="max-w-2xl text-center text-lg text-gray-600 leading-relaxed">
        Master future-ready skills through expert-led projects and mentorship — unlock your path to success today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-6 mt-8">
          <CTAButton active={true} linkto="/signup">
            <span className="uppercase tracking-wide font-semibold">Get Started</span>
          </CTAButton>
          <CTAButton active={false} linkto="/login">
            <span className="uppercase tracking-wide font-semibold">Book a Demo</span>
          </CTAButton>
        </div>

        {/* Hero Video */}
        <div className="relative mt-16 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-white">
          <video className="w-full rounded-3xl" muted loop autoPlay playsInline>
            <source src={Banner} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl"></div>
        </div>

        {/* CodeBlock 1 */}
        <CodeBlocks
          position="lg:flex-row"
          heading={
            <h2 className="text-4xl font-bold text-[#333]">
              Unlock Your <HighlightText text="Potential" />
            </h2>
          }
          subheading="Learn with project-based lessons and real-world case studies designed by experts."
          ctabtn1={{ btnText: "Try Now", link: "/signup", active: true }}
          ctabtn2={{ btnText: "Learn More", link: "/signup", active: false }}
          codeColor="text-indigo-500"
          codeblock={`function Welcome() {\n  return <h1>Hello, Developer!</h1>;\n}`}
          backgroundGradient={<div className="codeblock1 absolute blur-md opacity-20"></div>}
        />

        {/* CodeBlock 2 */}
        <CodeBlocks
          position="lg:flex-row-reverse"
          heading={
            <h2 className="w-full text-4xl font-bold text-[#333]">
              Code, Create & <HighlightText text="Conquer" />
            </h2>
          }
          subheading="Jump right into coding and see real results. Build projects, master new frameworks, and grow faster."
          ctabtn1={{ btnText: "Start Building", link: "/signup", active: true }}
          ctabtn2={{ btnText: "Learn More", link: "/signup", active: false }}
          codeColor="text-blue-400"
          codeblock={`const App = () => (\n  <div>Start Learning Today!</div>\n);`}
          backgroundGradient={<div className="codeblock2 absolute blur-md opacity-20"></div>}
        />

        {/* Explore More Section */}
        <ExploreMore />
      </div>

      {/* Skills Development Section */}
      <div className="bg-white text-gray-700 py-24">
        <div className="mx-auto flex w-11/12 max-w-6xl flex-col items-center gap-16">
          
          {/* Heading + Description */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <h2 className="text-4xl font-bold text-center lg:text-left lg:w-1/2">
              Build Skills for the <HighlightText text="Jobs of Tomorrow" />
            </h2>
            <p className="text-lg lg:w-1/2">
            "Advance your career with in-demand skills in Web Development, AI, Data Science, and beyond. Learn from industry leaders with real-world projects and mentorship designed for tomorrow's success."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-6">
            <CTAButton active={true} linkto="/signup">
              <span>Explore Courses</span>
            </CTAButton>
            <CTAButton active={false} linkto="/login">
              <span>Learn More</span>
            </CTAButton>
          </div>

          {/* Timeline and Languages */}
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Instructors & Reviews Section */}
      <div className="relative mx-auto my-24 flex w-11/12 max-w-6xl flex-col items-center gap-14">
        <InstructorSection />
        <h2 className="text-center text-4xl font-semibold mt-8">
          Trusted by Thousands of Learners
        </h2>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
