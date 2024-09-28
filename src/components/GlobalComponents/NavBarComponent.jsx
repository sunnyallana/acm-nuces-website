import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../assets/acm-logo-png.png";

const Container = styled.div`
  position: fixed;
  z-index: 11; /* Increased z-index */
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 3rem; /* Increased button width */
  height: 3rem; /* Increased button height */
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center; /* Center the lines */
  align-items: center; /* Center the lines */
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 3px; /* Increased height for better visibility */
    width: 1.5rem; /* Increased width for better visibility */
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.$clicked ? "1.5rem" : "1rem")};
    transform: ${(props) => (props.$clicked ? "rotate(45deg)" : "rotate(0)")}; /* Cross effect */
  }

  &::after {
    top: ${(props) => (props.$clicked ? "1.5rem" : "1.5rem")};
    transform: ${(props) => (props.$clicked ? "rotate(-45deg)" : "rotate(0)")}; /* Cross effect */
  }
`;

const SidebarContainer = styled.div`
  background-color: #f0f0f0; /* Darker shade of white */
  width: 4rem; /* Increased width */
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 0; /* Remove padding to eliminate unwanted spacing */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Darkened box shadow */
`;

const Logo = styled.div`
  width: 5.75rem; /* Increased width for the logo */
  margin-bottom: 1rem; /* Added margin for spacing */

  img {
    margin-left: 0.3rem;
    width: 100%;
    height: auto; /* Keep aspect ratio */
    max-height: 5.75rem; /* Increased maximum height */
  }
`;

const SlickBar = styled.ul`
  color: black; /* Changed text color to black */
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items in the sidebar */
  background-color: #f0f0f0; /* Changed background to match sidebar */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  position: absolute;
  top: 6rem; /* Ensure this doesn't cause unwanted spacing */
  left: 0;
  width: ${(props) => (props.$clicked ? "12rem" : "4rem")}; /* Adjusted width */
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(({ clicked, exact, ...props }) => <NavLink {...props} />)`
  text-decoration: none;
  color: black; /* Changed link color to black */
  width: 100%;
  padding: 1rem 0; /* Padding for top and bottom */
  cursor: pointer;
  display: flex;
  justify-content: center; /* Center icons horizontally */
  align-items: center; /* Center icons vertically */

  /* Add left padding when burger is clicked */
  padding-left: ${(props) => (props.clicked ? "1rem" : "0")}; 

  &:hover {
    background-color: rgba(0, 0, 255, 0.1); /* Hover effect */
    border-right: 4px solid blue; /* Blue border on hover */
  }

  svg {
    width: 1.5rem; /* Increased icon size for better visibility */
    height: auto;
    filter: invert(0%); /* Changed icon color to dark blue */
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%); /* Change color on hover */
    }
  }
`;

const Text = styled.span`
  width: ${(props) => (props.$clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.$clicked ? "1rem" : "0")}; /* Adjusted margin */
  transition: all 0.3s ease;
  white-space: nowrap; /* Prevent text wrapping */
`;

const NavBarComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Button $clicked={click} onClick={handleClick}></Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar $clicked={click}>
          <Item onClick={() => setClick(false)} exact to="/" clicked={click}>
            <FontAwesomeIcon icon={faHome} />
            <Text $clicked={click}>Home</Text>
          </Item>
          <Item onClick={() => setClick(false)} to="/events" clicked={click}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Text $clicked={click}>Events</Text>
          </Item>
          <Item onClick={() => setClick(false)} to="/our-team" clicked={click}>
            <FontAwesomeIcon icon={faUsers} />
            <Text $clicked={click}>Team</Text>
          </Item>
          <Item onClick={() => setClick(false)} to="/contact-us" clicked={click}>
            <FontAwesomeIcon icon={faPhone} />
            <Text $clicked={click}>Contact</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default NavBarComponent;