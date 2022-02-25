import { PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
const theme = {
  colors: {
    oxford_blue: "#001427",
    hunter_green: "#21a179",
    white: "#fafafa",
  },
};

type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
