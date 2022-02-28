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
  StyledMenuToggleButton,
  StyledTitle,
  StyledTitleContainer,
  StyledWrapper,
} from "./Navbar.styled";
import { HamburgerIcon } from "../../Icons/HamburgerIcon";
import { useState } from "react";
import { Transition } from "react-transition-group";

export const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleMenuToggle = () => {
    setDisplayMenu((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <Transition in={displayMenu} timeout={300}>
        {(state) => (
          <StyledMenuContainer>
            <StyledTitleContainer>
              <StyledTitle to={paths.main}>Othello Game</StyledTitle>
              <StyledMenuToggleButton onClick={handleMenuToggle}>
                <HamburgerIcon />
              </StyledMenuToggleButton>
            </StyledTitleContainer>

            <StyledLinkContainer
              className={state}
              toggleVisibility={displayMenu}
            >
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
        )}
      </Transition>
    </StyledWrapper>
  );
};
