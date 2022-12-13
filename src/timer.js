/* Timer */
var timer = document.createElement('div');
timer.innerHTML = '<input type="text" id="timer-input" placeholder="Enter time in seconds">' +
  '<button id="timer-start">Start</button>' +
  '<button id="timer-stop">Stop</button>' +
  '<div id="timer-display"></div>';
document.body.appendChild(timer);

var timerInput = document.getElementById('timer-input');
var timerStart = document.getElementById('timer-start');
var timerStop = document.getElementById('timer-stop');
var timerDisplay = document.getElementById('timer-display');
var timerInterval;


timerStart.addEventListener('click', function() {
  var time = parseInt(timerInput.value);
  if (isNaN(time)) {
    alert('Please enter a number');
    return;
  }
  timerInterval = setInterval(function() {
    time--;
    timerDisplay.innerHTML = time;
    if (time <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

timerStop.addEventListener('click', function() {
  clearInterval(timerInterval);
});