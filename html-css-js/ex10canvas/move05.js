let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let key = { "ArrowRight": false, "ArrowLeft": false, "ArrowUp": false, "ArrowDown": false };
let player = { "x": 375, "y": 375, "size": 50, "speed": 2, "color": "blue" };
let enemyList = [];
let spotList = [];
let timer = 0;
let update = true;

function init() {
  document.addEventListener("keydown", e => keyHandler(e, true));
  document.addEventListener("keyup", e => keyHandler(e, false));
  setSpotList(8);
}

function keyHandler(e, value) {
  if (key[e.key] !== undefined) {
    key[e.key] = value;
  }
}