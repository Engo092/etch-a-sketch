const container = document.querySelector(".container");

createGrid(container, 4);

const gridSize = document.querySelector(".gridSize");
const clear = document.querySelector(".clear");
let gridColor = document.querySelector(".color");
gridColor.value = "#000000"

let rainbowMode = false;
const rainbow = document.querySelector(".rainbow");

rainbow.onclick = function() {
    if (rainbowMode == false) {
        rainbowMode = true;
        rainbow.textContent = "Rainbow Mode: On"
    }
    else if (rainbowMode == true) {
        rainbowMode = false;
        rainbow.textContent = "Rainbow Mode: Off"
    };
};

// Code for checking user prompt
gridSize.onclick = function() {
    size = parseInt(prompt("Choose a grid size: (max: 64)"));
    if (isNaN(size)) {
        alert("Please enter a number");
    }
    else if (size < 1) {
        alert("Please enter a positive integer");
    }
    else if (size > 64) {
        alert("Please enter a positive number equal to or below 64")
    }

    else {
        createGrid(container, size);
    }
};

// Clears grid
clear.onclick = function() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
};


function createGrid(container, size) {
    container.innerHTML = " ";
    let squareCount = size * size;
    let squareSize = 600 / size;
    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.width = squareSize + "px";
        square.style.maxWidth = squareSize + "px";
        square.style.height = squareSize + "px";
        container.appendChild(square);
    };
    colorSquare();
};


function colorSquare() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            if (rainbowMode == false) {
            square.style.backgroundColor = gridColor.value;
            }
            else {
                let rgbColor = getRandomColor();
                square.style.backgroundColor = rgbColor;
            };
        });
    });
};

// Got this function from https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function getRandomColor() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};