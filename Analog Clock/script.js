const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let secPos = sec * 360/60;
let minPos = (min * 360/60) + secPos/60;
let hrPos = (hr * 360/12) + minPos/12;

function runClock() {

  secPos += 6;
  minPos += 1/10;
  hrPos += 1/120;

  HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
}

var interval = setInterval(runClock,1000);
