class TicTacToe {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.container = document.querySelector('.container');
    this.cnt = 0;
    this.curPlayer = null;
    this.winner = null;
  }
  // td 객체들을 이차원으로 만들어주기 
  createNodeList() {

  }
  playGame(td) {}
  showGame() {}
  winCheck(innerText) {}
  finish() {}
  winshow() {}
}
class Player {
  constructor(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
  }
}
const game = new TicTacToe(
  new Player('핑크', 'pink', 'O'),
  new Player('블루', 'blue', 'X')
);