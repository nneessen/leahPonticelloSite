import React from "react";
import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-100);
  padding: 3.2rem 2.4rem;
  border-right: None solid var(--color-grey-200);
  width: ${(props) => (props.collapsed ? "5rem" : "20rem")};
  transition: width 0.3s ease;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    width: ${(props) => (props.collapsed ? "5rem" : "20rem")};
  }
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}
