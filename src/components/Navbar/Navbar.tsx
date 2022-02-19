import {
  StyledLinkContainer,
  StyledMenuContainer,
  StyledMenuLink,
  StyledTitle,
  StyledWrapper,
} from "./Navbar.styled";

import { paths } from "../../constants/paths";

export const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledMenuContainer>
        <StyledTitle to={paths.main}>Othello Game</StyledTitle>
        <StyledLinkContainer>
          <StyledMenuLink to={paths.main}>Game</StyledMenuLink>
          <StyledMenuLink to={paths.rules}>Rules</StyledMenuLink>
        </StyledLinkContainer>
      </StyledMenuContainer>
    </StyledWrapper>
  );
};
