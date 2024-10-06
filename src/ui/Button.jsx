import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    border-radius: 0.4rem;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    border-radius: 0.4rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    border-radius: 0.4rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-700);

    &:hover {
      background-color: var(--color-brand-900);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  warning: css`
    color: var(--color-yellow-100);
    background-color: var(--color-yellow-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  success: css`
    color: var(--color-green-100);
    background-color: var(--color-green-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  link: css`
    color: var(--color-brand-700);
    background: none;
    padding: 0;
    font-size: 2.5rem;
    font-weight: 600;

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
};

const Button = styled.button`
  border: none;
  box-shadow: var(--shadow-sm);
  margin: 0.25rem;

  ${(props) => sizes[props.$size]}
  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: "primary",
  $size: "medium",
};

export default Button;
