"use strict";

const container = document.querySelector(".container");

function generateGrid(numOfSquares) {
    const numOfRows = numOfSquares;
    const numOfColumns = numOfSquares;
    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let i = 0; i < numOfColumns; i++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square-div");
            row.appendChild(squareDiv);
        }
    }
}

generateGrid(16);

container.addEventListener("mouseover", changeSquareDivStyles);

function changeSquareDivStyles(e) {
    if (e.target.classList.contains("container") || e.target.classList.contains("row")) {
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
    const incrementOpacity = 0.1;
    e.target.style.opacity = `${((currentOpacity * 10) + (incrementOpacity * 10)) / 10}`;
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
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    });
}