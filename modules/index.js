import { tickIcon, crossIcon } from "./constants.js";

let currentOperation = tickIcon;

// function that helps to create squares
const createBoard = (boardCells, gameBoard) => {
  boardCells.forEach((_, index) => {
    const boardSquare = document.createElement("div");
    boardSquare.classList.add("square");
    boardSquare.dataset.id = index;
    boardSquare.addEventListener("click", checkOperation);
    // checkOperation => cross or tick
    gameBoard.append(boardSquare); // see the diff btw appendChild and append
  });
};

const checkOperation = (e) => {
  const operationImg = document.createElement("img");
  operationImg.classList.add("square-img");
  operationImg.setAttribute("src", currentOperation);
  e.target.append(operationImg);

  currentOperation = currentOperation === tickIcon ? crossIcon : tickIcon;
};

export default createBoard;
