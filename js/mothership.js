class Mothership {
  constructor(ctx, width, height, image, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 250;
    this.posY = 300;

    this.vy = 1;
    this.vx = 1;

    this.gameWidth = gameWidth;
    this.bulletsMS = [];
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.clearBullets();
    this.bulletsMS.forEach(bullet => bullet.draw());
  }

  move() {}

  shoot() {}

  clearBullets() {}
}
