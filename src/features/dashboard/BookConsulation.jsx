import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    font-weight: 600;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.1rem;
  }
`;

export default function BookConsulation() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book-consultation");
  };
  return (
    <>
      <Title>Ready to Secure Your Family&apos;s Future?</Title>
      <Button onClick={handleClick}>Book a Consultation</Button>
    </>
  );
}
