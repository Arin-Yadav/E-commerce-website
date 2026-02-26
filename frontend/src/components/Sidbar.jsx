import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {
  RouteAbout,
  RouteCollection,
  RouteContact,
  RouteIndex,
} from "../helpers/RouteName";

const Sidbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`fixed h-full top-0 right-0 overflow-hidden w-64 bg-white transform transition-transform duration-300 shadow-lg
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* Close button */}
      <div className="flex justify-end p-5 border-b">
        <button
          className="text-2xl text-gray-600 hover:text-black transition-colors"
          onClick={() => setIsSidebarOpen(false)}>
          <IoCloseOutline />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-2 p-4">
        <NavLink
          to={RouteIndex}
          onClick={() => setIsSidebarOpen(false)}
          className="py-2 px-3 rounded hover:bg-gray-100 transition-colors">
          Home
        </NavLink>
        <NavLink
          to={RouteCollection}
          onClick={() => setIsSidebarOpen(false)}
          className="py-2 px-3 rounded hover:bg-gray-100 transition-colors">
          Collections
        </NavLink>
        <NavLink
          to={RouteAbout}
          onClick={() => setIsSidebarOpen(false)}
          className="py-2 px-3 rounded hover:bg-gray-100 transition-colors">
          About
        </NavLink>
        <NavLink
          to={RouteContact}
          onClick={() => setIsSidebarOpen(false)}
          className="py-2 px-3 rounded hover:bg-gray-100 transition-colors">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidbar;
