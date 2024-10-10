const clock = document.querySelector(".display-clock");
setInterval(() => {
  const date = new Date();
  clock.innerHTML = `<p>${date.toLocaleTimeString()}</p>`;
}, 1000);
