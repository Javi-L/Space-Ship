class Mothership {
  constructor(ctx, width, height, image, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 0;
    this.posY = 0;
    this.randomX = 360;

    this.interval = setInterval(() => {
      this.randomY = Math.floor(Math.random() * 300);
    }, 1000);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.healthMShip = 346;
    this.barLifeMShip = new Health(
      this.ctx,
      12,
      45,
      "#9C6177",
      10,
      43,
      "#CB3211",
      346
    );

    this.vy = 3;
    this.vx = 3;
    this.bulletsEnemy = [];

    this.interval = setInterval(() => {
      this.shoot();
    }, 500);
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
    this.bulletsEnemy.forEach(bullet => bullet.draw());
    this.barLifeMShip.draw();
  }

  move() {
    this.posX += this.vx;
    this.posY += this.vy;

    if (this.posX + this.vx > this.randomX) {
      this.vx *= -1;
    } else if (this.posX + this.vx < 0) {
      this.vx *= -1;
    }

    if (this.posY + this.vy > this.randomY) {
      this.vy *= -1;
    } else if (this.posY + this.vy < 0) {
      this.vy *= -1;
    }

    this.bulletsEnemy.forEach(bullet => bullet.move());
  }

  shoot() {
    this.bulletsEnemy.push(
      new Bullet(
        this.ctx,
        "mothership",
        this.posX,
        this.posY,
        this.width,
        this.height,
        "images/laserRed16.png"
      )
    );
    Game.playerDamaged();
  }

  clearBullets() {
    this.bulletsEnemy = this.bulletsEnemy.filter(bullet => bullet.posY <= 800);
  }
}
