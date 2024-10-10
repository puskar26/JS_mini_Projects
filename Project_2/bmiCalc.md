# BMI calulator using HTML, CSS and JavaScript

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BMI calculator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>BMI CALCULATOR</h1>
    <div class="container">
      <form action="">
        <span class="height elements">
          <label for="height-ft">Enter Height:</label>
          <input id="height-ft" type="text" placeholder="ft" required />
          <input id="height-in" type="text" placeholder="inches" required />
        </span>
        <span class="weight-content elements">
          <label for="weight">Enter Weight:</label>
          <input id="weight" type="text" placeholder="in Kg" required />
        </span>
        <span class="buttons elements">
          <button class="button style-button" type="button">Calculate</button>
          <button class="reset-button style-button" type="button">Reset</button>
        </span>
      </form>
      <p class="display"></p>
    </div>
    <div class="info">
      <table>
        <caption>
          BMI GUIDE
        </caption>
        <thead>
          <tr>
            <th>BMI value</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Less than 18.4</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25.0 - 39.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>Greater than 40</td>
            <td>Obese</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
  <script src="script.js"></script>
</html>
```

## CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  font-family: "Poppins", serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.4);
}
.elements {
  margin-bottom: 20px;
}
input {
  padding: 8px;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  border-radius: 3px;
}
input::placeholder {
  color: darkgray;
}
.style-button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  font-family: "Poppins", serif;
  cursor: pointer;
  border-radius: 3px;
}
.button {
  background-color: rgb(158, 228, 55);
}
.reset-button {
  background-color: rgb(246, 59, 59);
}

table {
  table-layout: fixed;
  border: 1px solid black;
  border-collapse: collapse;
}
th,
tr,
td {
  padding: 10px 25px;
  text-align: center;
}
caption {
  font-weight: bold;
}
th {
  background-color: #007bff;
  color: white;
}
td {
  font-size: 0.9rem;
}
tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}
tbody tr:nth-child(even) {
  background-color: white;
}
```

## JavaScript

```javascript
const display = document.querySelector(".display");
const button = document.querySelector(".button");
const resetButton = document.querySelector(".reset-button");
const heightFeet = document.querySelector("#height-ft");
const heightInches = document.querySelector("#height-in");
const weight = document.querySelector("#weight");

button.addEventListener("click", () => {
  const feetNumber = parseInt(heightFeet.value);
  const inchNumber = parseInt(heightInches.value);
  const weightNumber = parseInt(weight.value);
  const heightMeters = feetNumber * 0.3048 + inchNumber * 0.0254;
  let BMI = weightNumber / Math.pow(heightMeters, 2);
  BMI = BMI.toFixed(1);
  if (isNaN(BMI)) {
    display.innerText = `Please enter valid values i.e. Numbers only.`;
    display.style.color = "red";
    display.style.fontWeight = "light";
  } else {
    display.innerText = `Your BMI is ${BMI}`;
    display.style.color = "black";
    display.style.fontWeight = "bold";
  }
});
resetButton.addEventListener("click", () => {
  heightFeet.value = "";
  heightInches.value = "";
  weight.value = "";
  display.innerText = "";
});
```
