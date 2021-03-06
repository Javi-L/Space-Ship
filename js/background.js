class Background {
  constructor(ctx, width, height, image, vy) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 0;
    this.posY = 0;

    this.vy = vy;
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    this.ctx.drawImage(this.image, this.posX, this.posY - this.height, this.width, this.height)
  }

  move() {
    this.posY += this.vy;
    this.posY %= this.height;
  }
}