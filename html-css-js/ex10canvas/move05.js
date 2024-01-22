let canvas = document.getElementById("canvas");
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

function setSpotList(size) {
  for (let i = 0; i < size; i += 1) {
    spotList.push({ x: 45 + i * 100, y: 50, size: 10, color: 'blue' });
  }
}

function drawObj(obj) {
  ctx.beginPath();
  ctx.rect(obj.x, obj.y, obj.size, obj.size);
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  spotList.forEach(spot => drawObj(spot));
  drawObj(player);
}
//---------
init();
draw();