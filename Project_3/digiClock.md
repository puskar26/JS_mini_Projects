# Digital Clock using HTML, CSS and JavaScript

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Digital Clock</h1>
    <div class="display-clock"></div>
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
  justify-content: center;
  background-color: black;
}
.display-clock {
  font-family: "Courier New", monospace;
  font-size: 80px;
  color: #0ff;
  text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #00ffff, 0 0 40px #00ffff,
    0 0 50px #00ffff, 0 0 60px #00ffff;
  background-color: #2a2a2a;
  padding: 5px 20px;
  border-radius: 10px;
  text-align: center;
}
h1 {
  color: white;
}
```

## JavaScript

```javascript
const clock = document.querySelector(".display-clock");
setInterval(() => {
  const date = new Date();
  clock.innerHTML = `<p>${date.toLocaleTimeString()}</p>`;
}, 1000);
```
