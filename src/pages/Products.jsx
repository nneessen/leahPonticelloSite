import React, { useState } from "react";
import styled from "styled-components";

export default function Products() {
  const [activeItem, setActiveItem] = useState("Term Life");

  // Restoring all the product details and video URLs as you had them.
  const productDetails = {
    "Mortgage Protection": {
      definition:
        "Mortgage Protection insurance is a type of life insurance designed to pay off your mortgage in the event of your death, ensuring that your family can remain in their home.",
      howItWorks:
        "This is typically a term life insurance policy where the death benefit is tied to the remaining balance on your mortgage...",
      whoShouldGetIt:
        "Mortgage Protection is ideal for homeowners, especially those who are the primary income earner...",
      additionalInfo:
        "Mortgage Protection policies can sometimes include riders for disability or unemployment...",
      videoUrl: "https://www.youtube.com/embed/mSUIK-M2WSk?si=df-_9DfP-Dn3xU6L",
    },
    "Term Life": {
      definition:
        "Term Life insurance provides coverage for a specific period or 'term.' It's often the most affordable option...",
      howItWorks:
        "You pay premiums over the course of the term, typically 10, 20, or 30 years...",
      whoShouldGetIt:
        "Term Life is ideal for individuals who need coverage for a specific period, such as parents with young children...",
      additionalInfo: "Term Life policies typically do not build cash value...",
      videoUrl: "https://www.youtube.com/embed/xEumF_1FeNY?si=OaM9nW3md9-ycyWI",
    },
    "Whole Life": {
      definition:
        "Whole Life insurance offers lifelong coverage with a savings component called cash value...",
      howItWorks:
        "You pay premiums for your entire life, and the policy builds cash value over time...",
      whoShouldGetIt:
        "Whole Life is ideal for individuals looking for lifelong coverage and a policy that builds cash value...",
      additionalInfo:
        "Whole Life is generally more expensive than Term Life...",
      videoUrl: "https://www.youtube.com/embed/jeXKNQ4DETQ?si=B_iNqlmQneYrlfMn",
    },
    "Indexed Universal Life (IUL)": {
      definition:
        "Indexed Universal Life (IUL) insurance combines lifelong coverage with the potential for cash value growth...",
      howItWorks:
        "Your premiums are split between the cost of insurance and the cash value account...",
      whoShouldGetIt:
        "IUL is suitable for individuals who want permanent coverage with the potential for higher cash value growth...",
      additionalInfo:
        "IUL policies can be complex, and the cash value growth is not guaranteed...",
      videoUrl: "https://www.youtube.com/embed/RklbgezJUFk?si=1rOAa69S5LA5_95Y",
    },
    Annuities: {
      definition:
        "Annuities are financial products that provide a steady income stream, typically used for retirement...",
      howItWorks:
        "You pay a lump sum or series of payments to an insurance company...",
      whoShouldGetIt:
        "Annuities are ideal for individuals looking for a reliable source of income in retirement...",
      additionalInfo:
        "There are different types of annuities, such as fixed, variable, and indexed...",
      videoUrl: "https://www.youtube.com/embed/lW36jYkv0lM?si=-OOCKrU9gb5tqEHC",
    },
  };

  const details = productDetails[activeItem];

  return (
    <Container>
      <Sidebar>
        {Object.keys(productDetails).map((item) => (
          <SidebarButton
            key={item}
            active={activeItem === item}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </SidebarButton>
        ))}
      </Sidebar>

      <Content>
        <VideoContainer>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              src={details.videoUrl}
              title={`${activeItem} Video`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px", // Optional: round corners
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </VideoContainer>
        <ProductDetails>
          <Section>
            <SectionTitle>Definition</SectionTitle>
            <SectionContent>{details.definition}</SectionContent>
          </Section>
          <Section>
            <SectionTitle>How It Works</SectionTitle>
            <SectionContent>{details.howItWorks}</SectionContent>
          </Section>
          <Section>
            <SectionTitle>Who Should Get It</SectionTitle>
            <SectionContent>{details.whoShouldGetIt}</SectionContent>
          </Section>
          <Section>
            <SectionTitle>Additional Information</SectionTitle>
            <SectionContent>{details.additionalInfo}</SectionContent>
          </Section>
        </ProductDetails>
      </Content>
    </Container>
  );
}

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  left: 1rem;
  top: 130px;
  width: 250px;
  height: calc(100vh - 130px - 1rem);
  background-color: #f0f0f0;
  padding: 1.5rem;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

const SidebarButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background-color: ${({ active }) => (active ? "#007bff" : "#e0e0e0")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 270px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Ensure video doesn’t get too wide */
  margin: 2rem auto; /* Center the video and add space from other content */
  padding: 0; /* Ensure no extra padding interferes */
`;

const ProductDetails = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: #333;
`;

const SectionContent = styled.p`
  margin: 0;
  color: #555;
`;
