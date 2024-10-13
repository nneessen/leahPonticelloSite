import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-brand-900);
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0; /* Prevent margin issues */
  width: 100vw; /* Ensure it spans the viewport width */
  box-sizing: border-box; /* Include padding and border in the width calculation */
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;
