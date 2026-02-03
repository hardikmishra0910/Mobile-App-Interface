import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FiBell, 
  FiLock, 
  FiUser, 
  FiMoon, 
  FiGlobe, 
  FiHelpCircle, 
  FiLogOut,
  FiChevronRight,
  FiToggleLeft,
  FiToggleRight
} from 'react-icons/fi';

const Container = styled.div`
  padding: 20px;
  height: 100%;
  background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
`;

const Header = styled.div`
  margin-bottom: 30px;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
  }
  
  p {
    color: #8e8e93;
    font-size: 16px;
  }
`;

const SettingsSection = styled.div`
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const SectionTitle = styled.div`
  padding: 20px 20px 0 20px;
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
`;

const SettingItem = styled.div<{ clickable?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${props => props.clickable ? '#f8f9ff' : 'transparent'};
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      font-size: 20px;
      color: white;
    }
  }

  .content {
    flex: 1;
    
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #1a1a1a;
      margin-bottom: 2px;
    }
    
    .subtitle {
      font-size: 14px;
      color: #8e8e93;
    }
  }

  .action {
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg {
      font-size: 20px;
      color: #8e8e93;
    }
  }
`;

const ToggleButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  
  svg {
    font-size: 28px;
    color: ${props => props.active ? '#667eea' : '#8e8e93'};
    transition: color 0.3s ease;
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border: none;
  border-radius: 16px;
  padding: 16px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  }

  svg {
    font-size: 20px;
  }
`;

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(true);

  return (
    <Container>
      <Header>
        <h1>Settings</h1>
        <p>Manage your preferences</p>
      </Header>

      <SettingsSection>
        <SectionTitle>Account</SectionTitle>
        <SettingItem clickable>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <FiUser />
          </div>
          <div className="content">
            <div className="title">Personal Information</div>
            <div className="subtitle">Update your details</div>
          </div>
          <div className="action">
            <FiChevronRight />
          </div>
        </SettingItem>

        <SettingItem clickable>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <FiLock />
          </div>
          <div className="content">
            <div className="title">Privacy & Security</div>
            <div className="subtitle">Manage your privacy settings</div>
          </div>
          <div className="action">
            <FiChevronRight />
          </div>
        </SettingItem>
      </SettingsSection>

      <SettingsSection>
        <SectionTitle>Preferences</SectionTitle>
        <SettingItem>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
            <FiBell />
          </div>
          <div className="content">
            <div className="title">Push Notifications</div>
            <div className="subtitle">Receive app notifications</div>
          </div>
          <div className="action">
            <ToggleButton 
              active={notifications}
              onClick={() => setNotifications(!notifications)}
            >
              {notifications ? <FiToggleRight /> : <FiToggleLeft />}
            </ToggleButton>
          </div>
        </SettingItem>

        <SettingItem>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
            <FiMoon />
          </div>
          <div className="content">
            <div className="title">Dark Mode</div>
            <div className="subtitle">Switch to dark theme</div>
          </div>
          <div className="action">
            <ToggleButton 
              active={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FiToggleRight /> : <FiToggleLeft />}
            </ToggleButton>
          </div>
        </SettingItem>

        <SettingItem clickable>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
            <FiGlobe />
          </div>
          <div className="content">
            <div className="title">Language</div>
            <div className="subtitle">English (US)</div>
          </div>
          <div className="action">
            <FiChevronRight />
          </div>
        </SettingItem>
      </SettingsSection>

      <SettingsSection>
        <SectionTitle>Security</SectionTitle>
        <SettingItem>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <FiLock />
          </div>
          <div className="content">
            <div className="title">Biometric Authentication</div>
            <div className="subtitle">Use fingerprint or face ID</div>
          </div>
          <div className="action">
            <ToggleButton 
              active={biometric}
              onClick={() => setBiometric(!biometric)}
            >
              {biometric ? <FiToggleRight /> : <FiToggleLeft />}
            </ToggleButton>
          </div>
        </SettingItem>
      </SettingsSection>

      <SettingsSection>
        <SectionTitle>Support</SectionTitle>
        <SettingItem clickable>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
            <FiHelpCircle />
          </div>
          <div className="content">
            <div className="title">Help & Support</div>
            <div className="subtitle">Get help and contact us</div>
          </div>
          <div className="action">
            <FiChevronRight />
          </div>
        </SettingItem>
      </SettingsSection>

      <LogoutButton>
        <FiLogOut />
        Sign Out
      </LogoutButton>
    </Container>
  );
};

export default Settings;