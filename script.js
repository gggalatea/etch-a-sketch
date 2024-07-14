"use strict";

const container = document.querySelector(".container");

function generateGrid(numOfSquares) {
    for (let i = 0; i < (numOfSquares * numOfSquares); i++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.width = getSquareDivWidth(numOfSquares);
        squareDiv.style.height = getSquareDivHeight(numOfSquares);
        squareDiv.style.border = "1px solid black"; // remove, only here for testing
        squareDiv.classList.add("square-div");
        container.appendChild(squareDiv);
    }
}

function getSquareDivWidth(numOfSquares) {
    return ((getContainerWidth() / numOfSquares) + "px");
}

function getContainerWidth() {
    return (parseInt(document.styleSheets[0].cssRules[3].style.width, 10) - (parseInt(document.styleSheets[0].cssRules[3].style.borderLeftWidth, 10) + parseInt(document.styleSheets[0].cssRules[3].style.borderRightWidth, 10)));
}

function getSquareDivHeight(numOfSquares) {
    return ((getContainerHeight() / numOfSquares) + "px");
}

function getContainerHeight() {
    return (parseInt(document.styleSheets[0].cssRules[3].style.height, 10) - (parseInt(document.styleSheets[0].cssRules[3].style.borderTopWidth, 10) + parseInt(document.styleSheets[0].cssRules[3].style.borderBottomWidth, 10)));
}

generateGrid(16);

container.addEventListener("mouseover", changeSquareDivStyles);

function changeSquareDivStyles(e) {
    if (e.target.classList.contains("container")) {
        return;
    } else {
        changeSquareDivColor(e);
        changeSquareDivOpacity(e);
    }
}

function changeSquareDivColor(e) {
    e.target.style.backgroundColor = `rgb(${getRandomNum(255)} ${getRandomNum(255)} ${getRandomNum(255)})`;
}

function getRandomNum(maxNum) {
    return Math.floor(Math.random() * (maxNum + 1));
}

function changeSquareDivOpacity(e) {
    if (e.target.style.opacity === "1") {
        return;
    } else if (!e.target.style.opacity) {
        e.target.style.opacity = "0";
    }
    const currentOpacity = parseFloat(e.target.style.opacity);
    e.target.style.opacity = `${((currentOpacity * 10) + (0.1 * 10)) / 10}`;
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