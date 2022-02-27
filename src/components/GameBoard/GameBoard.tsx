import { ReactChildren, useEffect, useState } from "react";

//game logic
import { CellStatus, getStatusName, isValidMove } from "../../game/game";

//style
import {
  DiscInner,
  StyledCountBlackBox,
  StyledCountContainer,
  StyledCountWhiteBox,
  StyledDisc,
  StyledGameBoard,
  StyledSingleCell,
  StyledCountDisc,
  StyledCountBoxValue,
  StyledGameBoardModal,
  StyledGameBoardWrapper,
  StyledGameBoardModalCaption,
  StyledGameBoardModalText,
  StyledWinModalText,
  StyledWinModalButton
} from "./GameBoard.styled";

const initialBoard1 = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 2, 2, 2, 1, 1, 1],
  [1, 1, 1, 2, 1, 1, 2, 1],
  [1, 2, 1, 1, 2, 1, 1, 1],
  [1, 2, 1, 1, 2, 2, 1, 1],
  [1, 2, 1, 1, 1, 1, 2, 2],
  [1, 1, 2, 2, 2, 2, 1, 2],
  [1, 1, 1, 1, 1, 1, 1, 0]
];

const initialBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

export const Cell = ({ children, status, onClick }: CellProps) => (
  <StyledSingleCell onClick={onClick}>
    <Disc status={status}>{children}</Disc>
  </StyledSingleCell>
);

export const Disc = ({ status }: CellProps) => (
  <StyledDisc status={status}>
    <DiscInner status={status} />
  </StyledDisc>
);

export const GameBoard = () => {
  const [move, setMove] = useState<1 | 2>(2);
  const [board, setBoard] = useState([...initialBoard1]);
  const [whiteMoves, setWhiteMoves] = useState(2);
  const [blackMoves, setBlackMoves] = useState(2);
  const [isSkipMoveModalOpen, setSkipMoveModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isResetBtnDisplay, setIsResetBtnDisplay] = useState(false);
  console.table(initialBoard);
  const handleSkipMoveModalClose = () => {
    setSkipMoveModalOpen(false);
  };

  const handleWinModalClose = () => {
    setIsWinModalOpen(false);
    setIsResetBtnDisplay(true);
  };

  const handleGameReset = () => {
    setBoard([...initialBoard]);
    setMove(2);
    setBlackMoves(2);
    setWhiteMoves(2);

    setSkipMoveModalOpen(false);
    setIsWinModalOpen(false);
    setIsResetBtnDisplay(false);
  };

  const handleClick = (rowIndex: number, columnIndex: number) => {
    const possibleMoves = isValidMove(rowIndex, columnIndex, board, move);

    if (possibleMoves.length > 0) {
      possibleMoves.map((move) => {
        changeCellValue(move.row, move.column);
      });
      changeCellValue(rowIndex, columnIndex);
      setMove((currentMove) => (currentMove === 1 ? 2 : 1));
    }
  };

  const changeCellValue = (rowIndex: number, columnIndex: number) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      console.log("move", move);
      newBoard[rowIndex][columnIndex] = move;
      return newBoard;
    });
  };

  useEffect(() => {
    setWhiteMoves((prev) => board.flat().filter((cell) => cell === 1).length);

    setBlackMoves((prev) => board.flat().filter((cell) => cell === 2).length);

    // hardcore end game functionality :D  optimalization needed

    checkForWin();
  }, [board]);

  const checkForWin = () => {
    const whitePossibleMoves = [];
    const blackPossibleMoves = [];
    board.forEach((row, rowI) => {
      row.forEach((value, colI) => {
        if (value !== 1 && value !== 2) {
          whitePossibleMoves.push(...isValidMove(rowI, colI, board, 1));
          blackPossibleMoves.push(...isValidMove(rowI, colI, board, 2));
        }
      });
    });

    if (whitePossibleMoves.length === 0 && blackPossibleMoves.length === 0) {
      setIsWinModalOpen(true);
      return;
    }

    if (whitePossibleMoves.length === 0 && move === 1) {
      setSkipMoveModalOpen(true);
      setMove(2);
      return;
    }

    if (blackPossibleMoves.length === 0 && move === 2) {
      setSkipMoveModalOpen(true);
      setMove(1);
      return;
    }
  };

  return (
    <>
      {isResetBtnDisplay && (
        <button onClick={handleGameReset}>Play Again</button>
      )}
      <StyledCountContainer>
        <StyledCountWhiteBox active={move === 1}>
          <StyledCountDisc discColor={"#fff"}></StyledCountDisc>
          <StyledCountBoxValue>{whiteMoves}</StyledCountBoxValue>
        </StyledCountWhiteBox>
        <StyledCountBlackBox active={move === 2}>
          <StyledCountDisc discColor={"#000"}></StyledCountDisc>
          <StyledCountBoxValue>{blackMoves}</StyledCountBoxValue>
        </StyledCountBlackBox>
      </StyledCountContainer>
      <StyledGameBoardWrapper>
        <StyledGameBoard>
          {board.map((row, rowIndex) =>
            row.map((column, columnIndex) => (
              <Cell
                key={rowIndex + columnIndex}
                onClick={() => handleClick(rowIndex, columnIndex)}
                status={getStatusName(board[rowIndex][columnIndex])}
              ></Cell>
            ))
          )}
        </StyledGameBoard>
        {isSkipMoveModalOpen && (
          <StyledGameBoardModal onClick={handleSkipMoveModalClose}>
            <StyledGameBoardModalText>
              No possible moves, you lose a turn to your opponent
            </StyledGameBoardModalText>
            <StyledGameBoardModalCaption>
              (Click on gameboard to close this modal)
            </StyledGameBoardModalCaption>
          </StyledGameBoardModal>
        )}

        {isWinModalOpen && (
          <StyledGameBoardModal onClick={handleSkipMoveModalClose}>
            <StyledWinModalText>Player Win</StyledWinModalText>
            <StyledWinModalButton onClick={handleGameReset}>
              Play Again
            </StyledWinModalButton>
            <StyledWinModalButton onClick={handleWinModalClose}>
              Show Gameboard
            </StyledWinModalButton>
          </StyledGameBoardModal>
        )}
      </StyledGameBoardWrapper>
    </>
  );
};

type CellProps = {
  children?: ReactChildren;
  status: CellStatus;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
