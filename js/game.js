const squares = [[1, 2, 3], [4, 9, 5], [6, 7, 8]];

function writeSquares() {
    shuffleSquares();

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            const indexId = "r" + x + "c" + y;
            document.getElementById(indexId).innerHTML = squares[x][y];
        }
    }
    resetEmpty();
    addEmpty();
}

function shuffleSquares() {

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            let m = Math.floor(Math.random() * 3);
            let n = Math.floor(Math.random() * 3);

            let temp = squares[x][y];
            squares[x][y] = squares[m][n];
            squares[m][n] = temp;
        }
    }
}

function resetSquares() {

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            const indexId = "r" + x + "c" + y;
            document.getElementById(indexId).innerHTML = "X";
        }
    }

    resetEmpty();
    document.getElementById("r1c1").classList.add("empty");
}

function resetEmpty() {
    let square = document.getElementsByClassName("square");

    for (let i = 0; i < square.length; i++) {
        square[i].classList.remove("empty");
    }
}

function resetOnclick() {
    let square = document.getElementsByClassName("square");

    for (let i = 0; i < square.length; i++) {
        square[i].removeAttribute("onclick");
    }
}

function resetCursor() {
    let square = document.getElementsByClassName("square");

    for (let i = 0; i < square.length; i++) {
        square[i].classList.remove("pointerCursor");
    }
}

function addEmpty() {
    document.getElementById(findEmpty()).classList.add("empty");
}

function findEmpty() {
    let emptySquare;

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (squares[x][y] == 9) {
                emptySquare = "r" + x + "c" + y;
            }
        }
    }
    return emptySquare;
}

//logic of game
function squeresCanMove() {
    resetOnclick();
    resetCursor();

    let emptyX;
    let emptyY;

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (squares[x][y] == 9) {
                emptyX = x;
                emptyY = y;
            }
        }
    }

    let x1, y1, x2, y2, x3, y3, x4, y4;

    x1 = emptyX;
    y1 = emptyY + 1;
    x2 = emptyX;
    y2 = emptyY - 1;
    x3 = emptyX + 1;
    y3 = emptyY;
    x4 = emptyX - 1;
    y4 = emptyY;

    if (x1 >= 0 && x1 <= 2 && y1 >= 0 && y1 <= 2) {
        let squareCanMove = "r" + x1 + "c" + y1;
        document.getElementById(squareCanMove).setAttribute("onclick", "move(this)");
        document.getElementById(squareCanMove).classList.toggle("pointerCursor");
    }

    if (x2 >= 0 && x2 <= 2 && y2 >= 0 && y2 <= 2) {
        let squareCanMove = "r" + x2 + "c" + y2;
        document.getElementById(squareCanMove).setAttribute("onclick", "move(this)");
        document.getElementById(squareCanMove).classList.toggle("pointerCursor");
    }

    if (x3 >= 0 && x3 <= 2 && y3 >= 0 && y3 <= 2) {
        let squareCanMove = "r" + x3 + "c" + y3;
        document.getElementById(squareCanMove).setAttribute("onclick", "move(this)");
        document.getElementById(squareCanMove).classList.toggle("pointerCursor");
    }

    if (x4 >= 0 && x4 <= 2 && y4 >= 0 && y4 <= 2) {
        let squareCanMove = "r" + x4 + "c" + y4;
        document.getElementById(squareCanMove).setAttribute("onclick", "move(this)");
        document.getElementById(squareCanMove).classList.toggle("pointerCursor");
    }
}

function move(square) {
    //find id and index in squares array of empty square
    let emptySquare, x1, y1;
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (squares[x][y] == 9) {
                emptySquare = "r" + x + "c" + y;
                x1 = x;
                y1 = y;
            }
        }
    }

    //find index in squares array of clicked square
    let clickedSquare, x2, y2;
    clickedSquare = square.innerText;
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (squares[x][y] == clickedSquare) {
                x2 = x;
                y2 = y;
            }
        }
    }

    //swap innerHTML of clicked square and empty square 
    let temp = document.getElementById(emptySquare).innerHTML;
    document.getElementById(emptySquare).innerHTML = square.innerHTML;
    square.innerHTML = temp;
    square.classList.add("empty");
    document.getElementById(emptySquare).classList.remove("empty");

    //swap index in squares array of clicked square and empty square
    let temp1 = squares[x1][y1];
    squares[x1][y1] = squares[x2][y2];
    squares[x2][y2] = temp1;

    squeresCanMove();
    winner();
}

//check if all numbers are in right order
function winner() {
    let square = document.getElementsByClassName("square");
    let x = [];
    for (let i = 0; i < square.length; i++) {
        x.push(square[i].innerText);
    }
    console.log(x);
    if (x[0] == 1 && x[1] == 2 && x[2] == 3 && x[3] == 4 && x[4] == 5 && x[5] == 6 && x[6] == 7 && x[7] == 8) {
        resetOnclick();
        resetCursor();
        info = "You are Winner!!!";
        changeInfo();
        document.getElementById("info").classList.add("winner");
        clearInterval(startCounter);
    }
}