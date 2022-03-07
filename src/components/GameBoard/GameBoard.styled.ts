import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import {
  CellStatus,
  getFieldColorFromStatus,
  getFieldShadowColorFromStatus,
} from "../../game/game";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const StyledGameBoardWrapper = styled.div`
  z-index: 1;
  position: relative;
`;

export const StyledCloseInfoButton = styled.div`
  position: absolute;
  top: -2px;
  left: -42px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #fafafa;

  :hover {
    background-color: #fafafa;
    color: #21295c;
  }

  &.entering {
    svg {
      transform: rotate(0);
      transition: all 300ms ease-in-out;
    }
  }
  &.entered {
    svg {
      transform: rotate(180deg);
      transition: all 300ms ease-in-out;
    }
  }
  &.exiting {
    svg {
      transform: rotate(180deg);
    }
  }

  &.exited {
    svg {
      transform: rotate(0);
      transition: all 300ms ease-in-out;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`;

export const StyledGameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 100%;
  right: 100%;
  gap: 40px 0;
  border: 2px solid ${({ theme }) => theme.colors.white};
  min-width: 190px;

  @media (min-width: ${breakpoints.l}px) {
    &.entering {
      transform: translateX(0);
    }
    &.entered {
      transform: translateX(100%);
      transition: all 300ms ease-in-out;
    }
    &.exiting {
      transform: translateX(100%);
    }

    &.exited {
      transform: translateX(0);
      transition: all 300ms ease-in-out;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    position: static;
  }
`;

export const StyledGameInfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: ${breakpoints.l}px) {
    gap: 20px 0;
  }
`;

export const StyledGameInfoTitleContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  color: #21295c;
  display: flex;
  justify-content: center;
  padding: 10px 0;

  @media (max-width: 1150px) {
    padding: 5px 0;
  }
`;

export const StyledGameInfoTitle = styled.p`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.5px;

  @media (max-width: 1150px) {
    font-size: 24px;
  }
`;

export const StyledGameBoard = styled.div`
  background-color: #21a179;
  border: 2px solid #fafafa;
  display: grid;
  grid-template-rows: repeat(8, 80px);
  grid-template-columns: repeat(8, 80px);

  @media (max-width: ${breakpoints.m}px) {
    grid-template-rows: repeat(8, 60px);
    grid-template-columns: repeat(8, 60px);
  }

  @media (max-width: ${breakpoints.s}px) {
    grid-template-rows: repeat(8, 50px);
    grid-template-columns: repeat(8, 50px);
  }

  @media (max-width: ${breakpoints.xs}px) {
    grid-template-rows: repeat(8, 35px);
    grid-template-columns: repeat(8, 35px);
  }
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
  width: 40px;
  height: 40px;
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

  @media (max-width: ${breakpoints.s}px) {
    padding: 2px;
  }
`;

export const StyledDisc = styled.div<{
  status: CellStatus;
}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 7px;
  background: ${({ status }) => getFieldColorFromStatus(status)};

  @media (max-width: ${breakpoints.s}px) {
    padding: 3px;
  }
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
