import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome, FaBoxOpen, FaConciergeBell } from "react-icons/fa";

export default function MainNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/dashboard">
          <FaHome />
          {<NavItemText>Home</NavItemText>}
        </StyledNavLink>
        <StyledNavLink to="/products">
          <FaBoxOpen />
          {<NavItemText>Products</NavItemText>}
        </StyledNavLink>
        <StyledNavLink to="/services">
          <FaConciergeBell />
          {<NavItemText>Services</NavItemText>}
        </StyledNavLink>
      </NavList>
    </nav>
  );
}

const NavItemText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-900);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 1rem;
    transition: all 0.3s;
    text-decoration: none;
  }

  & span {
    display: inline;
  }

  &:hover {
    color: var(--color-brand-500);
    font-size: 2.2rem;
  }

  &.active {
    color: var(--color-brand-500);
  }
`;
