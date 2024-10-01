import React from "react";
import FacultyCard from "./FacultyCard";
import { motion } from "framer-motion";
import facultyHead from "../../assets/images/faculty/Dr-Anam-Qureshi-Faculty-Head.png";
import facultyCoHead from "../../assets/images/faculty/Sir-Abuzar-Zafar-Faculty-CoHead.png";

const FacultyList = () => {
  const facultyData = [
    {
      name: "Dr. Anam Qureshi",
      designation: "Faculty Head",
      pic: facultyHead,
    },
    {
      name: "Sir Abuzar Ali",
      designation: "Faculty Co-Head",
      pic: facultyCoHead,
    },
  ];

  // Variants for animating the list of cards
  const listVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state for cards
    visible: {
      opacity: 1,
      y: 0, // Final state for cards
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2, // Delay between each card animation
      },
    },
  };

  // Variants for animating the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 }, // Initial state for heading
    visible: {
      opacity: 1,
      y: 0, // Final state for heading
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center px-4 sm:pl-20 py-20 md:py-12">
      {/* Motion heading */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl text-[#006984] font-extrabold mb-2 md:mb-8 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Our Faculty Heads
      </motion.h2>

      {/* Motion container for the list of cards */}
      <motion.div
        className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 justify-center items-center w-full" // Ensure it takes full width
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {facultyData.map((faculty, index) => (
          <motion.div key={index} variants={listVariants} className="w-full md:w-auto"> {/* Ensure full width on mobile */}
            <FacultyCard faculty={faculty} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FacultyList;
