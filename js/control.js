let startCounter;
let info;
let seconds = "00";
let minutes = "00";
let sec = 0;
let min = 0;

function startGame() {
    counter();
    startCounter = setInterval(counter, 1000);
    info = "Game started. Good luck!"
    changeInfo();
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    writeSquares();

    document.getElementById("btnStart").removeAttribute("onclick");
    document.getElementById("btnReset").setAttribute("onclick", "resetGame()");
    document.getElementById("btnStart").classList.toggle("pointerCursor");
    document.getElementById("btnReset").classList.toggle("pointerCursor");
    document.getElementById("btnStart").classList.toggle("display");
    document.getElementById("btnReset").classList.toggle("display");

    squeresCanMove();
}

function resetGame() {
    clearInterval(startCounter);
    info = "Game reseted. Start again!"
    changeInfo();
    resetCounter();
    resetSquares();
    resetOnclick();
    resetCursor();

    document.getElementById("btnStart").setAttribute("onclick", "startGame()");
    document.getElementById("btnReset").removeAttribute("onclick");
    document.getElementById("btnStart").classList.toggle("pointerCursor");
    document.getElementById("btnReset").classList.toggle("pointerCursor");
    document.getElementById("btnStart").classList.toggle("display");
    document.getElementById("btnReset").classList.toggle("display");
    document.getElementById("info").classList.remove("winner");
}

function counter() {
    if (sec < 10) {
        seconds = "0" + sec;
        sec++;
    } else if (sec >= 10 && sec <= 59) {
        seconds = sec;
        sec++;
    } else {
        seconds = "00";
        sec = 1;
        min++;
        if (min < 10) {
            minutes = "0" + min;
        } else if (min >= 10 && min <= 59) {
            minutes = min;
        } else {
            minutes = "00";
            min = 1;
        }
    }

    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
}

function changeInfo() {
    document.getElementById("info").innerHTML = info;
}

function resetCounter() {
    document.getElementById("seconds").innerHTML = "--";
    document.getElementById("minutes").innerHTML = "--";
    seconds = "00";
    minutes = "00";
    sec = 0;
    min = 0;
}