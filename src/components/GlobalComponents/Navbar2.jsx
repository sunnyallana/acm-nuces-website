import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome, HiOutlinePhone, HiOutlineCalendar, HiOutlineUsers } from "react-icons/hi";
import logo from "../../assets/acm-logo-png.png";

const Navbar2 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        
        setIsVisible(false);
      } else {
        
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 mx-auto bg-white border-t border-gray-300 shadow-xl z-100 mb-4 w-[90%] sm:w-[30%] rounded-full px-3 sm:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Home Link */}
        <div className="group relative cursor-pointer">
          <Link to="/" className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-blue-500">
            <HiOutlineHome size={28} />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Home
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

        {/* Bigger Logo */}
        <div className="flex h-14 w-14 items-center justify-center">
          <img src={logo} alt="Logo" className="h-14 w-14 object-contain rounded-full" />
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

        {/* Contact Us Link */}
        <div className="group relative cursor-pointer">
          <Link to="/contact-us" className="flex h-10 w-10 items-center justify-center text-gray-500 hover:text-blue-500">
            <HiOutlinePhone size={28} />
          </Link>
          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
