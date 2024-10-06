import styled from "styled-components";
import React from "react";

const ButtonText = styled.button`
  font-weight: 500;
  text-align: end;
  font-size: 1.6rem;
  padding-right: 0.8rem;
  transition: all 0.3s;
  background-color: var(--color-brand-500);
  color: white;
  border: none;

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
