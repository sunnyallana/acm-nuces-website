import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../assets/acm-logo-png.png";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  height: 100vh; /* Full screen height to allow vertical centering */
  width: 100%; /* Ensure the navbar container takes full width */
  display: flex; /* Flexbox to align content */
  align-items: center; /* Vertically center the content */
  @media (max-width: 640px) { /* Tailwind sm breakpoint */
    display: none; /* Hide on small screens */
  }
`;

const SidebarContainer = styled.div`
  background-color: #f0f0f0; 
  width: 4rem; 
  border-radius: 0 30px 30px 0;
  padding: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the content */
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); 
  transition: width 0.5s ease;
  height: auto; /* Ensure height fits the content dynamically */

  &:hover {
    width: 12rem; /* Expand to the same size on hover */
  }
`;

const Logo = styled.div`
  width: 5.75rem; 
  margin-bottom: 1rem; 

  img {
    margin-left: 0.3rem;
    width: 100%;
    height: auto; 
    max-height: 5.75rem; 
  }
`;

const SlickBar = styled.ul`
  color: black; 
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: #f0f0f0; 
  padding: 0; 
  margin: 0; 
  width: 100%; 
  border-radius: 0 30px 30px 0;
`;

const Item = styled(({ exact, ...props }) => <NavLink {...props} />)`
  text-decoration: none;
  color: black; 
  width: 100%;
  padding: 1rem 0; 
  cursor: pointer;
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  align-items: center;
  padding-left: 1rem; /* Add padding to the left for better spacing */
  transition: background-color 0.3s, padding-left 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 255, 0.1); 
    border-right: 4px solid #0b466d; 
    padding-left: 1.5rem; /* Slightly increase padding on hover */
  }

  svg {
    width: 1.5rem; 
    height: auto;
    margin-right: 0.75rem; /* Add margin to the right of the icon */
    filter: invert(0%); 
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(1000%) hue-rotate(180deg);
    }
  }
`;

const Text = styled.span`
  width: 0; 
  overflow: hidden;
  margin-left: 0; 
  transition: all 0.3s ease;
  white-space: nowrap; 

  ${SidebarContainer}:hover & {
    width: 100%;
    margin-left: 0.5rem; /* Adjust margin for smooth text reveal */
  }
`;

const NavBarComponent = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to top when a link is clicked
  };

  return (
    <Container>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar>
          <Item onClick={handleLinkClick} exact to="/">
            <FontAwesomeIcon icon={faHome} />
            <Text>Home</Text>
          </Item>
          <Item onClick={handleLinkClick} to="/events">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Text>Events</Text>
          </Item>
          <Item onClick={handleLinkClick} to="/our-team">
            <FontAwesomeIcon icon={faUsers} />
            <Text>Team</Text>
          </Item>
          <Item onClick={handleLinkClick} to="/contact-us">
            <FontAwesomeIcon icon={faPhone} />
            <Text>Contact</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default NavBarComponent;
