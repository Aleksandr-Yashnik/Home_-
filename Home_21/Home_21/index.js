const timerElement = document.getElementById("timer");
let timeLeft = 60;

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = timeLeft;
    setTimeout(updateTimer, 1000);
  }
}

updateTimer();