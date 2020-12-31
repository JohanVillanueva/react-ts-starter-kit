import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/imgs/profile_pic.png';

const StyledProfilePic = styled.figure`
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;

const ProfilePic: React.FC = () => {
  return (
    <StyledProfilePic className="profile-pic">
      <img src={profilePic} alt="Profile pic" />
    </StyledProfilePic>
  );
};

export default ProfilePic;
