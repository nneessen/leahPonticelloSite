import React from "react";
import styled from "styled-components";

export default function Slogan() {
  return (
    <SloganContainer>
      Your Peace of Mind, <EmphasizedText>Our Priority.</EmphasizedText>
    </SloganContainer>
  );
}

const SloganContainer = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 2rem;
  color: var(--color-grey-900);
  border-radius: 1rem;
  margin: 2rem 0;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media (min-width: 900px) {
    font-size: 3rem;
  }
`;

const EmphasizedText = styled.span`
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: underline;
`;
