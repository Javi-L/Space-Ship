class Player {
  constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 250;
    this.posY = gameHeight * 0.98 - this.height ;
 
    this.vy = 1;
    this.vx = 1;
    this.gameWidth = gameWidth;

    this.frames = 3;
    this.framesIndex = 0;

    this.keys = keys;
    this.bullets = [];
    this.setListeners()
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image, 
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.posX, 
      this.posY, 
      this.width, 
      this.height
      )
      this.clearBullets()
      this.bullets.forEach(bullet => bullet.draw())
      this.animate(framesCounter)
  }

  move() {
       if (this.posY <= 0) {
      this.vy = 1;
      this.posY = 0;
    } if (this.posY >= 640) {
        this.vy = 1;
        this.posY = 640;
    }
     if (this.posX <= 0) {
        this.vx = 1;
        this.posX = 0;
    } if (this.posX >= 550) {
        this.vx = 1;
        this.posX = 550;
    }
    
    this.bullets.forEach(bullet => bullet.move())
  }

  animate(framesCounter) {
    if(framesCounter % 10 === 0) {
      this.framesIndex++;

      if(this.framesIndex > 2) this.framesIndex = 0;
    }
  }

  setListeners() {
    document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case this.keys.up:
          console.log(this.posY)
          this.posY -= 10;
          this.vy -= 15;
        break;
        case this.keys.right:
          console.log("derecha")
          this.posX +=5;
          this.vx += 10;
        break;
        case this.keys.down:
          console.log(this.posY)
          this.posY +=5;
          this.vy +=10;
        break;
        case this.keys.left:
          console.log("izquierda")
          this.posX -= 5;
          this.vx -= 10;
        break;
        case this.keys.space:
          this.shoot()
      }
    })
  }

  shoot() {
    this.bullets.push(new Bullet(this.ctx, 10, this.posX, this.posY, this.width, this.height, this.posY0))
  }

  clearBullets() {
    this.bullets = this.bullets.filter(bullet => bullet.posX <= this.gameWidth)
  }
}