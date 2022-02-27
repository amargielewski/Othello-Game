import styled, { css } from "styled-components";
import {
  CellStatus,
  getFieldColorFromStatus,
  getFieldShadowColorFromStatus,
} from "../../game/game";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledGameBoardWrapper = styled.div`
  position: relative;
`;

export const StyledGameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px 0;
  border: 2px solid #fafafa;
  min-width: 190px;
`;

export const StyledGameInfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledGameInfoTitleContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  color: #21295c;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const StyledGameInfoTitle = styled.p`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const StyledGameBoard = styled.div`
  background-color: #21a179;
  border: 2px solid #fafafa;
  display: grid;
  grid-template-rows: repeat(8, 80px);
  grid-template-columns: repeat(8, 80px);
`;

export const StyledCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 100%;
`;

const StyledCountBox = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 30px;
  background-color: #21a179;
  padding: 5px;
  justify-content: center;
`;

export const StyledCountBoxValue = styled.p`
  font-size: 30px;
`;

export const StyledCountBlackBox = styled.div<{
  active: boolean;
}>`
  ${StyledCountBox};
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`;

export const StyledCountDisc = styled.div<{
  discColor: "#fff" | "#000";
}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ discColor }) => discColor};
`;

export const StyledCountWhiteBox = styled.div<{
  active: boolean;
}>`
  ${StyledCountBox};
  opacity: ${({ active }) => (active ? 1 : 0.3)};
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
  text-transform: capitalize;
`;

export const StyledWinModalButton = styled.button`
  color: #fafafa;
  padding: 5px 10px;
  border: 1px solid #fff;
  font-size: 30px;
  cursor: pointer;
  background: transparent;
  border-radius: 8px;
  transition: 0.5s;

  :hover {
    background: white;
    color: #0d3d2ecc;
  }
`;

export const StyledGameResetButton = styled.button`
  margin-top: auto;
  background-color: transparent;
  border: none;
  border-top: 1px solid #fafafa;
  color: #fafafa;
  cursor: pointer;
  width: 100%;
  font-weight: 500;
  font-size: 30px;
  transition: 0.5s;
  padding: 15px 0;

  :hover {
    background-color: #fafafa;
    color: #21295c;
  }
`;

export const StyledGameWinnerText = styled.p`
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 500;
  letter-spacing: 1.2px;
`;
