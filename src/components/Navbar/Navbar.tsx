//Icons
import { PlayIcon } from "../../Icons/PlayIcon";
import { RulesIcon } from "../../Icons/RulesIcon";

import { paths } from "../../constants/paths";

//styles

import {
  StyledLinkContainer,
  StyledMenuContainer,
  StyledMenuLink,
  StyledMenuLinkText,
  StyledTitle,
  StyledWrapper,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledMenuContainer>
        <StyledTitle to={paths.main}>Othello Game</StyledTitle>
        <StyledLinkContainer>
          <StyledMenuLink to={paths.main}>
            <StyledMenuLinkText>Game</StyledMenuLinkText>
            <PlayIcon />
          </StyledMenuLink>
          <StyledMenuLink to={paths.rules}>
            <StyledMenuLinkText>Rules</StyledMenuLinkText>
            <RulesIcon />
          </StyledMenuLink>
        </StyledLinkContainer>
      </StyledMenuContainer>
    </StyledWrapper>
  );
};
