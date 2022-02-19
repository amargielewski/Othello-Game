import { createGlobalStyle, css } from "styled-components";
import { ResetCss } from "./ResetCss";

export const GlobalStyle = createGlobalStyle`
${ResetCss};

 *,
  body {
    font-family: "Oswald", sans-serif;
  }

  body {
    background-color: #001427;
    color:#fafafa;
  }
`;