import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/acm.svg";

const Container = styled.div`
  position: fixed;
  z-index: 11;
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem; /* Default width */
  height: 2.5rem; /* Default height */
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
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  @media (max-width: 768px) {
    width: 2rem; /* Smaller width for mobile */
    height: 2rem; /* Smaller height for mobile */
  }
`;

const SidebarContainer = styled.div`
  background-color: #f0f0f0;
  width: 4rem; /* Default width for larger screens */
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

  @media (max-width: 768px) {
    width: 3rem; /* Reduced width for mobile */
  }
`;

const Logo = styled.div`
  width: 4rem; /* Default width for larger screens */
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: auto;
    max-height: 4rem; /* Default max height */
  }

  @media (max-width: 768px) {
    width: 3rem; /* Smaller width for mobile */
    margin-bottom: 0.5rem; /* Adjusted margin for mobile */
    img {
      max-height: 3rem; /* Reduced max height for mobile */
    }
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
  width: 4rem; /* Default width for larger screens */
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;

  @media (max-width: 768px) {
    width: 3rem; /* Reduced width for mobile */
  }
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 100%;
  padding: 1rem 0; /* Default padding */
  cursor: pointer;
  display: flex;
  padding-left: 1rem; /* Default padding-left */

  &:hover {
    background-color: rgba(0, 0, 255, 0.1);
    border-right: 4px solid blue;
  }

  svg {
    width: 1.2rem; /* Default icon size */
    height: auto;
    filter: invert(0%);
    transition: filter 0.3s ease;

    &:hover {
      filter: invert(40%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%);
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0; /* Reduced padding for mobile */
    padding-left: 0.5rem; /* Adjusted padding-left for mobile */

    svg {
      width: 1rem; /* Smaller icon for mobile */
    }
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-left: ${(props) => (props.clicked ? "1rem" : "0")}; /* Adjusted margin for mobile */
  }
`;

const NavBarComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item onClick={() => setClick(false)} exact activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/events">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Text clicked={click}>Events</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/our-team">
            <FontAwesomeIcon icon={faUsers} />
            <Text clicked={click}>Team</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/contact-us">
            <FontAwesomeIcon icon={faFileAlt} />
            <Text clicked={click}>Contact</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default NavBarComponent;
