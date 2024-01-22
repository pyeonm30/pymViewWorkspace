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