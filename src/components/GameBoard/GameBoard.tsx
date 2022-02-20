import { ReactChildren, useState } from "react";
import styled from "styled-components";
import { StyledGameBoard } from "./GameBoard.styled";

export type CellStatus = "empty" | "white" | "black";

const initialBoard = [
  [0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

const isValidMove = (
  rowIndex: number,
  columnIndex: number,
  board: any,
  player: 1 | 2
) => {
  const allPossibleMoves = [];
  const currentRow = rowIndex;
  const currentColumn = columnIndex;

  //right
  const rightArr = [];
  for (let column = currentColumn + 1; column <= 7; column++) {
    const fieldValue = board[currentRow][column];

    if (fieldValue === (player === 1 ? 2 : 1)) {
      rightArr.push({ row: currentRow, column: column });
    }
    if (rightArr.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...rightArr);
      break;
    }
  }
  //left
  const leftArr = [];
  for (let column = currentColumn - 1; column > 0; column--) {
    const fieldValue = board[currentRow][column];

    if (fieldValue === (player === 1 ? 2 : 1)) {
      leftArr.push({ row: currentRow, column: column });
    }
    if (leftArr.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...leftArr);
      break;
    }
  }
  // top
  const topArr = [];
  for (let row = currentRow - 1; row > 0; row--) {
    const fieldValue = board[row][currentColumn];

    if (fieldValue === (player === 1 ? 2 : 1)) {
      topArr.push({ row: row, column: currentColumn });
    }
    if (topArr.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...topArr);
      break;
    }
  }
  // bottom
  const bottomArr = [];
  for (let row = currentRow + 1; row <= 7; row++) {
    const fieldValue = board[row][currentColumn];

    if (fieldValue === (player === 1 ? 2 : 1)) {
      bottomArr.push({ row: row, column: currentColumn });
    }
    if (bottomArr.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...bottomArr);
      break;
    }
  }
  // diagonal top-right
  const diagonalTopRight = [];
  const row = currentRow;
  const col = 8 - currentColumn - 1;
  const loop = Math.min(row, col);
  console.log("row", row);
  console.log("col", col);
  console.log(loop);
  for (let i = 1; i <= loop; i++) {
    const fieldValue = board[currentRow - i][currentColumn + i];
    console.log("currentRow", currentRow - i);
    console.log("currentColumn", currentColumn + i);
    if (fieldValue === (player === 1 ? 2 : 1)) {
      diagonalTopRight.push({ row: currentRow - i, column: currentColumn + i });
    }
    if (diagonalTopRight.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...diagonalTopRight);
      break;
    }
  }
  console.log(allPossibleMoves);
};

export const GameBoard = () => {
  const [move, setMove] = useState<1 | 2>(2);
  const [board, setBoard] = useState(initialBoard);

  const handleClick = (rowIndex: number, columnIndex: number) => {
    isValidMove(rowIndex, columnIndex, board, move);
    changeCellValue(rowIndex, columnIndex);
    setMove((currentMove) => (currentMove === 1 ? 2 : 1));
  };

  const changeCellValue = (rowIndex: number, columnIndex: number) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      console.log("move", move);
      newBoard[rowIndex][columnIndex] = move;
      return newBoard;
    });
  };

  return (
    <>
      kogo ruch? {move} {move === 2 ? "Black" : "White"}
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
                  color: value === 1 ? "red" : value === 2 ? "green" : "yellow"
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
  children: ReactChildren;
  status: CellStatus;
};

const getStatusName = (cellValue: number): CellStatus => {
  if (cellValue === 1) return "white";
  if (cellValue === 2) return "black";
  return "empty";
};

const getFieldColorFromStatus = (status: CellStatus) => {
  if (status === "white") return "#ffffff";
  if (status === "black") return "#000000";
  return "#21a179";
};

const getFieldShadowColorFromStatus = (status: CellStatus) => {
  if (status === "white") return "#dddddd";
  if (status === "black") return "#333333";
  return "#21a179";
};

export const Cell = ({ children, status, onClick }: CellProps) => (
  <StyledSingleCell onClick={onClick}>
    <Disc status={status}>{children}</Disc>
  </StyledSingleCell>
);

export const StyledSingleCell = styled.div`
  width: 100%;
  padding: 8px;
  border: 1px solid red;
`;

export const Disc = ({ status }: CellProps) => (
  <StyledDisc status={status}>
    <DiscInner status={status} />
  </StyledDisc>
);

export const StyledDisc = styled.div<{
  status: CellStatus;
}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 4px;
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
