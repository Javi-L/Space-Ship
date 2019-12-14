class Bullet {
  constructor(ctx, radius, playerX, playerY, playerWidth, playerHeight, floor) {
    this.ctx = ctx;
    this.radius = radius;

    this.posX = playerX + playerWidth / 2;
    this.posY = playerY + playerHeight / 2;
    this.playerHeight = playerHeight;
    this.vy = 1;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.posY -= 15;
    this.vy -= 45;
  }
}