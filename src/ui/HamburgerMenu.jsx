import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HamburgerButton = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 35px;
  height: 35px;
  z-index: 1000;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Grow on hover */
  }

  /* Transform into an "X" when the menu is open */
  div {
    position: absolute;
    width: 35px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  /* Top line */
  div:nth-child(1) {
    transform: ${(props) =>
      props.isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
    top: 0;
  }

  /* Middle line - Hidden when menu is open */
  div:nth-child(2) {
    opacity: ${(props) => (props.isMenuOpen ? "0" : "1")};
    top: 12px;
  }

  /* Bottom line */
  div:nth-child(3) {
    transform: ${(props) =>
      props.isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
    bottom: 0;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.95
  ); /* Transparent white background */
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: ${(props) => (props.isMenuOpen ? "1" : "0")};
  transition: opacity 0.5s ease;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Subtle shadow to create depth */
  border-radius: 15px;
`;

const StyledNavLink = styled(NavLink)`
  margin: 1rem 0;
  font-size: 1.7rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347; /* Highlight on hover */
  }

  /* Animated underline effect */
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background-color: #ff6347;
    left: 0;
    bottom: 0;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%; /* Underline expands on hover */
  }
`;

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HamburgerButton
        onClick={toggleMenu}
        isMenuOpen={isMenuOpen}
      ></HamburgerButton>
      {isMenuOpen && (
        <MenuContainer isMenuOpen={isMenuOpen}>
          <StyledNavLink to="/products" onClick={toggleMenu}>
            Products
          </StyledNavLink>
          <StyledNavLink to="/credentials" onClick={toggleMenu}>
            Credentials
          </StyledNavLink>
          {/* <StyledNavLink to="/book-consultation" onClick={toggleMenu}> */}
          {/*   Book a Consultation */}
          {/* </StyledNavLink> */}
          <StyledNavLink to="/about-me" onClick={toggleMenu}>
            About Me
          </StyledNavLink>
        </MenuContainer>
      )}
    </>
  );
}
