const buttons = document.querySelectorAll(".appearance");
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.id;
    switch (id) {
      case "red":
        body.style.backgroundColor = "red";
        break;
      case "green":
        body.style.backgroundColor = "green";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "orangered":
        body.style.backgroundColor = "orangered";
        break;
      default:
        body.style.backgroundColor = "white";
    }
  });
});
