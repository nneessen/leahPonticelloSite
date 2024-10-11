import { useState } from "react";
import styled from "styled-components";
import lp_bg from "../images/backgrounds/lp_bg.jpg";
import HamburgerMenu from "../ui/HamburgerMenu";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";
import { AGENT } from "../utils/constants";

const NavItemText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
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

const Dashboard = () => {
  const openCalendly = () => {
    window.open(AGENT.calendlyLink);
  };

  return (
    <DashboardContainer>
      <Header>
        <Logo>Leah Ponticello</Logo>
        <NavList>
          <StyledNavLink to="/dashboard">
            {<NavItemText>Home</NavItemText>}
          </StyledNavLink>
          <StyledNavLink to="/products">
            {<NavItemText>Products</NavItemText>}
          </StyledNavLink>
          <StyledNavLink to="/about-me">
            {<NavItemText>About Me</NavItemText>}
          </StyledNavLink>
        </NavList>
      </Header>
      <HamburgerMenu />

      <ContentContainer>
        <HeroSection>
          <MainText>A Better Future</MainText>
          <SubText>
            Providing tailored life insurance solutions for every family.
          </SubText>
        </HeroSection>
        <Button onClick={openCalendly}>Book Consultation</Button>
      </ContentContainer>

      <BackgroundImage src={lp_bg} alt="Background" />
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components

const DashboardContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 1000;
  background: none;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: #fff;
  padding-left: 1rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HamburgerButton = styled.div`
  width: 35px;
  height: 4px;
  background-color: ${(props) =>
    props.isMenuOpen ? "transparent" : "#fff"}; /* Middle line */
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #fff; /* Ensure no black appears */
    transition: all 0.3s ease;
  }

  /* Top line */
  &::before {
    top: ${(props) => (props.isMenuOpen ? "0" : "-10px")}; /* Moves up */
    transform: ${(props) =>
      props.isMenuOpen ? "rotate(45deg)" : "rotate(0)"}; /* Rotate on open */
  }

  /* Bottom line */
  &::after {
    top: ${(props) => (props.isMenuOpen ? "0" : "10px")}; /* Moves down */
    transform: ${(props) =>
      props.isMenuOpen ? "rotate(-45deg)" : "rotate(0)"}; /* Rotate on open */
  }

  &:hover {
    transform: scale(1.1); /* Adds a subtle hover effect */
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding-top: 20vh;
`;

const HeroSection = styled.div`
  margin-bottom: 2rem;
`;

const MainText = styled.div`
  font-family: "Urbanist";
  font-size: 7rem;
  color: var(--color-brand-50);
  font-weight: 500;
  color: var(--color-brand-50);
`;

const SubText = styled.p`
  font-family: "Urbanist";
  font-size: 2rem;
  color: var(--color-brand-50);
  margin-top: 1rem;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;
