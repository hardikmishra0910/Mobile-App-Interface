import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

const NavContainer = styled.div`
  height: 80px;
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.active ? '#667eea' : '#8e8e93'};
  background: ${props => props.active ? 'rgba(102, 126, 234, 0.1)' : 'transparent'};

  &:hover {
    background: rgba(102, 126, 234, 0.05);
  }

  svg {
    font-size: 24px;
  }

  span {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      <NavItem
        active={location.pathname === '/'}
        onClick={() => navigate('/')}
      >
        <FiHome />
        <span>Home</span>
      </NavItem>
      
      <NavItem
        active={location.pathname === '/profile'}
        onClick={() => navigate('/profile')}
      >
        <FiUser />
        <span>Profile</span>
      </NavItem>
      
      <NavItem
        active={location.pathname === '/settings'}
        onClick={() => navigate('/settings')}
      >
        <FiSettings />
        <span>Settings</span>
      </NavItem>
    </NavContainer>
  );
};

export default Navigation;