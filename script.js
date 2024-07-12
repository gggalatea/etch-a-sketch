"use strict";

const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div")
    container.appendChild(squareDiv);
}

container.addEventListener("mouseover", changeDivColor);

function changeDivColor(e) {
    if (e.target.classList.contains("container")) {
        return;
    } else {
        e.target.classList.add("change-color");
    }
}