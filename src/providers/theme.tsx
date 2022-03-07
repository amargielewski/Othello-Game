import { PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
const theme = {
  colors: {
    primary_background: "#21295c",
    secondary_background: "#21a179",
    primary_text: "#fafafa",
  },
  fontSizes: {
    allfonts: ["20", "24", "30", "50"],
    xs: "20",
    s: "24",
    m: "30",
    l: "50",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  borderRadius: {
    primary: "8",
    circle: "50",
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
