import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LandingScreen, LoginScreen, SignupScreen, ProfileScreen } from './pages';
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
  gap: 16px;
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
  transition: background-color 0.3s ease;
`;

const PageIndicator = styled.div`
  font-size: 12px;
  color: #999;
  min-width: 40px;
  text-align: center;
`;

const AdobeXDText = styled.div`
  font-size: 12px;
  color: #999;
`;

// Component to handle dynamic navigation based on current route
const DynamicBottomNavigation: React.FC = () => {
  const location = useLocation();
  
  // Define page mapping
  const getPageInfo = (pathname: string) => {
    switch (pathname) {
      case '/':
        return { currentPage: 1, totalPages: 4, activeDot: 0 };
      case '/login':
        return { currentPage: 2, totalPages: 4, activeDot: 1 };
      case '/signup':
        return { currentPage: 3, totalPages: 4, activeDot: 1 };
      case '/profile':
        return { currentPage: 4, totalPages: 4, activeDot: 2 };
      default:
        return { currentPage: 1, totalPages: 4, activeDot: 0 };
    }
  };

  const pageInfo = getPageInfo(location.pathname);

  return (
    <BottomNavigation>
      <NavDots>
        <NavDot active={pageInfo.activeDot === 0} />
        <NavDot active={pageInfo.activeDot === 1} />
        <NavDot active={pageInfo.activeDot === 2} />
      </NavDots>
      <PageIndicator>
        {pageInfo.currentPage} of {pageInfo.totalPages}
      </PageIndicator>
      <AdobeXDText>
        Made with Adobe XD
      </AdobeXDText>
    </BottomNavigation>
  );
};

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
            <DynamicBottomNavigation />
          </Router>
        </MobileFrame>
      </AppContainer>
    </>
  );
}

export default App;