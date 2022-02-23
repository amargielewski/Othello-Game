export type CellStatus = "empty" | "white" | "black";

export const isValidMove = (
  rowIndex: number,
  columnIndex: number,
  board: any,
  player: 1 | 2
) => {
  const allPossibleMoves = [];
  const currentRow = rowIndex;
  const currentColumn = columnIndex;

  if (board[rowIndex][columnIndex] !== 0) return [];

  //right
  const rightArr = [];
  for (let column = currentColumn + 1; column <= 7; column++) {
    const fieldValue = board[currentRow][column];

    if (fieldValue === 0 || board[currentRow][currentColumn + 1] === player)
      break;

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
  for (let column = currentColumn - 1; column >= 0; column--) {
    const fieldValue = board[currentRow][column];

    if (fieldValue === 0 || board[currentRow][currentColumn - 1] === player)
      break;

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
  for (let row = currentRow - 1; row >= 0; row--) {
    const fieldValue = board[row][currentColumn];

    if (fieldValue === 0 || board[currentRow - 1][currentColumn] === player)
      break;

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

    if (fieldValue === 0 || board[currentRow + 1][currentColumn] === player)
      break;

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

  for (let i = 1; i <= Math.min(currentRow, 8 - currentColumn - 1); i++) {
    const fieldValue = board[currentRow - i][currentColumn + i];

    if (fieldValue === 0 || board[currentRow - 1][currentColumn + 1] === player)
      break;

    if (fieldValue === (player === 1 ? 2 : 1)) {
      diagonalTopRight.push({ row: currentRow - i, column: currentColumn + i });
    }
    if (diagonalTopRight.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...diagonalTopRight);
      break;
    }
  }
  //diagonal top-left

  const diagonalTopLeft = [];

  for (let i = 1; i <= Math.min(currentRow, currentColumn); i++) {
    const fieldValue = board[currentRow - i][currentColumn - i];

    if (fieldValue === 0 || board[currentRow - 1][currentColumn - 1] === player)
      break;

    if (fieldValue === (player === 1 ? 2 : 1)) {
      diagonalTopLeft.push({ row: currentRow - i, column: currentColumn - i });
    }
    if (diagonalTopLeft.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...diagonalTopLeft);
      break;
    }
  }

  //diagonal bottom-right

  const diagonalBottomRight = [];

  for (
    let i = 1;
    i <= Math.min(8 - currentRow - 1, 8 - currentColumn - 1);
    i++
  ) {
    const fieldValue = board[currentRow + i][currentColumn + i];

    if (fieldValue === 0 || board[currentRow + 1][currentColumn + 1] === player)
      break;

    if (fieldValue === (player === 1 ? 2 : 1)) {
      diagonalBottomRight.push({
        row: currentRow + i,
        column: currentColumn + i,
      });
    }
    if (diagonalBottomRight.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...diagonalBottomRight);
      break;
    }
  }

  //diagonal bottom-left

  const diagonalBottomLeft = [];

  for (let i = 1; i <= Math.min(8 - currentRow - 1, currentColumn); i++) {
    const fieldValue = board[currentRow + i][currentColumn - i];

    if (fieldValue === 0 || board[currentRow + 1][currentColumn - 1] === player)
      break;

    if (fieldValue === (player === 1 ? 2 : 1)) {
      diagonalBottomLeft.push({
        row: currentRow + i,
        column: currentColumn - i,
      });
    }
    if (diagonalBottomLeft.length > 0 && fieldValue === player) {
      allPossibleMoves.push(...diagonalBottomLeft);
      break;
    }
  }

  console.log(allPossibleMoves);
  return allPossibleMoves;
};

export const getStatusName = (cellValue: number): CellStatus => {
  if (cellValue === 1) return "white";
  if (cellValue === 2) return "black";
  return "empty";
};

export const getFieldColorFromStatus = (status: CellStatus) => {
  if (status === "white") return "#ffffff";
  if (status === "black") return "#000000";
  return "#21a179";
};

export const getFieldShadowColorFromStatus = (status: CellStatus) => {
  if (status === "white") return "#f2f2f2";
  if (status === "black") return "#1c1c1c";
  return "#21a179";
};
