import styled, { css } from "styled-components";
import {
  CellStatus,
  getFieldColorFromStatus,
  getFieldShadowColorFromStatus
} from "../../game/game";

export const StyledGameBoardWrapper = styled.div`
  position: relative;
`;

export const StyledGameBoard = styled.div`
  background-color: #21a179;
  border: 5px solid #fafafa;
  display: grid;
  grid-template-rows: repeat(8, 80px);
  grid-template-columns: repeat(8, 80px);
`;

export const StyledCountContainer = styled.div`
  display: flex;
  gap: 0 20px;
  font-size: 20px;
  padding: 10px;
`;

const StyledCountBox = css`
  display: flex;
  align-items: center;
  gap: 0 10px;
  background-color: #21a179;
  border: 2px solid white;
  width: 70px;
  padding: 5px;
  height: 70px;
  justify-content: center;
`;

export const StyledCountBoxValue = styled.p`
  font-size: 20px;
`;

export const StyledCountBlackBox = styled.div<{
  active: boolean;
}>`
  ${StyledCountBox};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

export const StyledCountDisc = styled.div<{
  discColor: "#fff" | "#000";
}>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ discColor }) => discColor};
`;

export const StyledCountWhiteBox = styled.div<{
  active: boolean;
}>`
  ${StyledCountBox};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

export const StyledSingleCell = styled.div`
  width: 100%;
  padding: 8px;
  cursor: pointer;
  border: 1px solid #20b2aa50;
`;

export const StyledDisc = styled.div<{
  status: CellStatus;
}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 7px;
  background: ${({ status }) => getFieldColorFromStatus(status)};
`;

export const DiscInner = styled.div<{
  status: CellStatus;
}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ status }) => getFieldShadowColorFromStatus(status)};
`;

export const StyledGameBoardModal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #0d3d2ecc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px 0;
`;

export const StyledGameBoardModalText = styled.p`
  font-size: 30px;
`;

export const StyledGameBoardModalCaption = styled.p`
  font-size: 20px;
`;

export const StyledWinModalText = styled.p`
  font-weight: 600;
  font-size: 50px;
`;

export const StyledWinModalButton = styled.button`
  color: #fafafa;
  padding: 5px 10px;
  border: 1px solid #fff;
  font-size: 30px;
  cursor: pointer;
  background: transparent;
  transition: 0.5s;

  :hover {
    background: white;
    color: #0d3d2ecc;
  }
`;
