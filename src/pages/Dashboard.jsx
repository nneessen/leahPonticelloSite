import styled from "styled-components";
import lp_bg from "../images/backgrounds/lp_bg.jpg";
import Button from "../ui/Button";
import { AGENT } from "../utils/constants";

const Dashboard = () => {
  const openCalendly = () => {
    window.open(AGENT.calendlyLink);
  };

  return (
    <DashboardContainer>
      <ContentContainer>
        <HeroSection>
          <MainText>A Better Future</MainText>
          <SubText>
            Providing tailored life insurance solutions for every family.
          </SubText>
        </HeroSection>
        <Button onClick={openCalendly}>Book Consultation</Button>
      </ContentContainer>

      <BackgroundImage src={lp_bg} alt="Background" />
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components

const DashboardContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding-top: 20vh;
`;

const HeroSection = styled.div`
  margin-bottom: 2rem;
`;

const MainText = styled.div`
  font-family: "Urbanist";
  font-size: 7rem;
  color: var(--color-brand-50);
  font-weight: 500;
`;

const SubText = styled.p`
  font-family: "Urbanist";
  font-size: 2rem;
  color: var(--color-brand-50);
  margin-top: 1rem;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;
