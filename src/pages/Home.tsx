import React from 'react';
import styled from 'styled-components';

import { TypewriterLabel, ProfilePic } from '../components';

const StyledHomePage = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  & {
    .name {
      font-size: 4em;
      margin-bottom: 12px;
    }

    @media (max-width: 480px) {
      .name {
        font-size: 2.5em;
      }
    }
  }
`;

const JOB_LABELS = ['FRONTEND ENGINEER', 'UI/UX ENTHUSIASTIC', 'SPEAKER'];

const HomePage: React.FC = () => {
  return (
    <StyledHomePage>
      <ProfilePic></ProfilePic>
      <h1 className="name">Johan Villanueva</h1>
      <TypewriterLabel phrases={JOB_LABELS}></TypewriterLabel>
    </StyledHomePage>
  );
};

export default HomePage;
