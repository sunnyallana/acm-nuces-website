import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import dummyPic from "../../assets/images/excom/dummy.jpg"; // Adjust the path as needed

const committeeData = [
  {
    name: "Hassaan Gatta",
    designation: "President",
    pic: dummyPic,
  },
  {
    name: "Rahim Khan",
    designation: "Vice President",
    pic: dummyPic,
  },
  {
    name: "Neeraj Otwani",
    designation: "Secretary",
    pic: dummyPic,
  },
  {
    name: "Fawaz Ahmed",
    designation: "General Secretary",
    pic: dummyPic,
  },
  {
    name: "Tehreem Ali",
    designation: "Media and Promotions",
    pic: dummyPic,
  },
  {
    name: "Muhammad Shaheer",
    designation: "Tech Lead",
    pic: dummyPic,
  },
];

// Animation variants
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ExecutiveCommittee = () => {
  return (
    <section className="ezy__team20 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto pl-20">
        <div className="flex justify-center text-center">
          <div className="sm:max-w-lg">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#006984] font-extrabold mb-2 md:mb-8"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Executive Committee
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {committeeData.map((member, index) => (
            <motion.div key={index} variants={variants} whileHover={{ scale: 1.015 }} className="w-72"> {/* Increased width to w-72 */}
              <Card sx={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="180" // Adjusted height
                  image={member.pic}
                  alt={member.name}
                  sx={{ borderRadius: '16px 16px 0 0' }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ color: "#257fb4", fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#006984" }}>
                    {member.designation}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;