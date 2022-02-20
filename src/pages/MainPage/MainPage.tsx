//styles
import { GameBoard } from "../../components/GameBoard/GameBoard";
import { StyledPageTitle, StyledWrapper } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <StyledPageTitle>Play Game</StyledPageTitle>
      <GameBoard></GameBoard>
    </StyledWrapper>
  );
};
