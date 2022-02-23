import { ReactChildren, useEffect, useState } from "react";

//game logic
import { CellStatus, getStatusName, isValidMove } from "../../game/game";

//style
import {
  DiscInner,
  StyledCountBlackBox,
  StyledCountContainer,
  StyledCountWhiteBox,
  StyledCurrentMoveName,
  StyledDisc,
  StyledGameBoard,
  StyledSingleCell,
  StyledCountWhiteBoxDisc,
  StyledCountBlackBoxDisc,
  StyledCountWhiteBoxValue,
  StyledCountBlackBoxValue,
} from "./GameBoard.styled";

const initialBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
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
  const [board, setBoard] = useState(initialBoard);
  const [whiteMoves, setWhiteMoves] = useState(2);
  const [blackMoves, setBlackMoves] = useState(2);

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
  }, [board]);

  return (
    <>
      <StyledCountContainer>
        <StyledCountWhiteBox active={move === 1}>
          <StyledCountWhiteBoxDisc></StyledCountWhiteBoxDisc>
          <StyledCountWhiteBoxValue>{whiteMoves}</StyledCountWhiteBoxValue>
        </StyledCountWhiteBox>
        <StyledCountBlackBox active={move === 2}>
          <StyledCountBlackBoxDisc></StyledCountBlackBoxDisc>
          <StyledCountBlackBoxValue>{blackMoves}</StyledCountBlackBoxValue>
        </StyledCountBlackBox>
      </StyledCountContainer>
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
      debugger
      <code>
        {board.map((row, rowI) => (
          <p key={rowI} style={{ margin: "16px 0", letterSpacing: "16px" }}>
            {row.map((value, colI) => (
              <span
                style={{
                  color: value === 1 ? "red" : value === 2 ? "green" : "yellow",
                }}
                key={rowI + colI}
              >
                {value}
              </span>
            ))}
          </p>
        ))}
      </code>
    </>
  );
};

type CellProps = {
  children?: ReactChildren;
  status: CellStatus;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
