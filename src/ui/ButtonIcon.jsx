import styled from "styled-components";
import React from "react";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
