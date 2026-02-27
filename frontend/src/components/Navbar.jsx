import { Link, NavLink } from "react-router-dom";
import {
  RouteAbout,
  RouteCollection,
  RouteContact,
  RouteIndex,
  RouteLogin,
} from "../helpers/RouteName";
import { CiSearch, CiUser } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { assets } from "../assets/images/images.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUser } from "../redux/slices/userSlice.js";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        { withCredentials: true },
      );
      dispatch(removeUser());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center py-5">
      <img
        src={assets.MainLogo}
        className="w-10 h-10 sm:h-10 sm:w-20 rounded"
        alt="Brand-Logo"
      />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to={RouteIndex}>
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          className="flex flex-col items-center gap-1"
          to={RouteCollection}>
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to={RouteAbout}>
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to={RouteContact}>
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center cursor-pointer gap-5">
        <CiSearch className="text-xl sm:text-2xl cursor-pointer" />
        <div className="group relative inline-block">
          <CiUser
            className="text-xl sm:text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div
            className={`${isOpen ? "group-hover:block" : "hidden"} absolute right-0 mt-2`}>
            <div className="flex flex-col gap-2 p-4 w-36 bg-slate-100 text-gray-700 rounded">
              <p
                className="cursor-pointer hover:text-black text-sm"
                onClick={() => setIsOpen(!isOpen)}>
                Profile
              </p>
              <p
                className="cursor-pointer hover:text-black text-sm"
                onClick={() => setIsOpen(!isOpen)}>
                Orders
              </p>

              {user?.isLoggedIn ? (
                <Link to={RouteLogin}>
                  <button
                    className="cursor-pointer hover:text-black text-sm"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      handleLogout();
                    }}>
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to={RouteLogin}>
                  <button
                    className="cursor-pointer hover:text-black text-sm"
                    onClick={() => setIsOpen(!isOpen)}>
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <Link className="relative">
          <GiShoppingCart className="sm:text-2xl text-xl" />
          <p className="absolute -right-1.5 -bottom-1.5 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            5
          </p>
        </Link>
        <button
          className="text-xl sm:hidden cursor-pointer"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
