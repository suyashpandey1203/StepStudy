// import loginImg from "../assets/Images/login.webp"
// import Template from "../components/core/Auth/Template"

// function Login() {
//   return (
//     <Template
//       title="Welcome Back"
//       description1="Build skills for today, tomorrow, and beyond."
//       description2="Education to future-proof your career."
//       image={loginImg}
//       formType="login"
//     />
//   )
// }

// export default Login


import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      wrapperClass="bg-[#F9F9F9] min-h-screen flex justify-center items-center"
      titleClass="text-[#FF6F61] font-bold text-3xl"
      descriptionClass="text-[#333] text-lg"
      formWrapperClass="bg-white p-6 rounded-lg shadow-xl w-full md:w-[400px]"
    />
  )
}

export default Login
