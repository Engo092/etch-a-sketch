const container = document.querySelector(".container");

createGrid(container, 4);

const gridSize = document.querySelector(".gridSize");
const clear = document.querySelector(".clear");

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

clear.onclick = function() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}


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
    }
    colorSquare();
};


function colorSquare() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "black";
        });
    });
};
