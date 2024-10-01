import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlinePhone, HiOutlineCalendar, HiOutlineUsers } from "react-icons/hi";

const Navbar2 = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto bg-white border-t border-gray-300 shadow-xl z-50 mb-4 w-[90%] sm:w-[30%] rounded-full p-3 sm:hidden">
      <div className="flex justify-around w-full">
        {/* Home Link */}
        <div className="group relative cursor-pointer">
          <Link to="/" className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-blue-500">
            <HiOutlineHome size={28} />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Home
          </span>
        </div>

        {/* Contact Us Link */}
        <div className="group relative cursor-pointer">
          <Link to="/contact-us" className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-blue-500">
            <HiOutlinePhone size={28} />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Contact Us
          </span>
        </div>

        {/* Events Link */}
        <div className="group relative cursor-pointer">
          <Link to="/events" className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-blue-500">
            <HiOutlineCalendar size={28} />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Events
          </span>
        </div>

        {/* Team Link */}
        <div className="group relative cursor-pointer">
          <Link to="/our-team" className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-blue-500">
            <HiOutlineUsers size={28} />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Team
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
