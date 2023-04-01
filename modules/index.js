// function that helps to create squares
const createBoard = (boardCells, gameBoard) => {
  boardCells.forEach((_) => {
    const boardSquare = document.createElement("div");
    boardSquare.classList.add("square");
    gameBoard.append(boardSquare); // see the diff btw appendChild and append
  });
};

export default createBoard;
