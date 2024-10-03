import React from "react";

const ExComCard = ({ imgUrl, title, name }) => {
  return (
    <div
      className={`
        relative mt-10 mb-10 bg-white
        min-h-[160px] w-[250px]  // Increased base width
        md:h-[300px] md:w-[400px] // Increased medium width
        lg:h-[325px] lg:w-[450px]  // Increased large width
        p-4 md:p-6 lg:p-8
        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105
      `}
    >
      {/* Profile Image */}
      <div className="relative flex justify-center">
        <img
          className={`
            object-cover w-32 h-32 md:w-56 md:h-56 rounded-full
            mx-auto transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
            mt-[-80px] md:mt-[-100px]
          `}
          src={imgUrl}
          alt={`${title} ${name}`}
        />
      </div>

      {/* Text Content */}
      <div
        className={`
          text-center mt-5 flex flex-col justify-center items-center
          text-[#006984] transition-opacity duration-300 opacity-90 hover:opacity-100
        `}
      >
        <p
          className={`
            text-lg md:text-3xl font-bold
            transition-colors duration-300 group-hover:text-yellow-300
            whitespace-nowrap // Prevent text wrapping
          `}
        >
          {name}
        </p>
        <p
          className={`
            text-sm md:text-lg font-normal
            transition-colors duration-300 group-hover:text-yellow-200
            whitespace-nowrap // Prevent text wrapping
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ExComCard;