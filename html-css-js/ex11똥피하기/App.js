import Player from './Player.js';
import Poop from './Poop.js';

class App {
  constructor() {
    this.player = new Player();
    this.poopList = [];
    this.canvas = document.querySelector("#myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.startBtn = document.querySelector("#startBtn");
    this.frame = null;

    for (let i = 0; i < 10; i++) {
      this.poopList.push(new Poop());
    }

    this.startBtn.addEventListener("click", () => {
      this.frame = setInterval(() => {
        this.update();
        this.render();
      }, 15);

    })

  }

  update() {
    this.player.update();
    this.poopList.forEach(x => x.update());

    for (let i = 0; i < this.poopList.length; i++) {
      if (this.poopList[i].checkCollision(this.player)) {
        clearInterval(this.frame);
        alert("게임오버");
        break;
      }
    }
  }

  render() {
    this.ctx.clearRect(0, 0, 400, 600);
    this.player.render(this.ctx);
    this.poopList.forEach(x => x.render(this.ctx));
  }

}

let app = new App();