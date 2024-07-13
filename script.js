"use strict";

const container = document.querySelector(".container");

const containerWidth = parseInt(document.styleSheets[0].cssRules[3].style.width, 10) - (parseInt(document.styleSheets[0].cssRules[3].style.borderLeftWidth, 10) + parseInt(document.styleSheets[0].cssRules[3].style.borderRightWidth, 10));
const containerHeight = parseInt(document.styleSheets[0].cssRules[3].style.height, 10) - (parseInt(document.styleSheets[0].cssRules[3].style.borderTopWidth, 10) + parseInt(document.styleSheets[0].cssRules[3].style.borderBottomWidth, 10));

function generateGrid(numOfSquares) {
    const squareDivWidth = (containerWidth / numOfSquares) + "px";
    const squareDivHeight = (containerHeight / numOfSquares) + "px";

    for (let i = 0; i < (numOfSquares * numOfSquares); i++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.width = squareDivWidth;
        squareDiv.style.height = squareDivHeight;
        squareDiv.style.border = "1px solid black"; // remove, only here for testing
        squareDiv.classList.add("square-div");
        container.appendChild(squareDiv);
    }
}

generateGrid(16);

container.addEventListener("mouseover", changeDivColor);

function changeDivColor(e) {
    if (e.target.classList.contains("container")) {
        return;
    } else {
        e.target.classList.add("change-color");
    }
}

const newGridBtn = document.querySelector(".new-grid-btn");

newGridBtn.addEventListener("click", createNewGrid);

function createNewGrid() {
    const numOfSquares = askNumOfSquares();
    if (!numOfSquares) {
        return;
    }
    deleteGrid();
    generateGrid(numOfSquares);
}

function askNumOfSquares() {
    let numOfSquares;
    while (true) {
        numOfSquares = prompt("Please enter the number of squares per side for the new grid (max of 100)");
        
        if (numOfSquares === null) {
            return;
        }

        numOfSquares = +numOfSquares;
        
        if ((Number.isInteger(numOfSquares)) && (numOfSquares > 0) && (numOfSquares <= 100)) {
            break;
        }
        alert("Not a valid number. Please try again");
    }
    return numOfSquares;
}

function deleteGrid() {
    const squareDivs = document.querySelectorAll(".square-div");
    squareDivs.forEach((squareDiv) => {
        squareDiv.remove();
    });
}