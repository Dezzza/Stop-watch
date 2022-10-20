var intervalVariable = undefined;
var timeleft = 0;
var totaltime = 0;
function startTimer () {
  intervalVariable = setInterval(
    updateTime
    , 10
  );
}
function resetTimer(){
  stopTimer();
  timeleft = -10;
  updateTime();
}

function stopTimer(){
  clearInterval(intervalVariable);
}

function updateTime(){
  timeleft = timeleft + 10;
  let timer = document.getElementById("timer");
  let timerms = document.getElementById("timerms");
  let milli = timeleft % 1000;
  timer.innerHTML = Math.floor(timeleft / 1000);
  timerms.innerHTML = Math.floor(milli / 10);
  timer.style.color = "green";
  timerms.style.color = "red";
}