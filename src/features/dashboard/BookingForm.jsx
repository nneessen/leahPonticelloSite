import React, { useState } from "react";
import styled from "styled-components";

const BookConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    email: "",
    phone: "",
    coverageOption: "",
    coverageAmount: "",
    optIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log("Form submitted:", formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Book a Consultation</FormTitle>
      <FormGroup>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="state">State</Label>
        <Input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="coverageOption">Select Coverage Option</Label>
        <Select
          id="coverageOption"
          name="coverageOption"
          value={formData.coverageOption}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="IUL">Mortgage Protection</option>
          <option value="Whole Life">Whole Life</option>
          <option value="Term Life">Term Life</option>
          <option value="IUL">Indexed Universal Life (IUL)</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="coverageAmount">Coverage Amount Desired?</Label>
        <Input
          type="text"
          id="coverageAmount"
          name="coverageAmount"
          placeholder="100,000"
          value={formData.coverageAmount}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <PrivacyPolicyText>
          By providing your contact information, you consent to receive
          communications from us regarding your consultation and other services.
          Please review our{" "}
          <a href="/privacy-policy" target="_blank">
            Privacy Policy
          </a>{" "}
          for more details.
        </PrivacyPolicyText>
        <CheckboxLabel>
          <Input
            type="checkbox"
            name="optIn"
            checked={formData.optIn}
            onChange={handleChange}
            required
          />
          I agree to receive communications via SMS, MMS, email, etc.
        </CheckboxLabel>
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

export default BookConsultationForm;

// Styled Components

const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const PrivacyPolicyText = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
