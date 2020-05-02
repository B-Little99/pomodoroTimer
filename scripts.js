let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let reloardBtn = document.getElementById("startBtn");

let counter = 0;
let workTime = 25*60;

function convertSeconds(s){
    let minutes = Math.floor(s / 60);
    let seconds = s % 60;

    if (seconds < 10){
        seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
}

timer.innerHTML = convertSeconds((workTime -counter));

function secondCount() {
    counter++
    timer.innerHTML = convertSeconds((workTime - counter));

}

function starTimer() {
    let secondsTimer = setInterval(secondCount, 1000);
    
}

starTimer();

