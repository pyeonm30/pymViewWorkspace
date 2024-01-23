export default class Poop {
  constructor() {
    this.img = new Image();
    this.img.src = './img/poop.png';
    this.img.addEventListener("load", () => {
      this.ready = true;
    });
    this.ready = false;

    this.x = null;
    this.y = null;
    // 크기값 
    this.w = 20;
    this.h = 15;

    this.speed = null;
    this.reset();
  }

  reset() {
    this.y = -40;
    this.x = Math.floor(Math.random() * (400 - this.h * 2)); // 400 캔버스 안에 들어와야되고 20-20 => 40 > 
    this.speed = Math.random() * 5 + 2;
  }

  update() {
    if (!this.ready) return;
    this.y += this.speed;

    if (this.y >= 600) {
      this.reset();
    }
  }

  checkCollision(p) {
    if (p.x < this.x + this.w &&
      p.y < this.y + this.h &&
      p.x + p.w > this.x &&
      p.y + p.h > this.y) {
      return true;
    }
    return false;
  }

  render(ctx) {
    if (!this.ready) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}