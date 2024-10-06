import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import headshot1 from "../images/headshots/headshot1.jpg";

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

const Highlight = styled.span`
  color: var(--color-accent-700);
  font-weight: bold;
`;

export default function AboutMe() {
  const navigate = useNavigate();

  // Refs and InView hooks for each card
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Start the animation when 10% of the card is visible
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <NavBar>
        <NavItems>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/services">Services</NavItem>
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
            <img src={headshot1} alt="Nick Neessen" />
          </ImageContainer>
          <SubHeader>Introduction</SubHeader>
          <Paragraph>
            Hi, I'm Nick Neessen, a <Highlight>37-year-old</Highlight> tech
            enthusiast, entrepreneur, and lover of life. My journey has taken me
            across continents and through diverse experiences, each shaping who
            I am today.
          </Paragraph>
        </Card>

        <Card ref={ref2} isVisible={inView2}>
          <SubHeader>Background & Journey</SubHeader>
          <Paragraph>
            Born in South Korea with my dad serving in the army, I moved to the
            States at the age of 3. My childhood was a tapestry of cultures and
            cities, having lived in places like El Paso, Buffalo, Atlanta,
            Chicago, Miami, and Indianapolis. These experiences enriched my
            understanding of the world and fueled my passion for learning.
          </Paragraph>
        </Card>

        <Card ref={ref3} isVisible={inView3}>
          <SubHeader>Professional Life</SubHeader>
          <Paragraph>
            I'm a <Highlight>self-taught full-stack developer</Highlight> who
            built this very site you're on. My career has been a blend of
            technology and entrepreneurship, which led me to create my own
            wholesale online business supplying auto dealers with quality used
            inventory. But that’s not all—I’m also a proud partner in one of
            Kentucky’s largest inflatable bounce house companies. My work is
            driven by a relentless pursuit of excellence and a deep-seated
            belief in creating value for others.
          </Paragraph>
        </Card>

        <Card ref={ref4} isVisible={inView4}>
          <SubHeader>Hobbies & Interests</SubHeader>
          <Paragraph>
            When I'm not busy building businesses, I love staying physically
            active, traveling, and exploring new restaurants. I'm a food lover
            at heart, with a passion for discovering both hidden gems and
            frequenting my favorite spots. I thrive on social connections and
            enjoy nothing more than hanging out with friends and creating
            lasting memories.
          </Paragraph>
        </Card>

        <Card ref={ref5} isVisible={inView5}>
          <SubHeader>Personal Philosophy</SubHeader>
          <Paragraph>
            I'm a growth-minded individual, constantly seeking ways to expand my
            knowledge and skills. My ultimate goal? To become the best version
            of myself and help others do the same. Whether it's through my work,
            personal interactions, or community involvement, I believe in making
            a positive impact wherever I go.
          </Paragraph>
        </Card>

        <Card ref={ref6} isVisible={inView6}>
          <SubHeader>Why It Matters</SubHeader>
          <Paragraph>
            Life is a journey, and I'm all about making the most of it. I'm here
            to grow, to learn, and to share that journey with others. If you're
            someone who values passion, innovation, and authenticity, then let's
            connect. Together, we can create something truly extraordinary.
          </Paragraph>
        </Card>
      </ContentWrapper>
    </PageContainer>
  );
}
