class Health {
  constructor(
    ctx,
    posX,
    posY,
    fillStyle,
    rectX,
    rectY,
    fillStyle2,
    healthWidth
  ) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.innerRectH = 21;
    this.fillStyle = fillStyle;
    this.rectX = rectX;
    this.rectY = rectY;
    this.rectW = 350;
    this.rectH = 25;
    this.fillStyle2 = fillStyle2;
    this.innerRectW = healthWidth;
  }

  draw() {
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.fillRect(this.rectX, this.rectY, this.rectW, this.rectH);
    this.ctx.fillStyle = this.fillStyle2;
    this.posX;
    this.posY;
    this.innerRectW;
    this.innerRectH;
    this.ctx.fillRect(this.posX, this.posY, this.innerRectW, this.innerRectH);
  }
}
