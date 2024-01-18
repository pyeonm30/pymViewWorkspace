class Game1To50 {
  constructor() {
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.gameNum = 1;
    this.record = { min: 0, sec: 0, milSec: 0, cnt: 0 };
    this.gameTime = 0;
    this.gameBtn = document.querySelector("#start");
    this.timer = document.querySelector(".timer");
    this.container = document.querySelector(".container");
    this.gameBtn.addEventListener('click', () => {
      this.init();
      this.gameStart();
    })
  }

  init() {
    this.record = { min: 0, sec: 0, milSec: 0, cnt: 0 };
    this.gameBtn.style.display = 'none';
    this.timer.style.opacity = 1;
    // 다시시작할때 recode 제거하기 위해서 붙여줌 
    let recode = document.querySelector('.recode');
    recode && this.timer.classList.remove('recode');
  };
  gameStart() {

    this.gameTime = setInterval(this.setRecord, 10);

    this.setNum();
    let idx = 0;

    this.frontList.forEach((node) => {
      this.nodeList.push(this.createBox(node, idx));
      idx++;
    });
    // console.log(this.nodeList);

    this.nodeList.forEach((div) => {
      div.addEventListener('click', (event) => {
        this.hintNum();
        //console.log(event.target.innerHTML);
        this.checkNum(event.target);
      });
    });

  };
  setRecord = () => {
    let cnt = this.record.cnt++;
    let min = parseInt(cnt / 3600);
    let sec = parseInt(cnt % 3600 / 60);
    let milSec = (cnt % 3600) % 60;

    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    milSec = milSec < 10 ? '0' + milSec : milSec;

    this.timer.innerHTML = `${min}:${sec}:${milSec}`;
    this.record.min = min;
    this.record.sec = sec;
    this.record.milSec = milSec;
  };
  setNum() {
    for (let i = 0; i < 25; i++) {
      this.frontList.push(i + 1);
      this.backList.push(i + 26);
    }
    // console.log(this.frontList);
    // console.log(this.backList);

    for (let i = 0; i < 100; i++) {
      let r = Math.floor(Math.random() * 25);
      let temp = this.frontList[0];
      this.frontList[0] = this.frontList[r];
      this.frontList[r] = temp;

      r = Math.floor(Math.random() * 25);
      temp = this.backList[0];
      this.backList[0] = this.backList[r];
      this.backList[r] = temp;
    }
  };
  createBox(num, idx) {
    const div = document.createElement('div');
    if (num < 10) {
      div.innerHTML = '0' + num;
    } else {
      div.innerHTML = num;
    }
    div.classList.add('box');
    div.setAttribute('data-idx', idx);

    this.container.appendChild(div);
    return div;
  }

  hintNum() {
    const getDiv = this.nodeList.find(
      (div) => this.gameNum == div.innerHTML * 1
    );
    if (!getDiv) return;

    getDiv.classList.add('hint');
    setTimeout(() => {
      getDiv.classList.remove('hint');
    }, 200);
  }

  checkNum(node) {
    if (node.innerHTML * 1 === this.gameNum) {
      if (this.gameNum <= 25) {
        node.innerHTML = this.backList[node.getAttribute('data-idx')];
      } else {
        node.style.opacity = 0;
      }
      this.gameNum++;
    }
    if (this.gameNum > 50) {
      setTimeout(this.reset, 300);
    }
  };
  reset = () => {

    clearInterval(this.gameTime);
    this.container.innerHTML = '';
    this.frontList = [];
    this.backList = [];
    this.gameBtn.style.display = ' block';
    this.gameBtn.innerHTML = '다시 시작';
    this.timer.classList.add('recode');
    this.timer.innerHTML = ` 당신의 기록 <br>${this.record.min}:${this.record.sec}:${this.record.milSec}`;

  };
}

const game = new Game1To50();