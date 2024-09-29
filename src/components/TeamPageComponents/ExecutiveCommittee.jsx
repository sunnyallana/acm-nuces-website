import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ExecutiveCommittee = () => {
  const committeeData = [
    {
      name: "Hassaan Gatta",
      designation: "President",
      pic: "https://example.com/hassaan-gatta.jpg",
    },
    {
      name: "Rahim Khan",
      designation: "Vice President",
      pic: "https://example.com/rahim-khan.jpg",
    },
    {
      name: "Neeraj Otwani",
      designation: "Secretary",
      pic: "https://example.com/neeraj-otwani.jpg",
    },
    {
      name: "Fawaz Ahmed",
      designation: "General Secretary",
      pic: "https://example.com/fawaz-ahmed.jpg",
    },
    {
      name: "Tehreem Ali Khan",
      designation: "Media and Promotions",
      pic: "https://example.com/tehreem-ali-khan.jpg",
    },
    {
      name: "Muhammad Shaheer",
      designation: "Tech Lead",
      pic: "https://example.com/muhammad-shaheer.jpg",
    },
  ];

  // Variants for animating the list of cards
  const listVariants = {
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

  // Variants for animating the heading
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

  return (
    <section className="ezy__team20 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center">
          <div className="sm:max-w-lg">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#006984] font-extrabold mb-2 md:mb-8 whitespace-nowrap"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Executive Committee
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {committeeData.map((member, index) => (
            <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
              <motion.div variants={listVariants}>
                <Card sx={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={member.pic}
                    alt={member.name}
                    sx={{ borderRadius: '16px 16px 0 0' }}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ color: "#257fb4", fontWeight: 'bold' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#006984" }}>
                      {member.designation}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;