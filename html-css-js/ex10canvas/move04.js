const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
let key = {
  ArrowRight: false,
  ArrowDown: false,
  ArrowUp: false,
  ArrowLeft: false
}
let player = {
  x: 150,
  y: 150,
  size: 50,
  color: 'blue',
  speed: 5
}

let enemyList = [];


function keyHandler(e, value) {
  if (key[e.key] !== undefined) {
    key[e.key] = value;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  enemyList.forEach(enemy => drawObj(enemy));
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

function setEnemyList(size) {
  for (let i = 0; i < size; i += 1) {
    let enemy = {
      x: 120 + 150 * i,
      y: 300,
      size: 80,
      color: 'green'
    }
    enemyList.push(enemy);
  }

}

function init() {
  setEnemyList(4);
  document.addEventListener("keydown", e => {
    keyHandler(e, true);
  })
  document.addEventListener("keyup", e => {
    keyHandler(e, false);
  })
}


function inEnemy(px, py, enemy) {

  return (enemy.x < px && px < enemy.x + enemy.size) &&
    (enemy.y < py && py < enemy.y + enemy.size)
}

function collison(enemy) {
  if (inEnemy(player.x, player.y, enemy)) return true;
  else if (inEnemy(player.x + player.size, player.y, enemy)) return true;
  else if (inEnemy(player.x, player.y + player.size, enemy)) return true;
  else if (inEnemy(player.x + player.size, player.y + player.size, enemy)) return true;
  else return false;
}

function isCollison() {
  //collison() ? enemy.color = 'red' : enemy.color = 'green';
  enemyList.forEach(enemy => collison(enemy) ? enemy.color = 'red' : enemy.color = 'green');
}


//=========================
init();
setInterval(draw, 10);