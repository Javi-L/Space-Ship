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
    this.randomY = Math.floor((Math.random() * 300));
     }, 1000);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    
    this.vy = 3;
    this.vx = 3;
    this.bulletsEnemies = [];

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
    this.bulletsEnemies.forEach(bullet => bullet.draw());
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
      }
      
       else if (this.posY + this.vy < 0) {
        this.vy *= -1;
    }

    this.bulletsEnemies.forEach(bullet => bullet.move());
  }

  shoot() {
    this.bulletsEnemies.push(
      new Bullet(
        this.ctx,
        "mothership",
        10,
        this.posX,
        this.posY,
        this.width,
        this.height
      )
    );
  }

  clearBullets() {
    this.bulletsEnemies = this.bulletsEnemies.filter(bullet => bullet.posY >= 0);
  }
}
