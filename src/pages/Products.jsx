import React, { useState } from "react";
import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sidebar and content vertically on mobile */
    padding: 1rem;
    margin-left: 0;
    width: 100%;
  }
`;

const HeaderHeight = "130px";

const Sidebar = styled.div`
  position: fixed;
  left: 1rem;
  top: ${HeaderHeight};
  width: 250px;
  height: calc(100vh - ${HeaderHeight} - 1rem);
  background-color: #f0f0f0;
  padding: 1.5rem;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  @media (max-width: 768px) {
    position: relative;
    top: 1rem; /* Remove the fixed top position on mobile */
    left: 0; /* Remove the fixed left position on mobile */
    width: 100%; /* Sidebar takes full width on mobile */
    height: auto; /* Allow height to adjust based on content */
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

const SidebarButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background-color: ${({ active }) => (active ? "#007bff" : "#e0e0e0")};
  color: ${({ active }) => (active ? "#ffffff" : "#333333")};
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  font-weight: 500;
  font-size: 0.95rem;

  &:hover {
    background-color: ${({ active }) => (active ? "#0056b3" : "#cccccc")};
  }
`;

const Content = styled.div`
  flex: 1;
  margin-left: 270px;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-left: 0; /* Remove left margin on mobile */
    padding: 1rem;
    width: 100%; /* Full width on mobile devices */
  }
`;

const ProductDetails = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: #333333;
  font-weight: 600;
  font-size: 1.2rem;
`;

const SectionContent = styled.p`
  margin: 0;
  color: #555555;
  font-weight: 400;
  line-height: 1.6;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export default function Products() {
  const [activeItem, setActiveItem] = useState("Term Life");
  const goBack = useMoveBack();

  // Define product details and video URLs together

  const productDetails = {
    "Mortgage Protection": {
      definition:
        "Mortgage Protection insurance is a type of life insurance designed to pay off your mortgage in the event of your death, ensuring that your family can remain in their home.",
      howItWorks:
        "This is typically a term life insurance policy where the death benefit is tied to the remaining balance on your mortgage. If you pass away during the policy term, the insurance pays off the mortgage balance, providing financial security for your loved ones.",
      whoShouldGetIt:
        "Mortgage Protection is ideal or homeowners, especially those who are the primary income earner, and want to ensure their mortgage is paid off in the event of their untimely death.",
      additionalInfo:
        "Mortgage Protection policies can sometimes include riders for disability or unemployment, offering broader coverage. These policies generally decrease in coverage as your mortgage balance decreases.",
      videoUrl: "https://www.youtube.com/embed/mSUIK-M2WSk?si=df-_9DfP-Dn3xU6L",
    },
    "Term Life": {
      definition:
        "Term Life insurance provides coverage for a specific period or 'term.' It's often the most affordable option and is ideal for covering financial obligations like a mortgage or income replacement during the policy term.",
      howItWorks:
        "You pay premiums over the course of the term, typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive a death benefit. If you outlive the term, the coverage ends unless you renew or convert the policy.",
      whoShouldGetIt:
        "Term Life is ideal for individuals who need coverage for a specific period, such as parents with young children, homeowners with a mortgage, or anyone looking to ensure their income is replaced if they pass away unexpectedly.",
      additionalInfo:
        "Term Life policies typically do not build cash value. They are straightforward and provide high coverage at a lower cost compared to permanent life insurance.",
      videoUrl: "https://www.youtube.com/embed/xEumF_1FeNY?si=OaM9nW3md9-ycyWI",
    },
    "Whole Life": {
      definition:
        "Whole Life insurance offers lifelong coverage with a savings component called cash value, which grows over time. It provides guaranteed death benefits and fixed premiums.",
      howItWorks:
        "You pay premiums for your entire life, and the policy builds cash value over time. You can borrow against the cash value or surrender the policy for it. If you keep the policy active, your beneficiaries receive a death benefit when you pass away.",
      whoShouldGetIt:
        "Whole Life is ideal for individuals looking for lifelong coverage and a policy that builds cash value. It's useful for estate planning, leaving an inheritance, or covering final expenses.",
      additionalInfo:
        "Whole Life is generally more expensive than Term Life, but it provides peace of mind with lifelong coverage and the potential for cash value accumulation.",
      videoUrl: "https://www.youtube.com/embed/jeXKNQ4DETQ?si=B_iNqlmQneYrlfMn",
    },
    "Indexed Universal Life (IUL)": {
      definition:
        "Indexed Universal Life (IUL) insurance combines lifelong coverage with the potential for cash value growth linked to a stock market index, offering flexibility in premiums and death benefits.",
      howItWorks:
        "Your premiums are split between the cost of insurance and the cash value account. The cash value earns interest based on the performance of a stock market index, such as the S&P 500, but with a cap and a floor to limit gains and losses.",
      whoShouldGetIt:
        "IUL is suitable for individuals who want permanent coverage with the potential for higher cash value growth compared to Whole Life, along with the flexibility to adjust premiums and death benefits.",
      additionalInfo:
        "IUL policies can be complex, and the cash value growth is not guaranteed. It's important to understand the fees and potential risks before purchasing.",
      videoUrl: "https://www.youtube.com/embed/RklbgezJUFk?si=1rOAa69S5LA5_95Y",
    },
    Annuities: {
      definition:
        "Annuities are financial products that provide a steady income stream, typically used for retirement. They can be structured to pay out for a fixed period or for the rest of your life.",
      howItWorks:
        "You pay a lump sum or series of payments to an insurance company. In return, the company provides regular income payments, either immediately or at a future date, depending on the type of annuity.",
      whoShouldGetIt:
        "Annuities are ideal for individuals looking for a reliable source of income in retirement, especially those who want to ensure they don't outlive their savings.",
      additionalInfo:
        "There are different types of annuities, such as fixed, variable, and indexed, each with its own risk and return profile. It's essential to choose the right type based on your financial goals.",
      videoUrl: "https://www.youtube.com/embed/lW36jYkv0lM?si=-OOCKrU9gb5tqEHC",
    },
  };
  const details = productDetails[activeItem];

  return (
    <Container>
      <Button $variation="secondary" onClick={goBack}>
        Back
      </Button>
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
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </VideoContainer>
        {details ? (
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
        ) : (
          <ProductDetails>
            <SectionContent>
              No information available for this product.
            </SectionContent>
          </ProductDetails>
        )}
      </Content>
    </Container>
  );
}
