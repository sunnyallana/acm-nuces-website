import React from "react";
import ExComCard from "./ExComCard";
import { motion } from "framer-motion";
import profile1 from "../../assets/images/team/profile1.jpg";

const ExComList = () => {
  const teamsData = [
    {
      teamName: "Operations Team",
      members: [
        { imgUrl: profile1, title: "Head of Operations", name: "John Doe" },
        { imgUrl: profile1, title: "Operations Assistant", name: "Emma Clark" },
        { imgUrl: profile1, title: "Operations Assistant", name: "Emma Clark" },
      ],
    },
    {
      teamName: "Engineering Team",
      members: [
        { imgUrl: profile1, title: "Lead Engineer", name: "Jane Smith" },
        { imgUrl: profile1, title: "Software Engineer", name: "Michael Taylor" },
        { imgUrl: profile1, title: "Operations Assistant", name: "Emma Clark" },
      ],
    },
    {
      teamName: "Marketing Team",
      members: [
        { imgUrl: profile1, title: "Marketing Director", name: "Alice Johnson" },
        { imgUrl: profile1, title: "Social Media Manager", name: "Emily Davis" },
      ],
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center sm:pl-10 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl text-[#006984] font-extrabold mb-2 md:mb-16 text-center"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Extended Committee
      </motion.h2>
      {teamsData.map((team, index) => (
        <div key={index} className="w-full text-center mb-12">
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl text-[#005670] font-bold mb-12"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {team.teamName}
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 p-4">
            {team.members.map((member, idx) => (
              <ExComCard
                key={idx}
                imgUrl={member.imgUrl}
                title={member.title}
                name={member.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExComList;
