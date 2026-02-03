import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import LandingScreen from './pages/LandingScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import ProfileScreen from './pages/ProfileScreen';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 20px;
`;

const MobileFrame = styled.div`
  width: 375px;
  height: 812px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StatusBar = styled.div`
  height: 44px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  background: #f8f8f8;
`;

const BottomNavigation = styled.div`
  height: 60px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  color: #666;
`;

const NavDots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavDot = styled.div<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#333' : '#ccc'};
`;

const PageIndicator = styled.div`
  margin: 0 16px;
  font-size: 12px;
  color: #999;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <MobileFrame>
          <StatusBar>
            <span>9:41</span>
            <span>📶 📶 📶 🔋</span>
          </StatusBar>
          <Router>
            <ContentArea>
              <Routes>
                <Route path="/" element={<LandingScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signup" element={<SignupScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
              </Routes>
            </ContentArea>
            <BottomNavigation>
              <NavDots>
                <NavDot />
                <NavDot active />
                <NavDot />
              </NavDots>
              <PageIndicator>1 of 4</PageIndicator>
              <div style={{ fontSize: '12px', color: '#999' }}>
                Made with Adobe XD
              </div>
            </BottomNavigation>
          </Router>
        </MobileFrame>
      </AppContainer>
    </>
  );
}

export default App;