const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const decrementButton = document.getElementById("decrementBtn");

let counterValue = 0;
counterElement.textContent = counterValue;

function incrementCounter() {
  counterValue++;
  counterElement.textContent = counterValue;
}

function decrementCounter() {
  counterValue--;
  counterElement.textContent = counterValue;
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
