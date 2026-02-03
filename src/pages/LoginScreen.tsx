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
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.4;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #7B68EE;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
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

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  background: #CCCCCC;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #7B68EE;
    transform: translateY(-1px);
  }
`;

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple validation - in real app would authenticate
    if (email && password) {
      navigate('/profile');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Signin to your PopX account</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet,{'\n'}
          consectetur adipiscing elit.
        </Subtitle>

        <FormGroup>
          <Label>Email Address</Label>
          <Input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <LoginButton onClick={handleLogin}>
          Login
        </LoginButton>
      </FormContainer>
    </Container>
  );
};

export default LoginScreen;