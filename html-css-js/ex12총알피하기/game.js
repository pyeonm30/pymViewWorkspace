const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
// 정중앙에 위치시키기
let player = { x: canvas.width / 2 - 25, y: canvas.height / 2 - 25, size: 50, speed: 3 };
let key = {
  ArrowRight: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowDown: false
}
let imgReady = false;

let playerImg = new Image();
playerImg.src = './bug.png';

function init() {
  playerImg.addEventListener("load", () => {
    imgReady = true;
  })
  document.addEventListener("keydown", e => keyHandler(e, true));
  document.addEventListener("keyup", e => keyHandler(e, false));
}

function drawPlayer() {
  ctx.beginPath();
  //이미지객체 , 시작좌표x, y  이미지크기 가로   세로 
  //ctx.rect(player.x, player.y, player.size, player.size);
  ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
  ctx.fill();
  ctx.closePath();
}


function keyHandler(e, value) {
  if (key[e.key] !== undefined) {
    key[e.key] = value;
  }
}

function movePlayer() {
  if (key.ArrowRight && player.x < canvas.width - player.size) {
    player.x += player.speed;
  } else if (key.ArrowDown && player.y < canvas.height - player.size) {
    player.y += player.speed;
  } else if (key.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  } else if (key.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
}


function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!imgReady) return;
  drawPlayer();
  movePlayer();
  // imgReady && drawPlayer();
}

init();
setInterval(render, 10)