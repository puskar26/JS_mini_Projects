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
