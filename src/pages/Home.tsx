import React from 'react';
import styled from 'styled-components';
import { FiBell, FiSearch, FiTrendingUp, FiDollarSign, FiUsers, FiActivity } from 'react-icons/fi';

const Container = styled.div`
  padding: 20px;
  height: 100%;
  background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Greeting = styled.div`
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 4px;
  }
  
  p {
    color: #8e8e93;
    font-size: 16px;
  }
`;

const NotificationIcon = styled.button`
  background: #ffffff;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 20px;
    color: #667eea;
  }
`;

const SearchBar = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;

  svg {
    color: #8e8e93;
    font-size: 20px;
  }

  input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 16px;
    color: #1a1a1a;

    &::placeholder {
      color: #8e8e93;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    
    svg {
      font-size: 20px;
      color: white;
    }
  }

  .value {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  .label {
    font-size: 14px;
    color: #8e8e93;
  }
`;

const ActivitySection = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
  }
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ActivityItem = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      font-size: 16px;
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

  .time {
    font-size: 12px;
    color: #8e8e93;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Greeting>
          <h1>Good Morning</h1>
          <p>Welcome back, John!</p>
        </Greeting>
        <NotificationIcon>
          <FiBell />
        </NotificationIcon>
      </Header>

      <SearchBar>
        <FiSearch />
        <input type="text" placeholder="Search anything..." />
      </SearchBar>

      <StatsGrid>
        <StatCard>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <FiTrendingUp />
          </div>
          <div className="value">2,847</div>
          <div className="label">Total Views</div>
        </StatCard>

        <StatCard>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <FiDollarSign />
          </div>
          <div className="value">$12.4k</div>
          <div className="label">Revenue</div>
        </StatCard>

        <StatCard>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
            <FiUsers />
          </div>
          <div className="value">1,247</div>
          <div className="label">Active Users</div>
        </StatCard>

        <StatCard>
          <div className="icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
            <FiActivity />
          </div>
          <div className="value">94.2%</div>
          <div className="label">Performance</div>
        </StatCard>
      </StatsGrid>

      <ActivitySection>
        <h2>Recent Activity</h2>
        <ActivityList>
          <ActivityItem>
            <div className="icon">
              <FiTrendingUp />
            </div>
            <div className="content">
              <div className="title">New user registered</div>
              <div className="subtitle">Sarah Johnson joined the platform</div>
            </div>
            <div className="time">2m ago</div>
          </ActivityItem>

          <ActivityItem>
            <div className="icon">
              <FiDollarSign />
            </div>
            <div className="content">
              <div className="title">Payment received</div>
              <div className="subtitle">$299 from Premium subscription</div>
            </div>
            <div className="time">15m ago</div>
          </ActivityItem>

          <ActivityItem>
            <div className="icon">
              <FiActivity />
            </div>
            <div className="content">
              <div className="title">System update</div>
              <div className="subtitle">Performance improvements deployed</div>
            </div>
            <div className="time">1h ago</div>
          </ActivityItem>
        </ActivityList>
      </ActivitySection>
    </Container>
  );
};

export default Home;