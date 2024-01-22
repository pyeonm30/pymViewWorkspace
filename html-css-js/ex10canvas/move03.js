const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
let key = {
  right: false,
  left: false,
  up: false,
  down: false
}
let player = {
  x: 150,
  y: 150,
  size: 50,
  color: 'blue',
  speed: 5
}
let enemy = {
  x: canvas.width / 2 - 40,
  y: canvas.height / 2 - 40,
  size: 80,
  color: 'green'
}

document.addEventListener("keydown", e => {
  keyHandler(e, true);
})
document.addEventListener("keyup", e => {
  keyHandler(e, false);
})

function keyHandler(e, value) {
  if (e.key === 'ArrowRight') {
    key.right = value;
  } else if (e.key === 'ArrowDown') {
    key.down = value;
  } else if (e.key === 'ArrowUp') {
    key.up = value;
  } else if (e.key === 'ArrowLeft') {
    key.left = value;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObj(enemy);
  drawObj(player);
  movePlayer();
  isCollison();
}

function drawObj(obj) {
  ctx.beginPath();
  ctx.rect(obj.x, obj.y, obj.size, obj.size);
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
}

function movePlayer() {
  if (key.right && player.x < canvas.width - player.size) {
    player.x += player.speed;
  } else if (key.down && player.y < canvas.height - player.size) {
    player.y += player.speed;
  } else if (key.up && player.y > 0) {
    player.y -= player.speed;
  } else if (key.left && player.x > 0) {
    player.x -= player.speed;
  }
}

function inEnemy(px, py) {
  // emeny.x < px < enmeny.x+ emeny.size;
  // emeny.y < py < enmeny.y+ emeny.size;
  return (enemy.x < px && px < enemy.x + enemy.size) &&
    (enemy.y < py && py < enemy.y + enemy.size)
}

function collison() {
  // 플레이어의 왼쪽 상단 모서리에 닿으면 
  if (inEnemy(player.x, player.y)) return true;
  // 플레이어의 오른쪽 상단 모서리에 닿으면 
  else if (inEnemy(player.x + player.size, player.y)) return true;
  // 플레이어의 왼쪽 하단 모서리에 닿으면 
  else if (inEnemy(player.x, player.y + player.size)) return true;
  // 플레이어의 오른쪽 하단 모서리에 닿으면 
  else if (inEnemy(player.x + player.size, player.y + player.size)) return true;
  // 플레이어가 닿지 않으면
  else return false;
}

function isCollison() {
  collison() ? enemy.color = 'red' : enemy.color = 'green';
}

//draw();
setInterval(draw, 10);