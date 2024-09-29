import React from "react";

const ExComCard = ({ imgUrl, title, name }) => {
  return (
    <div
      className={`
        relative mt-10 mb-10 bg-gradient-to-b from-[#0075AF] to-[#003149]
        min-h-[160px] w-[160px]
        md:h-[300px] md:w-[300px]
        lg:h-[325px] lg:w-[325px]
        p-4 md:p-6 lg:p-8
        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105
      `}
    >
      {/* Profile Image */}
      <div className="relative flex justify-center">
        <img
          className={`
            object-cover w-32 h-32 md:w-60 md:h-60 rounded-full
            mx-auto transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl
            mt-[-80px] md:mt-[-100px]
          `}
          src={imgUrl}
          alt={`${title} ${name}`}
        />
        {/* Floating Animation Effect */}
        <div className="absolute w-32 h-32 md:w-60 md:h-60 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-50 blur-xl group-hover:blur-none transition duration-300"></div>
      </div>

      {/* Text Content */}
      <div
        className={`
          text-center mt-5 flex flex-col justify-center items-center
          text-white transition-opacity duration-300 opacity-90 hover:opacity-100
        `}
      >
        <p
          className={`
            text-lg md:text-3xl font-bold
            transition-colors duration-300 group-hover:text-yellow-300
          `}
        >
          {name}
        </p>
        <p
          className={`
            text-sm md:text-lg font-normal
            transition-colors duration-300 group-hover:text-yellow-200
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ExComCard;
