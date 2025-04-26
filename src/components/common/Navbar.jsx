import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import axios from "axios";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const userId = user?._id;

  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // Fetch notifications
  useEffect(() => {
    const getNotifications = async () => {
      const token1 = localStorage.getItem("token");
      const token2 = token1?.slice(1, -1);
      if (!token2) return;
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/bootcamp-notify/${userId}`,
          {
            headers: {
              Authorization: token2,
            },
          }
        );
        console.log("Notifications received successfully:", res.data);
        setNotifications(res.data.notifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    if (userId) {
      getNotifications();
    }
  }, [userId]);

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
      setNotifications((prev) => prev.map((n) => ({ ...n, seen: true })));
    }
  }, [isDrawerOpen]);

  // Accept / Reject Handlers
  const handleAccept = async (notif) => {
    console.log("Accepted:", notif);
    try {
      await axios.post(
        `http://localhost:4000/api/v1/bootcamp-notify/accept`,
        { notificationId: notif._id },
        {
          headers: {
            Authorization: localStorage.getItem("token")?.slice(1, -1),
          },
        }
      );
      setNotifications((prev) => prev.filter((n) => n._id !== notif._id));
    } catch (error) {
      console.error("Error accepting notification:", error);
    }
  };

  const handleReject = async (notif) => {
    console.log("Rejected:", notif);
    try {
      await axios.post(
        `http://localhost:4000/api/v1/bootcamp-notify/reject`,
        { notificationId: notif._id },
        {
          headers: {
            Authorization: localStorage.getItem("token")?.slice(1, -1),
          },
        }
      );
      setNotifications((prev) => prev.filter((n) => n._id !== notif._id));
    } catch (error) {
      console.error("Error rejecting notification:", error);
    }
  };

  return (
    <>
      <div
        className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
          location.pathname !== "/" ? "bg-richblack-800" : ""
        } transition-all duration-200`}
      >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-6 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          subLinks
                            .filter((s) => s?.courses?.length > 0)
                            .map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.path}>
                      <p
                        className={
                          matchRoute(link.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Login / Cart / Notification / Profile */}
          <div className="hidden items-center gap-x-4 md:flex">
            {/* Notification Bell */}
            <div className="relative">
              <button onClick={() => setDrawerOpen(true)} className="relative">
                <FiBell className="w-5 h-5 text-richblack-100" />
                {notifications.some((n) => !n.seen) && (
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                )}
              </button>
            </div>

            {/* Cart */}
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {totalItems > 0 && (
                  <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            {/* Auth */}
            {token ? (
              <ProfileDropdown />
            ) : (
              <>
                <Link to="/login">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
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
        <div className="fixed right-0 top-0 w-full max-w-md h-full bg-white text-black shadow-lg p-6 overflow-auto">
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-right text-gray-500 hover:text-black mb-4"
          >
            Close ✖
          </button>
          <h2 className="text-xl font-bold mb-4">Notifications</h2>
          {notifications.length === 0 ? (
            <p className="text-gray-700">No notifications yet.</p>
          ) : (
            notifications.map((notif, index) => (
              <div key={index} className="mb-4 border-b pb-2">
                <p className="font-semibold text-lg">
                  {notif.type === "request" ? "Join Request" : "Response"}
                </p>
                <p>
                  👤 {notif.sender?.firstName} {notif.sender?.lastName}
                </p>
                <p>📧 {notif.sender?.email}</p>
                <p>📝 {notif.message}</p>
                {notif.resumeUrl && (
                  <p>
                    📄 Resume:{" "}
                    <a
                      href={notif.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      View
                    </a>
                  </p>
                )}
                {notif.dateSuggested && (
                  <p>
                    📅 Suggested Date:{" "}
                    {new Date(notif.dateSuggested).toLocaleDateString()}
                  </p>
                )}

                {/* Accept/Reject Buttons */}
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleAccept(notif)}
                    className="bg-green-500 text-white bg-caribbeangreen-400 px-3 py-1 rounded hover:bg-green-600 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(notif)}
                    className="bg-red-500 text-white bg-pink-600 px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </Dialog>
    </>
  );
}

export default Navbar;
