import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  margin: 20px;
`;

const HELLO_WORLD_MESSAGE = 'Happy hacking!';

const App: React.FunctionComponent = () => (
  <main>
    <StyledTitle>{HELLO_WORLD_MESSAGE}</StyledTitle>
  </main>
);
export default App;
