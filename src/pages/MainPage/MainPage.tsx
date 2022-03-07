//styles
import { useNavigate } from "react-router-dom";
import { GameBoard } from "../../components/GameBoard/GameBoard";
import { paths } from "../../constants/paths";
import { StyledWrapper } from "./MainPage.styled";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <GameBoard />
    </StyledWrapper>
  );
};
