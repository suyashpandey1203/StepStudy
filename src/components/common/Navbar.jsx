// import { useEffect, useState } from "react";
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
// import { BsChevronDown } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import { Link, matchPath, useLocation } from "react-router-dom";

// import logo from "../../assets/Logo/StepStudy.png";
// import { NavbarLinks } from "../../data/navbar-links";
// import { apiConnector } from "../../services/apiconnector";
// import { categories } from "../../services/apis";
// import { ACCOUNT_TYPE } from "../../utils/constants";
// import ProfileDropdown from "../core/Auth/ProfileDropDown";

// import { FiBell } from "react-icons/fi";
// import { Dialog } from "@headlessui/react";

// function Navbar() {
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   const { totalItems } = useSelector((state) => state.cart);
//   const location = useLocation();

//   const [subLinks, setSubLinks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       bootcampName: "MERN Bootcamp",
//       applicant: {
//         name: "Jane Doe",
//         email: "jane@example.com",
//         role: "Instructor",
//         resumeLink: "https://example.com/resume/jane",
//       },
//       status: "unread",
//     },
//   ]);

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname);
//   };

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       try {
//         const res = await apiConnector("GET", categories.CATEGORIES_API);
//         setSubLinks(res.data.data);
//       } catch (error) {
//         console.log("Could not fetch Categories.", error);
//       }
//       setLoading(false);
//     })();
//   }, []);

//   useEffect(() => {
//     if (isDrawerOpen) {
//       setNotifications((prev) => prev.map((n) => ({ ...n, status: "read" })));
//     }
//   }, [isDrawerOpen]);

//   return (
//     <>
//       <div
//         className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
//           location.pathname !== "/" ? "bg-richblack-800" : ""
//         } transition-all duration-200`}
//       >
//         <div className="flex w-11/12 max-w-maxContent items-center justify-between">
//           {/* Logo */}
//           <Link to="/">
//             <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
//           </Link>

//           {/* Navigation links */}
//           <nav className="hidden md:block">
//             <ul className="flex gap-x-6 text-richblack-25">
//               {NavbarLinks.map((link, index) => (
//                 <li key={index}>
//                   {link.title === "Catalog" ? (
//                     <>
//                       <div
//                         className={`group relative flex cursor-pointer items-center gap-1 ${
//                           matchRoute("/catalog/:catalogName")
//                             ? "text-yellow-25"
//                             : "text-richblack-25"
//                         }`}
//                       >
//                         <p>{link.title}</p>
//                         <BsChevronDown />
//                         <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
//                           <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
//                           {loading ? (
//                             <p className="text-center">Loading...</p>
//                           ) : subLinks && subLinks.length ? (
//                             <>
//                               {subLinks
//                                 ?.filter(
//                                   (subLink) => subLink?.courses?.length > 0
//                                 )
//                                 ?.map((subLink, i) => (
//                                   <Link
//                                     to={`/catalog/${subLink.name
//                                       .split(" ")
//                                       .join("-")
//                                       .toLowerCase()}`}
//                                     className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
//                                     key={i}
//                                   >
//                                     <p>{subLink.name}</p>
//                                   </Link>
//                                 ))}
//                             </>
//                           ) : (
//                             <p className="text-center">No Courses Found</p>
//                           )}
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <Link to={link?.path}>
//                       <p
//                         className={`${
//                           matchRoute(link?.path)
//                             ? "text-yellow-25"
//                             : "text-richblack-25"
//                         }`}
//                       >
//                         {link.title}
//                       </p>
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Login / Signup / Dashboard / Cart / Notification */}
//           <div className="hidden items-center gap-x-4 md:flex">
//             {/* Notification Bell */}
//             <div className="relative">
//               <button onClick={() => setDrawerOpen(true)} className="relative">
//                 <FiBell className="w-5 h-5 text-richblack-100" />

//                 {notifications.some((n) => n.status === "unread") && (
//                   <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
//                 )}
//               </button>
//             </div>

//             {/* Cart */}
//             {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
//               <Link to="/dashboard/cart" className="relative">
//                 <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
//                 {totalItems > 0 && (
//                   <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//             )}

//             {/* Auth Buttons */}
//             {token === null && (
//               <>
//                 <Link to="/login">
//                   <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Log in
//                   </button>
//                 </Link>
//                 <Link to="/signup">
//                   <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Sign up
//                   </button>
//                 </Link>
//               </>
//             )}
//             {token !== null && <ProfileDropdown />}
//           </div>

//           {/* Mobile Menu */}
//           <button className="mr-4 md:hidden">
//             <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//           </button>
//         </div>
//       </div>

//       {/* Drawer Panel for Notifications */}
//       <Dialog
//         open={isDrawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         className="fixed inset-0 z-50"
//       >
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30"
//           aria-hidden="true"
//         />
//         <div className="fixed right-0 top-0 w-full max-w-md h-full bg-white text-black shadow-lg p-6 overflow-auto">
//           <button
//             onClick={() => setDrawerOpen(false)}
//             className="text-right text-gray-500 hover:text-black mb-4"
//           >
//             Close ✖
//           </button>
//           <h2 className="text-xl font-bold mb-4">Join Requests</h2>
//           {notifications.length === 0 ? (
//             <p className="text-gray-700">No notifications yet.</p>
//           ) : (
//             notifications.map((notif) => (
//               <div key={notif.id} className="mb-4 border-b pb-2">
//                 <p className="font-semibold text-lg">{notif.bootcampName}</p>
//                 <p>👤 {notif.applicant.name}</p>
//                 <p>📧 {notif.applicant.email}</p>
//                 <p>🎓 Role: {notif.applicant.role}</p>
//                 <p>
//                   📄 Resume:{" "}
//                   <a
//                     href={notif.applicant.resumeLink}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     View
//                   </a>
//                 </p>
//               </div>
//             ))
//           )}
//         </div>
//       </Dialog>
//     </>
//   );
// }

// export default Navbar;


import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo from "../../assets/Logo/stepstudy_2.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";

import { FiBell } from "react-icons/fi";
import { Dialog } from "@headlessui/react";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      bootcampName: "MERN Bootcamp",
      applicant: {
        name: "Jane Doe",
        email: "jane@example.com",
        role: "Instructor",
        resumeLink: "https://example.com/resume/jane",
      },
      status: "unread",
    },
  ]);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      setNotifications((prev) => prev.map((n) => ({ ...n, status: "read" })));
    }
  }, [isDrawerOpen]);

  return (
    <>
      <div
        className={`flex h-16 items-center justify-between border-b-[1px] border-b-richblack-700 bg-richblack-900 text-white transition-all duration-200`}
      >
        <div className="flex w-full max-w-screen-xl items-center justify-between px-6">
      

          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-8">
                {/* Logo */}
          <Link to="/">
            <img
            style={{width:"70%", height:"70%"}}
              src={logo}
              alt="Logo"
              width={300}
              height={40}
              loading="lazy"
            />
          </Link>
            <ul className="flex gap-x-8 text-lg">
              {NavbarLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.title === "Catalog" ? (
                    <>
                      <div
                        className={`group relative flex cursor-pointer items-center gap-2 text-white hover:text-yellow-300`}
                      >
                        <p>{link.title}</p>
                        <BsChevronDown className="text-white" />
                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[250px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-800 p-4 text-white opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100">
                          <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-800"></div>
                          {loading ? (
                            <p className="text-center">Loading...</p>
                          ) : subLinks && subLinks.length ? (
                            <>
                              {subLinks
                                ?.filter(
                                  (subLink) => subLink?.courses?.length > 0
                                )
                                ?.map((subLink, i) => (
                                  <Link
                                    to={`/catalog/${subLink.name
                                      .split(" ")
                                      .join("-")
                                      .toLowerCase()}`}
                                    className="rounded-lg py-4 pl-4 hover:bg-richblack-700"
                                    key={i}
                                  >
                                    <p>{subLink.name}</p>
                                  </Link>
                                ))}
                            </>
                          ) : (
                            <p className="text-center">No Courses Found</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link?.path}
                      className={`${matchRoute(link?.path)
                          ? "text-yellow-300"
                          : "text-white"
                        } hover:text-yellow-300 transition-all duration-300`}
                    >
                      <p>{link.title}</p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons / Cart / Notifications */}
          <div className="hidden items-center gap-x-6 md:flex">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setDrawerOpen(true)}
                className="relative p-2 rounded-lg hover:bg-richblack-700"
              >
                <FiBell className="w-6 h-6 text-white" />

                {notifications.some((n) => n.status === "unread") && (
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                )}
              </button>
            </div>

            {/* Cart */}
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-white" />
                {totalItems > 0 && (
                  <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-yellow-500 text-center text-xs font-bold text-richblack-800">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            {/* Auth Buttons */}
            {token === null && (
              <>
                <Link to="/login">
                  <button className="rounded-[8px] border border-richblack-700 bg-transparent px-[12px] py-[8px] text-white hover:bg-richblack-700 transition-all duration-300">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-[8px] border border-richblack-700 bg-transparent px-[12px] py-[8px] text-white hover:bg-richblack-700 transition-all duration-300">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            {token !== null && <ProfileDropdown />}
          </div>

          {/* Mobile Menu Button */}
          <button className="mr-4 md:hidden">
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          </button>
        </div>
      </div>

      {/* Drawer Panel for Notifications */}
      <Dialog
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        className="fixed inset-0 z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-30"
          aria-hidden="true"
        />
        <div className="fixed right-0 top-0 w-full max-w-md h-full bg-richblack-800 text-white shadow-lg p-6 overflow-auto">
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-right text-gray-500 hover:text-white mb-4"
          >
            Close ✖
          </button>
          <h2 className="text-xl font-bold mb-4">Join Requests</h2>
          {notifications.length === 0 ? (
            <p className="text-gray-700">No notifications yet.</p>
          ) : (
            notifications.map((notif) => (
              <div key={notif.id} className="mb-4 border-b pb-2">
                <p className="font-semibold text-lg">{notif.bootcampName}</p>
                <p>👤 {notif.applicant.name}</p>
                <p>📧 {notif.applicant.email}</p>
                <p>🎓 Role: {notif.applicant.role}</p>
                <p>
                  📄 Resume:{" "}
                  <a
                    href={notif.applicant.resumeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    View
                  </a>
                </p>
              </div>
            ))
          )}
        </div>
      </Dialog>
    </>
  );
}

export default Navbar;
