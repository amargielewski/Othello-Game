import styled, { css } from "styled-components";
import {
  CellStatus,
  getFieldColorFromStatus,
  getFieldShadowColorFromStatus,
} from "../../game/game";

export const StyledGameBoard = styled.div`
  background-color: #21a179;
  border: 5px solid #fafafa;
  display: grid;
  grid-template-rows: repeat(8, 75px);
  grid-template-columns: repeat(8, 75px);
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
  padding: 10px 5px;
`;

const StyledCountDics = css`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const StyledCountValue = css`
  font-size: 28px;
`;

//black-box
export const StyledCountBlackBox = styled.div<{
  active: boolean;
}>`
  ${StyledCountBox};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

export const StyledCountBlackBoxDisc = styled.p`
  ${StyledCountDics};
  background-color: black;
`;
export const StyledCountBlackBoxValue = styled.p`
  ${StyledCountValue}
`;

//white-box
export const StyledCountWhiteBox = styled.div<{
  active: boolean;
}>`
  ${StyledCountBox};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;
export const StyledCountWhiteBoxDisc = styled.p`
  ${StyledCountDics}
  background-color: white;
`;
export const StyledCountWhiteBoxValue = styled.p`
  ${StyledCountValue}
`;

export const StyledCurrentMoveName = styled.h2`
  font-size: 35px;
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
