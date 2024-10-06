import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import HamburgerMenu from "../ui/HamburgerMenu"; // Assuming you have a HamburgerMenu component

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; /* Ensure it spans the full viewport width */
  box-sizing: border-box; /* Include padding in the width calculation */
  overflow-x: hidden; /* Prevent horizontal scrolling due to width settings */
`;

const Main = styled.main`
  flex: 1;
`;

export default function AppLayout() {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <StyledAppLayout>
      {!isHomePage && <Header />} {/* Conditionally render Header */}
      {isHomePage && <HamburgerMenu />}{" "}
      {/* Show HamburgerMenu on home/dashboard */}
      <Main>
        <Outlet />
        <Footer />
      </Main>
    </StyledAppLayout>
  );
}
