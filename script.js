const button = document.getElementById("btn"); //same as : document.getElementsByTagName("button")[0];
const currentNum = document.querySelectorAll(".counter-box .current");
const nextNum = document.querySelectorAll(".counter-box .next");
let countInterval;

button.addEventListener("click", function startCounter() {
  const inputNum = parseInt(document.getElementById("in-display").value);
  if (isNaN(inputNum)) {
    alert("Please enter a number");
    clearInterval(countInterval); // This is important for the condition when a counter is running and you entered a wrong input for a new counter
    return;
  } else if (inputNum < 1 || inputNum > 99999) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
  }

  let count = 0;

  // If user clicks on 'Start Counter' button again
  resetNumbers(currentNum, nextNum, 5);

  // Clears the previous interval that was running
  clearInterval(countInterval);

  countInterval = setInterval(() => {
    if (count === inputNum) {
      clearInterval(countInterval);
      alert("Counter has stopped");
      return;
    }
    increaseCount(currentNum, nextNum, 4);
    count++;
  }, 1000);
});

function resetNumbers(currentNum, nextNum, end) {
  for (let i = 0; i < end; i++) {
    currentNum[i].innerText = 0;
    nextNum[i].innerText = 1;
  }
}

function increaseCount(currentNum, nextNum, index) {
  let current = currentNum[index];
  let next = nextNum[index];

  if (current.innerText == 9) {
    increaseCount(currentNum, nextNum, index - 1);
  }

  next.classList.add("animate");

  setTimeout(() => {
    current.innerText = next.innerText;
    next.classList.remove("animate");
    next.innerText = parseInt(next.innerText) + 1;
    if (next.innerText > 9) {
      next.innerText = 0;
    }
  }, 500);
}
