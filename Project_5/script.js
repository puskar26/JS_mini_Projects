const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
console.log("I just entered your site..... hehe!");

const hexCode = "0123456789ABCDEF";
let generatedCode = "#";
let changeColor;
start.addEventListener("click", () => {
  changeColor = setInterval(() => {
    for (let i = 0; i < 6; i++) {
      const randNumber = Math.floor(Math.random() * 16);
      const selection = hexCode[randNumber];
      generatedCode += selection;
    }
    document.body.style.backgroundColor = `${generatedCode}`;
    generatedCode = "#";
  }, 1000);
});
stop.addEventListener("click", () => {
  console.log("You clicked stop.");
  document.body.style.backgroundColor = `white`;
  clearInterval(changeColor);
});
