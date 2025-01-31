const display = document.getElementById("display");
const timechange = document.getElementById("time");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let time = 0;

function incr(amount){
    time += amount*60*1000;
    let hours = Math.floor(time/(1000*60*60));
    let minutes = Math.floor(time/(1000*60) % 60);
    let seconds = Math.floor(time/1000%60);
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function decr(amount){
    if (time>=amount*60*1000){
        time -= amount*60*1000;
        let hours = Math.floor(time/(1000*60*60));
        let minutes = Math.floor(time/(1000*60) % 60);
        let seconds = Math.floor(time/1000%60);
        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        display.textContent = `${hours}:${minutes}:${seconds}`;
    }else{
        time = 0;
        display.textContent = "00:00:00";
    }
    
    
}


function start(){
    if(!isRunning && time>0){
        startTime = Date.now();
        timer = setInterval(update, 10);
        isRunning = true;
        timechange.style.display = "none";
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isRunning = false;
        time -= elapsedTime;
        timechange.style.display = "block";
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    time = 0
    isRunning = false;
    display.textContent = "00:00:00";
    timechange.style.display = "block";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor((time-elapsedTime)/(1000*60*60));
    let minutes = Math.floor((time-elapsedTime)/(1000*60) % 60);
    let seconds = Math.floor((time-elapsedTime)/1000%60);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}`;

    if ((time-elapsedTime)<=0){
        stop();
        display.textContent = "00:00:00";
    }
}










function toClock() {
    window.location.href = 'https://ansonjia.github.io/Clock-Stopwatch-Timer/';
}

function toStopwatch() {
    window.location.href = 'https://ansonjia.github.io/Clock-Stopwatch-Timer/Stopwatch/';
}

function toTimer(){
    window.location.href = 'https://ansonjia.github.io/Clock-Stopwatch-Timer/Timer/';
}

function openNav() {
    document.getElementById("iconBar").style.width = "90px";
    document.getElementById("iconBar").style.border=  "0.5px solid white"; 
    document.getElementById("open").style.position = "absolute"; 
    document.getElementById("open").style.left = "100px";
  }

  function closeNav() {
    document.getElementById("iconBar").style.width = "0";
    document.getElementById("iconBar").style.border = "none";
    document.getElementById("open").style.display="block"; 
    document.getElementById("open").style.left = "10px";
  }

  let isNavOpen = false; 
  function toggleNav() {
    if (isNavOpen) {
        closeNav();
    } else {
        openNav();
    }
    isNavOpen = !isNavOpen; 
}