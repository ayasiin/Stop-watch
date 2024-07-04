  
  function update(){
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60)% 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let milliseconds = Math.floor(elapsedTime % 1000 / 10)
    hours = String(hours).padStart(2,'0')
    minutes = String(minutes).padStart(2,'0')
    seconds = String(seconds).padStart(2,'0')
    milliseconds = String(milliseconds).padStart(2,'0')
    display.textContent = `${hours}: ${minutes}: ${seconds}: ${milliseconds}`

  }
    
   // script.js

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function updateDisplay() {
  document.getElementById("display").innerHTML = 
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds);
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      milliseconds++;
      if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10);
  }
}

function stop() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

function reset() {
  stop();
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}
