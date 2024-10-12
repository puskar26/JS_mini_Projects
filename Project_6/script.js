console.log("Hey!! This is me script.js.");
const display = document.querySelector(".display");

const track = window.addEventListener("keydown", (e) => {
  display.innerHTML = `
  <table
      style="
        table-layout: fixed;
        border: 2px solid purple;
        padding: 5px;
        text-align: center;
        border-collapse: collapse;
      "
    >
      <thead style="background-color: rgb(255, 251, 251)">
        <th style="padding: 15px; letter-spacing: 1px">Key</th>
        <th style="padding: 15px; letter-spacing: 1px">Key Code</th>
        <th style="padding: 15px; letter-spacing: 1px">Code</th>
      </thead>
      <tbody>
        <tr style="background-color: magenta">
          <td style="padding: 15px; letter-spacing: 1px">${
            e.key === " " ? "Space" : e.key
          }</td>
          <td style="padding: 15px; letter-spacing: 1px">${e.keyCode}</td>
          <td style="padding: 15px; letter-spacing: 1px">${e.code}</td>
        </tr>
      </tbody>
    </table>
  `;
});
