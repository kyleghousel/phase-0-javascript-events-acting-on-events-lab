const dodger = document.getElementById("dodger");
//const game = document.getElementById("game");

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";
dodger.style.left = "0px";


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360){
    dodger.style.left = `${left + 1}px`;
  } 

  /*
  if (left !== (game.clientWidth - dodger.clientWidth)){
    dodger.style.left = `${left + 1}px`;
  } 
  */
};

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  } else if (e.key === "ArrowUp") {
    moveDodgerUp();
  } else if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});
