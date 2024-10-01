import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../assets/acm-logo-png.png";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  @media (max-width: 640px) { /* Tailwind sm breakpoint */
    display: none; /* Hide on small screens */
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 3rem; 
  height: 3rem; 
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center; 
  align-items: center; 
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 3px; 
    width: 1.5rem; 
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.$clicked ? "1.5rem" : "1rem")};
    transform: ${(props) => (props.$clicked ? "rotate(45deg)" : "rotate(0)")}; 
  }

  &::after {
    top: ${(props) => (props.$clicked ? "1.5rem" : "1.5rem")};
    transform: ${(props) => (props.$clicked ? "rotate(-45deg)" : "rotate(0)")}; 
  }
`;

const SidebarContainer = styled.div`
  background-color: #f0f0f0; 
  width: 4rem; 
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); 
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
  position: absolute;
  top: 6rem; 
  left: 0;
  width: ${(props) => (props.$clicked ? "12rem" : "4rem")}; 
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(({ clicked, exact, ...props }) => <NavLink {...props} />)`
  text-decoration: none;
  color: black; 
  width: 100%;
  padding: 1rem 0; 
  cursor: pointer;
  display: flex;
  justify-content: center; 
  align-items: center; 

  padding-left: ${(props) => (props.clicked ? "1rem" : "0")}; 

  &:hover {
    background-color: rgba(0, 0, 255, 0.1); 
    border-right: 4px solid blue; 
  }

  svg {
    width: 1.5rem; 
    height: auto;
    filter: invert(0%); 
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(1000%) hue-rotate(180deg);
    }
  }
`;

const Text = styled.span`
  width: ${(props) => (props.$clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.$clicked ? "1rem" : "0")}; 
  transition: all 0.3s ease;
  white-space: nowrap; 
`;

const NavBarComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to top when a link is clicked
    setClick(false); // Close the sidebar
  };

  return (
    <Container>
      <Button $clicked={click} onClick={handleClick}></Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar $clicked={click}>
          <Item onClick={handleLinkClick} exact to="/" clicked={click}>
            <FontAwesomeIcon icon={faHome} />
            <Text $clicked={click}>Home</Text>
          </Item>
          <Item onClick={handleLinkClick} to="/events" clicked={click}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Text $clicked={click}>Events</Text>
          </Item>
          <Item onClick={handleLinkClick} to="/our-team" clicked={click}>
            <FontAwesomeIcon icon={faUsers} />
            <Text $clicked={click}>Team</Text>
          </Item>
          <Item onClick={handleLinkClick} to="/contact-us" clicked={click}>
            <FontAwesomeIcon icon={faPhone} />
            <Text $clicked={click}>Contact</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default NavBarComponent;
