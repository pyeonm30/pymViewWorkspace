class Game1To50 {
  constructor() {
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.gameNum = 1;
    this.recode = { min: 0, sec: 0, milSec: 0, cnt: 0 };
    this.gameTime = 0;
    this.gameBtn = document.querySelector("#start");
    this.init();
  }
  init() {
    this.gameBtn.addEventListener('click', () => {

    });

  }
}

const game = new Game1To50();