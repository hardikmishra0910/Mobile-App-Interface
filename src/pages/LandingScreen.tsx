import React from 'react';
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

const CircleContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 60px;
`;

const Circle = styled.div<{ number: number; position: { x: number; y: number } }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #FFA500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 40px;
`;

const CreateAccountButton = styled.button`
  width: 100%;
  max-width: 280px;
  height: 48px;
  background: #7B68EE;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #6A5ACD;
    transform: translateY(-1px);
  }
`;

const LoginButton = styled.button`
  width: 100%;
  max-width: 280px;
  height: 48px;
  background: #E6E6FA;
  border: none;
  border-radius: 8px;
  color: #7B68EE;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #DDA0DD;
    transform: translateY(-1px);
  }
`;

const LandingScreen: React.FC = () => {
  const navigate = useNavigate();

  const circles = [
    { number: 6, position: { x: 80, y: 20 } },
    { number: 7, position: { x: 120, y: 40 } },
    { number: 1, position: { x: 80, y: 80 } },
    { number: 2, position: { x: 40, y: 120 } },
    { number: 3, position: { x: 100, y: 140 } },
    { number: 4, position: { x: 140, y: 100 } },
    { number: 5, position: { x: 160, y: 160 } },
  ];

  return (
    <Container>
      <CircleContainer>
        {circles.map((circle, index) => (
          <Circle
            key={index}
            number={circle.number}
            position={circle.position}
          >
            {circle.number}
          </Circle>
        ))}
      </CircleContainer>

      <Title>Welcome to PopX</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet,{'\n'}
        consectetur adipiscing elit.
      </Subtitle>

      <CreateAccountButton onClick={() => navigate('/signup')}>
        Create Account
      </CreateAccountButton>

      <LoginButton onClick={() => navigate('/login')}>
        Already Registered? Login
      </LoginButton>
    </Container>
  );
};

export default LandingScreen;