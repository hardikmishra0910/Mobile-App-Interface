import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  background: #f8f8f8;
  overflow-y: auto;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-right: 8px;
`;

const InfoIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FFA500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #7B68EE;
  margin-bottom: 6px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0 12px;
  font-size: 14px;
  color: #333;
  background: #f9f9f9;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #7B68EE;
    background: white;
  }

  &::placeholder {
    color: #999;
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
`;

const RadioOptions = styled.div`
  display: flex;
  gap: 20px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin: 0;
`;

const CreateButton = styled.button`
  width: 100%;
  height: 48px;
  background: #7B68EE;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6A5ACD;
    transform: translateY(-1px);
  }
`;

const SignupScreen: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phoneNumber: 'Marry Doe',
    emailAddress: 'Marry Doe',
    password: 'Marry Doe',
    company: 'Marry Doe',
    isAgency: 'yes'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreateAccount = () => {
    navigate('/profile');
  };

  return (
    <Container>
      <FormContainer>
        <Header>
          <Title>Create your PopX account</Title>
          <InfoIcon>i</InfoIcon>
        </Header>

        <FormGroup>
          <Label>Full Name*</Label>
          <Input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Phone number*</Label>
          <Input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Email address*</Label>
          <Input
            type="email"
            value={formData.emailAddress}
            onChange={(e) => handleInputChange('emailAddress', e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password*</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Company*</Label>
          <Input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />
        </FormGroup>

        <RadioGroup>
          <RadioLabel>Are you an Agency?*</RadioLabel>
          <RadioOptions>
            <RadioOption>
              <RadioInput
                type="radio"
                name="agency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={(e) => handleInputChange('isAgency', e.target.value)}
              />
              Yes
            </RadioOption>
            <RadioOption>
              <RadioInput
                type="radio"
                name="agency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={(e) => handleInputChange('isAgency', e.target.value)}
              />
              No
            </RadioOption>
          </RadioOptions>
        </RadioGroup>

        <CreateButton onClick={handleCreateAccount}>
          Create Account
        </CreateButton>
      </FormContainer>
    </Container>
  );
};

export default SignupScreen;