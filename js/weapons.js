class Bullet {
  constructor(
    ctx,
    type,
    radius,
    playerX,
    playerY,
    playerWidth,
    playerHeight /*floor*/
  ) {
    this.ctx = ctx;
    this.radius = radius;

    this.posX = playerX + playerWidth / 2;
    this.posY = playerY + playerHeight / 2;
    this.playerHeight = playerHeight;

    if (type === "player") {
      this.vy = -15;
      console.log("player shoot", this.vy);
    } else if (type === "mothership") {
      this.vy = 15;
      console.log("nodriza shoot", this.vy);
      this.radius = 15;
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.posY += this.vy;
    console.log(this.posY);
  }
}
