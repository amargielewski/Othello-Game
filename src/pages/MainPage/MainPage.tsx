//styles
import {
  StyledGameBoard,
  StyledPageTitle,
  StyledSingleCell,
  StyledWrapper,
} from "./MainPage.styled";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <StyledPageTitle>Play Game</StyledPageTitle>
      <StyledGameBoard>
        <StyledSingleCell></StyledSingleCell>
      </StyledGameBoard>
    </StyledWrapper>
  );
};
