import {
  StyledMenuContainer,
  StyledMenuLink,
  StyledTitle,
  StyledWrapper,
} from "./Navbar.styled";
export const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledMenuContainer>
        <StyledTitle>Othello Game</StyledTitle>
        <StyledMenuLink to="/rules">Rules</StyledMenuLink>
      </StyledMenuContainer>
    </StyledWrapper>
  );
};
