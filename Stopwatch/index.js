const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60) % 60);
    let seconds = Math.floor(elapsedTime/1000%60);
    let miliseconds = Math.floor(elapsedTime % 1000 /10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
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