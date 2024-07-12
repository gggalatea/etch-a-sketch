"use strict";

const container = document.querySelector(".container");

function generateGrid(numOfSquares, width, height) {
    for (let i = 0; i < (numOfSquares * numOfSquares); i++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.width = width + "px";
        squareDiv.style.height = height + "px";
        squareDiv.style.border = "1px solid black"; // remove, only here for testing
        squareDiv.classList.add("square-div");
        container.appendChild(squareDiv);
    }
}

generateGrid(16, 50, 50);

container.addEventListener("mouseover", changeDivColor);

function changeDivColor(e) {
    if (e.target.classList.contains("container")) {
        return;
    } else {
        e.target.classList.add("change-color");
    }
}