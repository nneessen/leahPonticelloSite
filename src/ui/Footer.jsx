import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* Company Information Section */}
        <FooterSection>
          <h2>LP Forward Financial</h2>
          <ContactInfo>San Diego, California</ContactInfo>
        </FooterSection>

        {/* Quick Links Section */}
        <FooterSection>
          <QuickLinks>
            <NavLink to="/about-me">About Us</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </QuickLinks>
        </FooterSection>

        {/* Social Media Section */}
        <FooterSection>
          <SocialIconsContainer>
            <SocialIcons>
              <a
                href="https://www.linkedin.com/in/leah-r-ponticello-aba0abb/"
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
        © {new Date().getFullYear()} LP Forward Financial | All Rights
        Reserved.
      </Copyright>

      <FloatingCard>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone">
            Enter your phone # to opt-in to receive text messages:
          </label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Your phone number"
            required
          />

          <button type="submit" disabled={isSubmitted}>
            {isSubmitted ? "Submitted" : "Submit"}
          </button>
        </form>
        {isSubmitted && <p>Thanks for opting in to receive text messages.</p>}
      </FloatingCard>
    </FooterContainer>
  );
}

const FloatingCard = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  z-index: 100;

  input[type="text"] {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #000;
    font-size: 1rem;
  }

  label {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  button {
    padding: 0.5rem 1.5rem;
    background-color: #ff6347;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.25rem;
    margin-top: 0.5rem;

    &:hover {
      background-color: #ff4500;
    }
  }
`;

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
