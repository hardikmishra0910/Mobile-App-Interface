import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Navigation from './components/Navigation';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const MobileFrame = styled.div`
  width: 375px;
  height: 812px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
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
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </ContentArea>
            <Navigation />
          </Router>
        </MobileFrame>
      </AppContainer>
    </>
  );
}

export default App;