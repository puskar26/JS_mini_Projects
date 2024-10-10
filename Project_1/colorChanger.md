# Color Changer using HTML, CSS and JavaScript

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="buttons">
        <h1>Click on any one of the boxes to change the color accordingly.</h1>
        <button id="red" class="appearance bg-color1"></button>
        <button id="green" class="appearance bg-color2"></button>
        <button id="blue" class="appearance bg-color3"></button>
        <button id="orangered" class="appearance bg-color4"></button>
      </div>
    </div>
  </body>
  <script src="script.js"></script>
</html>
```

## CSS

```css
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.appearance {
  width: 150px;
  height: 150px;
  padding: 20px;
  margin-right: 20px;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
}
.appearance:hover {
  filter: contrast(80%);
}
.bg-color1 {
  background-color: red;
}
.bg-color2 {
  background-color: green;
}
.bg-color3 {
  background-color: blue;
}
.bg-color4 {
  background-color: orangered;
}
```

## Javscript Code

```javascript
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
```
