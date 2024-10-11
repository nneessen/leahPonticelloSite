import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AGENT } from "../utils/constants";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--color-brand-50);
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divider = styled.div`
  height: 2px;
  background-color: var(--color-brand-200);
  margin: 1.5rem 0;
`;

const Content = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const LicenseCard = styled.div`
  background-color: #ffffff;
  border: 2px solid var(--color-accent-50);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 1.25rem;
  color: #555;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const StateList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0 0;
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StateItem = styled.li`
  display: inline-block;
  background-color: var(--color-accent-500);
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    color: var(--color-brand-900);
    font-size: 1.4rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    text-align: center;
    transition: color 0.3s ease;
  }

  & span {
    display: inline;
  }

  &:hover {
    color: var(--color-accent-600);
  }

  &.active {
    color: var(--color-brand-500);
  }
`;

// Main Component

export default function Credentials() {
  return (
    <PageContainer>
      <StyledLink to="/dashboard">Home</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/book-consultation">Book a Consultation</StyledLink>
      <StyledHeader>Credentials</StyledHeader>
      <Divider />
      <Content>
        National Producer License #: {AGENT.nationalProducerNumber}
      </Content>
      <LicenseCard>
        <p>I currently hold licenses in the following states:</p>
        <StateList>
          {AGENT.stateLicense.map((state) => (
            <StateItem key={state}>{state}</StateItem>
          ))}
        </StateList>
      </LicenseCard>
    </PageContainer>
  );
}
