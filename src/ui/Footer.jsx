import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background: none;
  padding: 1.5rem 0; /* Add more padding to balance the sections */
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  z-index: 1;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem; /* Add padding to avoid content hitting the screen edges */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end; /* Align all sections closer to the bottom */
  }
`;

const FooterSection = styled.div`
  margin-bottom: 1rem;
  flex: 1; /* All sections take equal width */

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.875rem;
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  p {
    margin: 0.3rem 0;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem; /* Space between links */
  font-size: 1rem; /* Increase the font size for better visibility */

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #ff6347;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 1rem; /* Add padding to move links closer to the bottom */
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
    align-items: flex-end;
    padding-bottom: 1rem; /* Add padding to move icons closer to the bottom */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 1.8rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6347;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
  color: #fff;
  text-align: center;
  padding-bottom: 0.5rem; /* Add padding to move it closer to the bottom */
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Company Information Section */}
        <FooterSection>
          <h2>Momentum Financial</h2>
          <ContactInfo>
            <p>Email: nick@nickneessen.com</p>
            <p>Phone: +1 (859) 433-5907</p>
            <p>Address: 741 N Wells St, Chicago,IL</p>
          </ContactInfo>
        </FooterSection>

        {/* Quick Links Section */}
        <FooterSection>
          <QuickLinks>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
          </QuickLinks>
        </FooterSection>

        {/* Social Media Section */}
        <FooterSection>
          <SocialIconsContainer>
            <h3>Follow Us</h3>
            <SocialIcons>
              <a
                href="https://www.facebook.com/profile.php?id=61564513765585"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/momentumfinancial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/nickneessen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </SocialIcons>
          </SocialIconsContainer>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Momentum Financial. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
}
