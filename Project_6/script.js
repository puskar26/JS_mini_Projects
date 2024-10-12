console.log("Hey!! This is me script.js.");
const display = document.querySelector(".display");
console.log(display);
const track = window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === " ") {
    display.innerText = `You pressed Spacebar.`;
  } else if (e.key === "Meta") {
    display.innerText = `You pressed Command on Mac.`;
  } else {
    display.innerText = `You pressed ${e.key}.`;
  }
});
