






















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