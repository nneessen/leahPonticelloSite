import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";

const NavBar = styled.nav`
  display: flex;
  align-items: center; /* Vertical alignment */
  justify-content: space-between; /* Push Back button to the end */
  padding: 1rem 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--color-brand-900);
  z-index: 1000; /* Ensure it's above other content */
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem; /* Space between items */
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-brand-50);
    text-decoration: none;
    transition: color 0.3s;
  }

  &:hover {
    color: var(--color-accent-300);
  }

  &.active {
    color: var(--color-brand-500);
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-accent-50);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent-400);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export default function AboutMe() {
  const goBack = useMoveBack();

  return (
    <PageContainer>
      <NavBar>
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about-me">About Me</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/credentials">Credentials</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/products">Products</StyledNavLink>
          </li>
        </NavList>
        <BackButton onClick={goBack}>Go Back</BackButton>
      </NavBar>

      <ContentWrapper>{/* Your existing content goes here */}</ContentWrapper>
    </PageContainer>
  );
}

// Styled Components for Layout
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  margin-top: 100px; /* To avoid overlap with the fixed NavBar */
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
