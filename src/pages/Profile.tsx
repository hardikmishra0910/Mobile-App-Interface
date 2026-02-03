import React from 'react';
import styled from 'styled-components';
import { FiEdit3, FiMail, FiPhone, FiMapPin, FiCalendar } from 'react-icons/fi';

const Container = styled.div`
  padding: 20px;
  height: 100%;
  background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
  font-weight: 600;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
`;

const ProfileName = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const ProfileTitle = styled.p`
  font-size: 16px;
  color: #8e8e93;
  margin-bottom: 20px;
`;

const EditButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  svg {
    font-size: 18px;
  }
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  padding: 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const StatItem = styled.div`
  text-align: center;
  
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

const InfoSection = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      font-size: 18px;
      color: white;
    }
  }

  .content {
    flex: 1;
    
    .label {
      font-size: 14px;
      color: #8e8e93;
      margin-bottom: 2px;
    }
    
    .value {
      font-size: 16px;
      font-weight: 500;
      color: #1a1a1a;
    }
  }
`;

const AchievementsSection = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
  }
`;

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const AchievementCard = styled.div`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  color: white;

  .icon {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .description {
    font-size: 12px;
    opacity: 0.9;
  }
`;

const Profile: React.FC = () => {
  return (
    <Container>
      <Header>
        <ProfileImage>JD</ProfileImage>
        <ProfileName>John Doe</ProfileName>
        <ProfileTitle>Senior Product Designer</ProfileTitle>
        <EditButton>
          <FiEdit3 />
          Edit Profile
        </EditButton>
      </Header>

      <StatsRow>
        <StatItem>
          <div className="value">127</div>
          <div className="label">Projects</div>
        </StatItem>
        <StatItem>
          <div className="value">2.4k</div>
          <div className="label">Followers</div>
        </StatItem>
        <StatItem>
          <div className="value">892</div>
          <div className="label">Following</div>
        </StatItem>
      </StatsRow>

      <InfoSection>
        <h2>Contact Information</h2>
        <InfoItem>
          <div className="icon">
            <FiMail />
          </div>
          <div className="content">
            <div className="label">Email</div>
            <div className="value">john.doe@example.com</div>
          </div>
        </InfoItem>
        <InfoItem>
          <div className="icon">
            <FiPhone />
          </div>
          <div className="content">
            <div className="label">Phone</div>
            <div className="value">+1 (555) 123-4567</div>
          </div>
        </InfoItem>
        <InfoItem>
          <div className="icon">
            <FiMapPin />
          </div>
          <div className="content">
            <div className="label">Location</div>
            <div className="value">San Francisco, CA</div>
          </div>
        </InfoItem>
        <InfoItem>
          <div className="icon">
            <FiCalendar />
          </div>
          <div className="content">
            <div className="label">Joined</div>
            <div className="value">January 2022</div>
          </div>
        </InfoItem>
      </InfoSection>

      <AchievementsSection>
        <h2>Achievements</h2>
        <AchievementGrid>
          <AchievementCard>
            <div className="icon">🏆</div>
            <div className="title">Top Performer</div>
            <div className="description">Best designer of the month</div>
          </AchievementCard>
          <AchievementCard style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
            <div className="icon">⭐</div>
            <div className="title">5-Star Rating</div>
            <div className="description">Excellent client feedback</div>
          </AchievementCard>
          <AchievementCard style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
            <div className="icon">🎯</div>
            <div className="title">Goal Achiever</div>
            <div className="description">Completed 100+ projects</div>
          </AchievementCard>
          <AchievementCard style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
            <div className="icon">🚀</div>
            <div className="title">Innovation</div>
            <div className="description">Creative solutions award</div>
          </AchievementCard>
        </AchievementGrid>
      </AchievementsSection>
    </Container>
  );
};

export default Profile;