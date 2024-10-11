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
  background-color: var(--color-grey-200);
  padding: 2rem 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Adds subtle shadow */
  border-radius: 1rem;
  margin: 1rem;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;
