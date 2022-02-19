import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

const StyledTitle = styled.h2`
  font-size: 40px;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledTitle>Othello Game</StyledTitle>
    </div>
  );
}

export default App;
