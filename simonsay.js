let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started.");
    started = true;
  }

  levelUp();
});

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`); // Find the HTML element with the class matching the random color

  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameseq.push(randColor);
  console.log(gameseq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  // console.log("current level", level);

  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `game over. your score is <b> ${level} <b>. <br>press any key to start the game.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

function btnPress() {
  let btn = this;
  // gameFlash(btn);
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkAns(userseq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
