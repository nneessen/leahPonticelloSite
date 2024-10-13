import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { AGENT } from "../utils/constants";
import lp_headshot from "../images/headshots/lp_headshot.JPG";
import { useMoveBack } from "../hooks/useMoveBack";

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
  overflow-y: auto;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-brand-500);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: var(--color-brand-50);
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent-300);
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-accent-200);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent-400);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 100px; /* To prevent content from hiding behind the fixed NavBar */
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.section`
  background-color: var(--color-brand-50);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(40px)"};
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
  width: 100%;

  @media (max-width: 600px) {
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    @media (max-width: 600px) {
      width: 120px;
      height: 120px;
    }
  }
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  color: var(--color-brand-900);
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: var(--color-brand-700);
  line-height: 1.6;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export default function AboutMe() {
  const goBack = useMoveBack();
  // Refs and InView hooks for each card
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Start the animation when 10% of the card is visible
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageContainer>
      <NavBar>
        <NavItems>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/credentials">Credentials</NavItem>
        </NavItems>
        <BackButton onClick={goBack}>
          <FaArrowLeft size={20} />
          Back
        </BackButton>
      </NavBar>

      <ContentWrapper>
        <Card ref={ref1} isVisible={inView1}>
          <ImageContainer>
            <img src={lp_headshot} alt="Leah Ponticello" />
          </ImageContainer>
        </Card>

        <Card ref={ref2} isVisible={inView2}>
          <SubHeader>Background</SubHeader>
          <Paragraph>{AGENT.bio}</Paragraph>
        </Card>
      </ContentWrapper>
    </PageContainer>
  );
}
