class Mothership {
    constructor(ctx, width, height, image, gameWidth, gameHeight, posX, posY, maxPosX, healthMShip) {
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
  
      this.interval = setInterval(() => {
        this.randomY = Math.floor(Math.random() * 300);
      }, 1000);
      this.healthMShip = healthMShip;
      this.barLifeMShip = new Health(this.ctx, 12, 45, "#9C6177", 10, 43, "#CB3211", 300);
  
      this.vy = 3;
      this.vx = 3;
      this.bulletsMShip = [];
  
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
      this.bulletsMShip.forEach(bullet => bullet.draw());
      this.barLifeMShip.draw();
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
  
      this.bulletsMShip.forEach(bullet => bullet.move());
    }
  
    shoot() {
      this.bulletsMShip.push(new Bullet(this.ctx, this.posX, this.posY, this.width, this.height, "images/laserRed16.png", 8, 150, 108));
      Game.playerDamagedByMShip();
    }
  
    clearBullets() {
      this.bulletsMShip = this.bulletsMShip.filter(bullet => bullet.posY <= 800);
    }
  }