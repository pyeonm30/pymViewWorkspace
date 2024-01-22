let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let key = { "ArrowRight": false, "ArrowLeft": false, "ArrowUp": false, "ArrowDown": false };
let player = { "x": 375, "y": 600 - 50, "size": 40, "speed": 2, "color": "blue", "img": null };
let enemyList = [];
let spotList = [];
let timer = 0;
let isOver = false;
let playerImg = null;
let poopImg = null;

function init() {
  document.addEventListener("keydown", e => keyHandler(e, true));
  document.addEventListener("keyup", e => keyHandler(e, false));
  setSpotList(8);
  playerImg = new Image();
  playerImg.src = './img/player.png'
  poopImg = new Image();
  poopImg.src = './img/poop.png'

  player.img = playerImg;

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

function drawObj(obj) {
  // ctx.beginPath();
  // ctx.rect(obj.x, obj.y, obj.size, obj.size);
  // ctx.fillStyle = obj.color;
  // ctx.fill();
  // ctx.closePath();
  ctx.drawImage(obj.img, obj.x, obj.y, obj.size, obj.size);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //spotList.forEach(spot => drawObj(spot));
  drawObj(player);
  createEnemyList();
  enemyList.forEach(emeny => drawObj(emeny));

  if (isOver) clearInterval(interval);
  movePlayer();
  moveEnemyList();
  UpdateEnemyList();
  isCollison();


}
// 1초에 랜덤 spot에서 emeny를 3개씩 생성하라 
function createEnemyList() {
  if (timer % 100 == 0) {
    timer = 0;
    for (let i = 0; i < 3; i += 1) {
      let rIdx = parseInt(Math.random() * spotList.length);
      let spot = spotList[rIdx];
      let rSpeed = parseInt(Math.random() * 4) + 1; // 1~4px 
      let enemy = { x: spot.x, y: spot.y, size: 40, speed: rSpeed, color: 'green', 'alive': 1000, img: poopImg }
      enemyList.push(enemy);
    }
  }
  timer += 1;

}

function moveEnemyList() {
  enemyList.forEach(
    enemy => {
      enemy.y += enemy.speed;
      enemy.alive -= 1;
    }
  )
}

function UpdateEnemyList() {
  //alive  <=  0 enemy 배열에서 삭제 
  enemyList = enemyList.filter(emeny => emeny.alive > 0);
}

// function inEnemy(px, py, enemy) {
//   return (enemy.x < px && px < enemy.x + enemy.size) &&
//     (enemy.y < py && py < enemy.y + enemy.size)
// }

// function collison(enemy) {
//   if (inEnemy(player.x, player.y, enemy)) return true;
//   else if (inEnemy(player.x + player.size, player.y, enemy)) return true;
//   else if (inEnemy(player.x, player.y + player.size, enemy)) return true;
//   else if (inEnemy(player.x + player.size, player.y + player.size, enemy)) return true;
//   else return false;
// }
function collison(enemy) {
  if (player.x < enemy.x + enemy.size &&
    player.y < enemy.y + enemy.size &&
    player.x + player.size > enemy.x &&
    player.y + player.size > enemy.y
  ) { return true; }
  return false;
}

function isCollison() {
  //collison() ? enemy.color = 'red' : enemy.color = 'green';
  enemyList.forEach(
    enemy => {
      if (collison(enemy)) {
        enemy.color = 'red'
        isOver = true;
        //clearInterval(interval);
      } else { enemy.color = 'green' }
    });
}


//---------
init();
let interval = setInterval(draw, 10);