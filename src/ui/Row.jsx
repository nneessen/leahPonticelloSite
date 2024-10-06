import React from "react";
import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.$type === "horizontal" &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.$type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1rem;
    `}
`;

export default Row;
