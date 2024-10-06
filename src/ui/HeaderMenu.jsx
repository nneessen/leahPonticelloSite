import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "./Button";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const moveBack = useMoveBack();
  return (
    <StyledHeaderMenu>
      <li>
        <Button onClick={moveBack}>Go Back</Button>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
