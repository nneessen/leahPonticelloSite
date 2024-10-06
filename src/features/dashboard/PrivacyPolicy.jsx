import React from "react";
import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <Title>Privacy Policy</Title>
      <LastUpdated>Last Updated: September 2024</LastUpdated>

      <Section>
        <SectionTitle>1. Information We Collect</SectionTitle>
        <Paragraph>
          We may collect the following types of information:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Personal Information:</strong> Includes your name, address,
            email address, phone number, date of birth, and any other
            information you voluntarily provide to us.
          </ListItem>
          <ListItem>
            <strong>Financial Information:</strong> Includes bank account
            details, Social Security Number (SSN), and other sensitive
            information required for underwriting and processing insurance
            applications.
          </ListItem>
          <ListItem>
            <strong>Health Information:</strong> May include any health-related
            information you voluntarily provide as part of the insurance
            application process.
          </ListItem>
          <ListItem>
            <strong>Usage Data:</strong> Information automatically collected
            when you visit our website, such as IP address, browser type, and
            pages visited.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>2. How We Use Your Information</SectionTitle>
        <Paragraph>
          We use the information we collect for the following purposes:
        </Paragraph>
        <List>
          <ListItem>
            To provide and manage insurance services, including quotes,
            applications, and claims processing.
          </ListItem>
          <ListItem>
            To communicate with you regarding your insurance policies and any
            related inquiries.
          </ListItem>
          <ListItem>
            To comply with legal obligations and regulatory requirements.
          </ListItem>
          <ListItem>
            To improve our website and services by analyzing usage trends.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Sharing Your Information</SectionTitle>
        <Paragraph>We may share your information with:</Paragraph>
        <List>
          <ListItem>
            <strong>Insurance Carriers:</strong> To facilitate the underwriting
            process and manage your insurance policies.
          </ListItem>
          <ListItem>
            <strong>Service Providers:</strong> Third-party companies that
            perform services on our behalf, such as payment processing, data
            analysis, and customer service.
          </ListItem>
          <ListItem>
            <strong>Legal Authorities:</strong> If required by law, to comply
            with a legal process, or to protect our rights and the rights of
            others.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Your Choices and Rights</SectionTitle>
        <Paragraph>You have the right to:</Paragraph>
        <List>
          <ListItem>
            <strong>Access and Update Your Information:</strong> You can request
            access to the personal information we hold about you and request
            corrections if it is inaccurate.
          </ListItem>
          <ListItem>
            <strong>Opt-Out:</strong> You can opt-out of receiving marketing
            communications from us by following the unsubscribe instructions in
            the communication or contacting us directly.
          </ListItem>
          <ListItem>
            <strong>Request Deletion:</strong> You can request the deletion of
            your personal information, subject to certain legal exceptions.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. Security of Your Information</SectionTitle>
        <Paragraph>
          We implement appropriate technical and organizational measures to
          protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, no data transmission
          over the internet or storage system can be guaranteed to be 100%
          secure.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Retention of Your Information</SectionTitle>
        <Paragraph>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Changes to This Privacy Policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time. When we do, we
          will post the updated policy on our website and update the "Last
          Updated" date at the top of this page.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions or concerns about this Privacy Policy or our
          practices, please contact us at:
        </Paragraph>
        <ContactInfo>
          <strong>Nick Neessen</strong>
          <br />
          Email: <a href="mailto:nick@nickneessen.com">nick@nickneessen.com</a>
          <br />
          Phone: 859-433-5907
          <br />
          Address: Chicago, IL
        </ContactInfo>
      </Section>
    </PolicyContainer>
  );
};

export default PrivacyPolicy;

// Styled Components

const PolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #555;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
