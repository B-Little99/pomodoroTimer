let timer = document.getElementById("timer");
let start = document.getElementById("startBtn");
let stop = document.getElementById("stopBtn");
let counter = 0;
let workTime = 25*60;
let breakTime = 5*60;
let beginTimer;
let beginBreak;

timer.innerHTML = "00:00";

// These functions start the work/break sessions for the user.
function startWorkTimer(){
    beginTimer = setInterval(workTimer, 1000);
}

function startBreakTimer(){
    beginBreak = setInterval(breakTimer, 1000)
}

// These two functions are used to stop the timer. It gives the impression of pausing it though, because the counter stays the same, which means when it starts again it can resume at the time it left off.
function stopWork(){
    beginTimer = clearInterval(beginTimer);
}

function stopBreak(){
    beginbreak = clearInterval(beginBreak);
}

// The convertSeconds function takes in the total seconds of the current time and converts it to a format that is displayed using a template literal.
function convertSeconds(s){
    let minutes = Math.floor(s / 60);
    let seconds = s % 60;

    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    let time = `${minutes}:${seconds}`;
    return time;
}

// The breakTimer function is used to display the break time and count down, where they will clear the interval, reset the counter and move on to the workTimer function once reaching 0.
function breakTimer() {
    counter++
    timer.innerHTML = convertSeconds((breakTime - counter));
    if (timer.innerHTML === "00:00"){
        counter = 0;
        stopBreak();
        startWorkTimer();
    }
}

// The workTimer function is used to display the work time and count down, where they will clear the interval, reset the counter and move on to the breakTimer function once reaching 0.
function workTimer() {
    counter++
    timer.innerHTML = convertSeconds((workTime - counter));
    if (timer.innerHTML === "00:00"){
        counter = 0;
        stopWork();
        startBreakTimer();
    }
}

start.addEventListener("click", startWorkTimer);

stop.addEventListener("click", stopWork);
stop.addEventListener("click", stopBreak)