let timer = document.getElementById("timer");
let start = document.getElementById("startBtn");
let pause = document.getElementById("pauseBtn");
let header = document.querySelector("header");
let wrapper = document.getElementById("secondWrapper");

// Used in the table to indicate how much the user has worked
let wCounter = document.getElementById("workCounter");
let bCounter = document.getElementById("breakCounter");

// Variables needed. E.g. the worktime automatically sets the work timer to be 25 minutes and the break time as 5 minutes.
let status = "work";
let counter = 0;
let workTime = 25*60;
let breakTime = 5*60;
let beginTimer;
let beginBreak;

// This sets the initial time so when the user loads the page they see the timer is at 25 minutes.
timer.innerHTML = "25:00";

// This function is used to determine if the colour scheme should change when the status changes.
function indication(){
    if (status === "break"){
        header.className += " red";
        timer.className += " red";
        start.className += " redBtn";
        pause.className += " redBtn";
        wrapper.className += " redBackground";
    } else if (status === "work") {
        header.className -= " red";
        timer.className -= " red";
        start.className -= " redBtn";
        pause.className -= " redBtn";
        wrapper.className -= " redBackground";
    }
}

// These functions start the work/break sessions for the user.
function startWorkTimer(){
    beginTimer = setInterval(workTimer, 1000);
    indication();
}

function startBreakTimer(){
    beginBreak = setInterval(breakTimer, 1000);
    indication();
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
    counter++;
    status = "break";
    timer.innerHTML = convertSeconds((breakTime - counter));
    if (timer.innerHTML === "00:00"){
        bCounter.innerText = parseInt(bCounter.innerText) + 1;
        counter = 0;
        status = "work";
        pauseBreak();
        startWorkTimer();
    }
}

// The workTimer function is used to display the work time and count down, where they will clear the interval, reset the counter and move on to the breakTimer function once reaching 0.
function workTimer() {
    counter++;
    status = "work";
    timer.innerHTML = convertSeconds((workTime - counter));
    if (counter > 0){
        start.disabled = true;
        start.classList.add("notAllowed");
    }
    if (timer.innerHTML === "00:00"){
        wCounter.innerText = parseInt(wCounter.innerText) + 1;
        counter = 0;
        status = "break";
        pauseWork();
        startBreakTimer();
    }
}

// This is used to initiate the functions as before during a break if you resumed you actually restarted the 25 minutes and did not resume your break.
function decideTimer(){
    if (status === "work"){
        startWorkTimer();
    } else if (status === "break"){
        startBreakTimer();
    }
}

start.addEventListener("click", decideTimer);

pause.addEventListener("click", pauseWork);
pause.addEventListener("click", pauseBreak);
pause.addEventListener("click", enableStartButton);
