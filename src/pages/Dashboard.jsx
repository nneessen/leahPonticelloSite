import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bg1 from "../images/backgrounds/bg1.jpg";
import HamburgerMenu from "../ui/HamburgerMenu";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <DashboardContainer>
      <Header>
        <Logo>Nick Neessen</Logo>
        <NavContainer>
          <AgentLogin to="/login">Agent Login</AgentLogin>
          <HamburgerButton
            onClick={toggleMenu}
            isMenuOpen={isMenuOpen}
          ></HamburgerButton>
        </NavContainer>
      </Header>
      <HamburgerMenu />

      <ContentContainer>
        <HeroSection>
          <MainText>A Better Future</MainText>
          <SubText>
            Providing tailored life insurance solutions for every family.
          </SubText>
        </HeroSection>
      </ContentContainer>

      <BackgroundImage src={bg1} alt="Background" />
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

const AgentLogin = styled(NavLink)`
  color: var(--color-brand-50);
  text-decoration: none;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
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
  color: #fff;
  font-weight: 500;
  color: var(--color-brand-50);
`;

const SubText = styled.p`
  font-family: "Urbanist";
  font-size: 2rem;
  color: var(--color-brand-50);
  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;

const StyledButton = styled(NavLink)`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: var(--color-brand-500);
  color: var(--color-brand-50);
  text-decoration: none;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #ff4500;
    transform: scale(1.05); /* Zoom in on hover */
  }
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
