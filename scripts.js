let timer = document.getElementById("timer");

let counter = 0;
let workTime = 25*60;
let breakTime = 5*60;
let indicator;

timer.innerHTML = "00:00";


let beginTimer = setInterval(workTimer, 100);
let beginBreak;


function stopWork(){
    clearInterval(beginTimer);
}

function stopBreak(){
    clearInterval(beginBreak);
}


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

    // if (time === "00:00"){
    //     switch(indicator){
    //         case 1:
    //             breakTimer();
    //             break;
    //         case 2:
    //             workTimer();
    //             break;
    //         default:
    //             break;
    //     }
    // } else {
    return time;
    // }
}

function breakTimer() {
    indicator = 2;
    counter++
    timer.innerHTML = convertSeconds((breakTime - counter));
    if (timer.innerHTML === "00:00"){
        stopBreak();
        // workTimer();
        let beginTimer = setInterval(workTimer, 1);
    }
}

function workTimer() {
    indicator = 1;
    counter++
    console.log(timer.innerHTML);
    timer.innerHTML = convertSeconds((workTime - counter));
    if (timer.innerHTML === "00:00"){
        stopWork();
        // breakTimer();
        let beginBreak = setInterval(breakTimer, 1);
    }
}

// function startTimer() {
//     // setInterval(setInterval(workTimer, 1), (workTime * 1000));
// }

// function startBreakTimer() {
// }


// startTimer();

workTimer()