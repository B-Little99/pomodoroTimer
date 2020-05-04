let timer = document.getElementById("timer");
let start = document.getElementById("startBtn");
let pause = document.getElementById("pauseBtn");
let header = document.querySelector("header");
let wrapper = document.getElementById("secondWrapper");

let wCounter = document.getElementById("workCounter");
let bCounter = document.getElementById("breakCounter");

let status;
let counter = 0;
let workTime = 25*60;
let breakTime = 5*60;
let beginTimer;
let beginBreak;

timer.innerHTML = "25:00";

// header.className -= "red";
// timer.className -= "red";
// start.className -= "redBtn";
// pause.className -= "redBtn";
// wrapper.className -= "redBackground";


function indication(s){
    if (s === "work"){
        header.classList.toggle("red");
        timer.classList.toggle("red");
        start.classList.toggle("redBtn");
        pause.classList.toggle("redBtn");
        wrapper.classList.toggle("redBackground");
    } else if (s === "break") {
        header.classList.toggle("red");
        timer.classList.toggle("red");
        start.classList.toggle("redBtn");
        pause.classList.toggle("redBtn");
        wrapper.classList.toggle("redBackground");
    }
}

// These functions start the work/break sessions for the user.
function startWorkTimer(){
    beginTimer = setInterval(workTimer, 1);
    indication("work");
}

function startBreakTimer(){
    beginBreak = setInterval(breakTimer, 1);
    indication("break");
}

// These two functions are used to pause the timer. Because the counter stays the same, when it starts again it can resume at the time it left off.
function pauseWork(){
    beginTimer = clearInterval(beginTimer);
}

function pauseBreak(){
    beginbreak = clearInterval(beginBreak);
}

function enableStartButton(){
    start.disabled = false;
    start.innerText = "Resume";
    start.classList.remove("notAllowed");
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
        bCounter.innerText = parseInt(bCounter.innerText) + 1;
        counter = 0;
        pauseBreak();
        startWorkTimer();
    }
}

// The workTimer function is used to display the work time and count down, where they will clear the interval, reset the counter and move on to the breakTimer function once reaching 0.
function workTimer() {
    counter++
    timer.innerHTML = convertSeconds((workTime - counter));
    if (counter > 0){
        start.disabled = true;
        start.classList.add("notAllowed");
    }
    if (timer.innerHTML === "00:00"){
        wCounter.innerText = parseInt(wCounter.innerText) + 1;
        counter = 0;
        pauseWork();
        startBreakTimer();
    }
}

start.addEventListener("click", startWorkTimer);

pause.addEventListener("click", pauseWork);
pause.addEventListener("click", pauseBreak);
pause.addEventListener("click", enableStartButton);




/*
TDL:

Resolve clicking start more than once. Disable start after first click, then change text if you pause it so you can use the same button to resume.

Add class for the different timer: break or work

make it centered in the page


*/