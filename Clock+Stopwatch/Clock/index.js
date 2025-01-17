const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString
    const year = now.getFullYear();
    const month = months[now.getMonth()];
    const day = now.getDate();
    const whichDay = weekDay[now.getDay()];
    const dayString = `${whichDay}\u202F-\u202F${month}\u202F${day}.\u202F${year}`
    
    document.getElementById("date").textContent = dayString
}

setInterval(updateClock, 1000);


function toClock(){
    window.location.href = '../Clock/index.html';
}

function toStopwatch(){
    window.location.href = '../Stopwatch/index.html';
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
    isNavOpen = !isNavOpen; // Toggle the state
}