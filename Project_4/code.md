# SOURCE CODE

## HTML

```html
html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Guess the Number</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Guess the Number</h1>
      <form action="">
        <label for="user-number"></label>
        <input id="user-number" type="text" placeholder="Number between 0-30" />
        <input class="button" type="submit" value="Submit" />
      </form>
      <p class="last-guess"></p>
      <p class="display"></p>
      <button class="button try-again">Try Again</button>
      <div class="display-image"></div>
      <div class="footer">
        Created by <a href="https://www.pushkarniraula.com">Pushkar Niraula</a>
      </div>
    </div>
  </body>
  <script src="script.js"></script>
</html>
```

## CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(225, 238, 249);
}
.container {
  background-color: white;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 9.6px 19.2px;
  font-size: 1em;
  font-weight: 500;
  font-family: "Inter";
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
}

.button:hover {
  border-color: #646cff;
}
input[type="text"] {
  border: 1px solid transparent;
  padding: 9.6px 19.2px;
  background-color: #f9f9f9;
  outline: none;
}
input::placeholder {
  font-family: "Inter";
}
.footer {
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  color: black;
  font-weight: 700;
  padding: 9.6px 19.2px;
  background-color: #f9f9f9;
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
  .button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 7px 15px;
    font-size: 0.9rem;
  }
  a {
    font-weight: 700;
    padding: 7px 15px;
  }
  input[type="text"] {
    padding: 7px 15px;
  }
}
```

## JAVASCRIPT

```javascript
const form = document.querySelector("form");
const display = document.querySelector(".display");
const prevGuess = document.querySelector(".last-guess");
const tryAgain = document.querySelector(".try-again");
const winImage = document.querySelector(".display-image");
tryAgain.style.display = "none";
// console.log(form);
const input = document.querySelector("#user-number");
let compNumber = Math.floor(Math.random() * 50 + 1);
console.log(compNumber);
let count = 9;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (count === 0) {
    display.innerText = "You lost the game";
    tryAgainF();
    return;
  } else if (isNaN(input.value)) {
    display.innerText = "Please enter a valid number.";
  } else {
    const playerMove = parseInt(input.value);
    prevGuess.innerText = `Previous Guess: ${playerMove}`;
    if (playerMove === compNumber) {
      display.innerText = "You guessed the right number.";
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
```
