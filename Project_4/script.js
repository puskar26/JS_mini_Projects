const form = document.querySelector("form");
const display = document.querySelector(".display");
const prevGuess = document.querySelector(".last-guess");
const tryAgain = document.querySelector(".try-again");
const winImage = document.querySelector(".display-image");
tryAgain.style.display = "none";
const input = document.querySelector("#user-number");
let compNumber = Math.floor(Math.random() * 30 + 1);
console.log(compNumber);
let count = 9;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (count === 0) {
    display.innerText = `You lost the game. The number was ${compNumber}.`;
    tryAgainF();
    return;
  } else if (isNaN(input.value)) {
    display.innerText = "Please enter a valid number.";
  } else {
    const playerMove = parseInt(input.value);
    prevGuess.innerText = `Previous Guess: ${playerMove}`;
    if (playerMove === compNumber) {
      display.innerText = `You guessed the right number.`;
      winImage.innerHTML = ` <img src= "1600w-RXDhbgx0JLs.webp" alt="Congratulations Image" width="500">`;
      winImage.style.marginTop = "20px";
      tryAgainF();
    } else {
      display.innerText = `Try again. You have ${count} chanches left.`;
    }
    count -= 1;
  }
});

function tryAgainF() {
  tryAgain.style.display = "block";
  tryAgain.onclick = () => {
    tryAgain.style.display = "none";
    display.innerText = "";
    prevGuess.innerText = "";
    input.value = "";
    compNumber = Math.floor(Math.random() * 50 + 1);
    console.log(compNumber);
    count = 9;
    winImage.innerHTML = "";
  };
}
