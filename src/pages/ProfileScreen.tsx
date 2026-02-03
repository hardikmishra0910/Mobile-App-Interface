import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  background: #f8f8f8;
  padding: 20px;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #666;
`;

const BreadcrumbIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
`;

const BreadcrumbItem = styled.span`
  color: #333;
  font-weight: 500;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 25px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNGRkE1MDAiLz4KPHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDEwQzEyLjc5IDEwIDExIDExLjc5IDExIDE0QzExIDE2LjIxIDEyLjc5IDE4IDE1IDE4QzE3LjIxIDE4IDE5IDE2LjIxIDE5IDE0QzE5IDExLjc5IDE3LjIxIDEwIDE1IDEwWk0xNSAyMEM5LjQ4IDIwIDUgMjEuNzkgNSAyNFYyNkgyNVYyNEMyNSAyMS43OSAyMC41MiAyMCAxNSAyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K') center/cover;
  position: relative;
  flex-shrink: 0;
`;

const OnlineIndicator = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #4CAF50;
  border: 2px solid white;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const ProfileEmail = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 0;
`;

const ProfileDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-top: 20px;
`;

const ProfileScreen: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbIcon>⚏</BreadcrumbIcon>
        <span>devtask</span>
        <span>›</span>
        <BreadcrumbItem>Profile</BreadcrumbItem>
      </Breadcrumb>

      <ProfileCard>
        <CardTitle>Account Settings</CardTitle>
        
        <ProfileSection>
          <ProfileImage>
            <OnlineIndicator />
          </ProfileImage>
          <ProfileInfo>
            <ProfileName>Marry Doe</ProfileName>
            <ProfileEmail>Marry@Gmail.Com</ProfileEmail>
          </ProfileInfo>
        </ProfileSection>

        <ProfileDescription>
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing 
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </ProfileDescription>
      </ProfileCard>
    </Container>
  );
};

export default ProfileScreen;