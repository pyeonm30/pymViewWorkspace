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
  color: 'blue'
}

let enemy = {
  x: canvas.width / 2 - 40,
  y: canvas.height / 2 - 40,
  size: 80,
  color: 'green'
}