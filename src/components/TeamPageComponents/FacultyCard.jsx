import React from "react";
import { motion } from "framer-motion";

const FacultyCard = ({ faculty }) => {
  return (
    <motion.div
      className="bg-white w-full md:w-64 h-96 rounded-lg shadow-lg p-4 flex flex-col justify-between transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Dots Section */}
      <div className="flex p-2 gap-1">
        <div>
          <span className="bg-[#257fb5] inline-block w-4 h-4 rounded-full"></span>
        </div>
        <div>
          <span className="bg-gray-500 inline-block w-4 h-4 rounded-full"></span>
        </div>
        <div>
          <span className="bg-cyan-500 inline-block w-4 h-4 rounded-full"></span>
        </div>
      </div>

      {/* Faculty Image */}
      <div
        className="w-full h-72 bg-cover bg-center rounded-lg mb-4"
        style={{
          backgroundImage: `url(${faculty.pic})`,
          backgroundColor: "#257fb5", // Fallback background color
          backgroundPosition: 'center top', // Align the image to the top
        }}
      ></div>

      {/* Faculty Details */}
      <div className="text-center">
        <h2 className="text-lg font-bold text-[#0b466d] truncate">{faculty.name}</h2>
        <p className="text-md text-gray-600">{faculty.designation}</p>
      </div>
    </motion.div>
  );
};

export default FacultyCard;
