import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin: 1rem;
  box-shadow: var(--shadow-lg);

  ${(props) =>
    props.$width === "100" &&
    css`
      $width: 100%;
    `}
  ${(props) =>
    props.$height === "100" &&
    css`
      $height: 100%;
    `}
`;

const StyledCardHeader = styled.div`
  /* Box */
  background-color: var(--color-brand-200);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1rem;
`;

const StyledCardBody = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
`;

const Card = ({ title, body, width, height }) => {
  if (!title && !body) return null;

  return (
    <StyledCard $width={width} $height={height}>
      <StyledCardHeader>{title ? title : ""}</StyledCardHeader>
      <StyledCardBody>{body ? body : ""}</StyledCardBody>
    </StyledCard>
  );
};

export default Card;
