class Bullet {
  constructor(ctx, type, playerX, playerY, playerWidth, playerHeight, imgSou) {
    this.ctx = ctx;
    this.posX = playerX + playerWidth / 2.4;
    this.posY = playerY + playerHeight / 2;
    this.playerHeight = playerHeight;
    this.img = new Image();
    this.img.src = imgSou;

    if (type === "player") {
      this.vy = -15;
      this.width = 9;
      this.height = 37;
    } else if (type === "mothership") {
      this.vy = 15;
      this.width = 26;
      this.height = 108;
    }
  }

  draw() {
    this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
  }

  move() {
    this.posY += this.vy;
  }
}
