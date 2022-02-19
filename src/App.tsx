import styled from "styled-components";
import { ThemeProvider } from "./providers/theme";

const StyledTitle = styled.h2`
  font-size: 40px;
  text-align: center;
`;

function App() {
  return (
    <ThemeProvider>
      <StyledTitle>Othello Game</StyledTitle>
    </ThemeProvider>
  );
}

export default App;
