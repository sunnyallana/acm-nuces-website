import React from 'react';
import logo from "../../assets/acm-logo-complete.png"; // Update the path to the PNG logo

const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center min-h-screen">
      <div className="relative flex items-center justify-center">
        {/* Outer rotating circle */}
        <div className="w-64 h-64 border-4 border-transparent text-blue-400 animate-spin flex items-center justify-center border-t-[#0b466d] rounded-full">
          {/* Inner rotating circle */}
          <div className="w-56 h-56 border-4 border-transparent text-red-400 animate-spin flex items-center justify-center border-t-[#257fb5] rounded-full"></div>
        </div>

        {/* Static image in the center */}
        <div className="absolute flex items-center justify-center w-64 h-64">
          <img src={logo} alt="acm-nuces-logo" className="w-48 h-48" /> {/* Increased size for the logo */}
        </div>
      </div>
    </div>
  );
};

export default Loader;