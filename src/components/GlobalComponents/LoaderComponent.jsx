import React from 'react';
import logo from "../../assets/acm-logo-png.png"; // Ensure the path to the logo is correct

const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center min-h-screen">
      <div className="relative flex items-center justify-center">
        {/* Outer rotating circle */}
        <div className="w-40 h-40 border-4 border-transparent text-blue-400 animate-spin flex items-center justify-center border-t-[#0b466d] rounded-full">
          {/* Inner rotating circle */}
          <div className="w-36 h-36 border-4 border-transparent text-red-400 animate-spin flex items-center justify-center border-t-[#257fb5] rounded-full"></div>
        </div>

        {/* Static image in the center */}
        <div className="absolute flex items-center justify-center w-40 h-40">
          <img src={logo} alt="Logo" className="w-32 h-32" /> {/* Increased size for the logo */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
