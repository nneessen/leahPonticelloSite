import React from "react";
import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.$as === "h1" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.$as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.$as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.$as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
  
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);

  line-height: 1.4;
`;

export default Heading;
