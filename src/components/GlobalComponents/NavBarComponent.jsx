import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <HoveredLink to={children.props.to}>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-white hover:opacity-[0.9] truncate text-sm md:text-base" // Text color set to white
        >
          {item}
        </motion.p>
      </HoveredLink>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent shadow-input flex justify-center space-x-4 px-8 py-6 z-50"
    >
      {children}
    </nav>
  );
};

const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-gray-700 hover:text-black truncate text-sm md:text-base" // Keep text white with hover effect
    >
      {children}
    </Link>
  );
};

const NavBarComponent = () => {
  const [active, setActive] = useState(null);

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
        <HoveredLink to="/">Go to Home</HoveredLink>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Events">
        <HoveredLink to="/events">View Events</HoveredLink>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Our Team">
        <HoveredLink to="/our-team">Meet Our Team</HoveredLink>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Contact Us">
        <HoveredLink to="/contact-us">Get in Touch</HoveredLink>
      </MenuItem>
    </Menu>
  );
};

// PropTypes for better validation and documentation
MenuItem.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.string,
  item: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Menu.propTypes = {
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

HoveredLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBarComponent;