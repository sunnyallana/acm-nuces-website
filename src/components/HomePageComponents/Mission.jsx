// import { cn } from "../../lib/utils"; 

// export function Mission() {
//   return (
//     <div className="max-w-4xl mx-auto py-12">
//       <div
//         className={cn(
//           "group w-full bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg",
//           "hover:shadow-xl transition-shadow duration-500"
//         )}
//       >
//         <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
//           Our Mission
//         </h3>
//         <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
//           ACM NUCES is dedicated to fostering a culture of technological innovation, 
//           professional development, and academic excellence among students at FAST NUCES University.
//         </p>
//         <p className="text-lg text-neutral-700 dark:text-neutral-300">
//           We aim to bridge the gap between academic learning and industry requirements, 
//           preparing our members for successful careers in computer science and related fields.
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from "../../lib/utils";

export function Mission() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div
        className="relative group block p-2 h-full w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-[#095280] rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <Card isHovered={isHovered}>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>
            ACM NUCES is dedicated to fostering a culture of technological innovation, 
            professional development, and academic excellence among students at FAST NUCES University.
          </CardDescription>
          <CardDescription>
            We aim to bridge the gap between academic learning and industry requirements, 
            preparing our members for successful careers in computer science and related fields.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}

const Card = ({ children, isHovered }) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-8 overflow-hidden bg-[#0b466d] border border-transparent",
        "transition-all duration-300 ease-in-out",
        isHovered ? "shadow-2xl" : "shadow-lg"
      )}
    >
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isHovered: PropTypes.bool.isRequired,
};

const CardTitle = ({ children }) => {
  return (
    <h4 className="text-4xl text-white font-bold tracking-wide mb-8">
      {children}
    </h4>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const CardDescription = ({ children }) => {
  return (
    <p className="text-zinc-200 tracking-wide leading-relaxed text-lg mb-4">
      {children}
    </p>
  );
};

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
};