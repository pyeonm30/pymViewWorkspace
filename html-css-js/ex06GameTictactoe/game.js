class TicTacToe {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.container = document.querySelector('.container');
    this.sBtn = document.querySelector('#start');
    this.off = document.querySelector('.off');
    this.cnt = 0;
    this.curPlayer = null;
    this.winner = null;
    this.nodeList = []; // td 태그 객체들이 들어가는 배열 

    this.turnFinsh = false;
    this.sBtn.addEventListener('click', () => {
      this.showGame();
      this.createNodeList();
      this.curPlayer = p1;
      this.cnt = 0;
      this.winner = null;
    })
  }
  // td 객체들을 이차원으로 만들어주기 
  createNodeList() {
    this.nodeList = [];
    const tds = document.querySelectorAll('td'); // [td,td,td,td,td,td,td,td,td]
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      let arr = [tds[cnt], tds[cnt + 1], tds[cnt + 2]];
      cnt += 3;
      this.nodeList.push(arr);
    }

    this.nodeList.forEach((tds) => {
      tds.forEach((td) => {
        td.addEventListener('click', (event) => {
          if (!this.turnFinsh) {
            this.playGame(event.target);
          }
        });
      });
    });
  }
  playGame(td) {
    if (td.innerHTML) return;
    this.turnFinsh = true;
    td.innerHTML = this.curPlayer.shape;
    td.classList.add(this.curPlayer.color);
    this.winCheck(this.curPlayer.shape);
    this.cnt += 1;

    if (!this.winner && this.cnt === 9) {
      return this.finish();
    }

  }
  showGame() {
    this.container.innerHTML = `
    <table>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>`;
  }
  winCheck(text) {
    let cDown = 0;
    let cUp = 0;
    for (let y = 0; y < 3; y += 1) {
      let yCnt = 0;
      let xCnt = 0;
      for (let x = 0; x < 3; x += 1) {
        let xText = this.nodeList[y][x].innerHTML;
        let yText = this.nodeList[x][y].innerHTML;

        text == xText && xCnt++;
        text == xText && x == y && cDown++;
        text == yText && yCnt++;
        text == yText && x == 3 - 1 - y && cUp++;

        // if (text == xTest) {
        //   xCnt++;
        //   if (x == y) {
        //     cDown++;
        //   }
        // }
        // if (text == yTest) {
        //   yCnt++;
        //   if (x == 3 - 1 - y) {
        //     cUp++;
        //   }
        // }
        // console.log(xCnt, " ", yCnt, " ", cDown, " ", cUp);

        if (yCnt == 3 || xCnt == 3 || cDown == 3 || cUp == 3) {
          this.winner = this.curPlayer;
          return this.finish();
        }
      }
    }
    this.turnFinsh = false;
    if (!this.winner) { this.curPlayer = this.curPlayer == this.p1 ? this.p2 : this.p1; }
  }
  finish = () => {
    setTimeout(() => {
      this.winshow();
    }, 1000)
  }
  winshow() {
    this.container.innerHTML = '';
    this.off.classList.remove('off');
    // 게임 메서지 활성화
    this.off.classList.add('active');
    if (!this.winner && this.cnt === 9) {
      this.off.innerHTML = ` 무승부 게임종료!`;
    } else {
      this.off.innerHTML = `${this.winner.name} 님이 게임 승리! <br> 게임종료`;
    }
    this.sBtn.innerHTML = '게임 다시시작';
    this.container.appendChild(this.off);
    this.container.appendChild(this.sBtn);
  }
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