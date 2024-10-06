import React from "react";
import styled, { css } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
  background-color: var() (--color-grey-0);
  box-shadow: var(--shadow-sm);
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1.6rem;

  ${(props) =>
    props.$size === "small" &&
    css`
      padding: 0.4rem 0.8rem;
      font-size: 1.4rem;
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      padding: 0.6rem 1.2rem;
      font-size: 1.8rem;
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width};
    `}

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
  }

  &:disabled {
    background-color: var(--color-grey-100);
    color: var(--color-grey-300);
  }

  &::placeholder {
    color: var(--color-grey-300);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

export default Input;
