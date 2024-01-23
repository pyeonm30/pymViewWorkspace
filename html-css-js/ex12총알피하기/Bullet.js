class Bullet {
  constructor() {
    this.radius = 7;
    this.speed = 2;
    this.x; // 총알의 시작점
    this.y;
    this.dx; // 총알의 끝점 
    this.dy;
    //캔버스크기 
    this.color = "green";
    this.cwidth = 800;
    this.cheight = 400;
  }

  init() {
    // 동서남북 4개의 방향에서 랜덤으로 총알이 나온다 
    let location = parseInt(Math.random() * 4); // 0.1234 , 1.1234,2.1234,3.1234 // 0 1 2 3 

    // 총알이 캔버스 위에서 시작
    if (location == 0) {
      this.x = Math.random() * (this.cwidth - this.radius); // 0~ 799
      this.y = this.radius;
    } else if (location == 1) {
      // 총알이 캔버스 아래에서 시작
      this.x = Math.random() * (this.cwidth - this.radius);
      this.y = this.cheight - this.radius;
    } else if (location == 2) {
      // 총알이 왼쪽에서 시작 
      this.x = this.radius;
      this.y = Math.random() * (this.cheight - this.radius);

    } else if (location == 3) {
      // 총알이 오른쪽에서 시작 
      this.x = this.cwidth - this.radius;
      this.y = Math.random() * (this.cheight - this.radius);

    }
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

  }

}