class Enemy {
  constructor(ctx, width, height, image, gameWidth, gameHeight, posX, posY, maxPosX) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX = posX;
    this.posY = posY;
    this.maxPosX = maxPosX;
    // this.type = type;

    this.interval = setInterval(() => {
      this.randomY = Math.floor(Math.random() * 300);
    }, 1000);

    this.healthEnemy = 30;
    // this.healthMShip = healthMShip;
    // console.log("health enemy", this.healthMShip)
    // this.barLifeMShip = new Health(this.ctx, 12, 45, "#9C6177", 10, 43, "#CB3211", 300);

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
    // this.barLifeMShip.draw();
  }

  move() {
    this.posX += this.vx;
    this.posY += this.vy;

    if (this.posX + this.vx > this.maxPosX) {
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
    // this.type;
    // if (this.type === "mothership") {
    // this.bulletsEnemy.push(new Bullet(this.ctx, this.posX, this.posY, this.width, this.height, "images/laserRed16.png", 15, 150, 108));
    // } else if 
    
    // (this.type === "enemy1") {
      this.bulletsEnemy.push(new Bullet(this.ctx, this.posX, this.posY, this.width, this.height, "images/laserGreen1.png", 15, 13, 37));
    // }
    Game.playerDamaged();
  }

  clearBullets() {
    this.bulletsEnemy = this.bulletsEnemy.filter(bullet => bullet.posY <= 800);
  }
}