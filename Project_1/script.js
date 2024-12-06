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

function dispcolor1(){
document.getElementById('show').innerText="RED"
}

function dispout1(){
document.getElementById('show').innerText=""
}

function dispcolor2(){
  document.getElementById('show').innerText="GREEN"
  }
  
  function dispout2(){
  document.getElementById('show').innerText=""
  }


  function dispcolor3(){
    document.getElementById('show').innerText="BLUE"
    }
    
    function dispout3(){
    document.getElementById('show').innerText=""
    }


    function dispcolor4(){
      document.getElementById('show').innerText="ORANGE_RED"
      }
      
      function dispout4(){
      document.getElementById('show').innerText=""
      }