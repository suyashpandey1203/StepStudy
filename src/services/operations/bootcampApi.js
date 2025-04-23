// // import { apiConnector } from "../apiConnector";
// // import { CREATE_BOOTCAMP_API } from "../apis";

// export function createBootcamp(data) {
//   const token = localStorage.getItem("token");
//   console.log("Token from localStorage:", token);

//   return async (dispatch) => {
//     try {
//       const res = await apiConnector(
//         "POST",
//         CREATE_BOOTCAMP_API,
//         data, // Send only the form data here
//         {
//           Authorization: `Bearer ${token}`,
//         }
//       );
//       console.log("Create Bootcamp API Response:", res.data);
//     } catch (error) {
//       console.log("Create Bootcamp API Error:", error);
//     }
//   };
// }
