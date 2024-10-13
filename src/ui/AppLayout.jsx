import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevent horizontal scroll */
`;

const Main = styled.main`
  flex: 1;
  padding-top: 5rem; /* Adjust to match header height */
  margin: 0; /* Remove any default margin */
  padding: 0; /* Optional: side padding */
  overflow-y: auto; /* Ensure it scrolls properly */
`;

const FixedHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  margin: 0;
  padding: 0;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <FixedHeader /> {/* Render header across all pages */}
      <Main>
        <Outlet /> {/* Active route content */}
        <Footer />
      </Main>
    </StyledAppLayout>
  );
}
