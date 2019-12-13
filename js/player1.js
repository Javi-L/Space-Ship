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
      this.posY = 0;
    } if (this.posY >= 640) {
        this.posY = 640;
    }
     if (this.posX <= 0) {
        this.posX = 0;
    } if (this.posX >= 550) {
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

    let diagonals = {
      up: false,
      right: false,
      down: false,
      left: false,
    }

    document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case this.keys.up:
          console.log("arriba")
          this.posY -= 15;
          this.vy -= 45;
          diagonals.up = true;
        break;
        case this.keys.right:
          console.log("derecha")
          this.posX +=15;
          this.vx += 45;
          diagonals.right = true;
        break;
        case this.keys.down:
            console.log("abajo")
          this.posY +=15;
          this.vy +=45;
          diagonals.down = true;
        break;
        case this.keys.left:
            console.log("izquierda")
          this.posX -= 15;
          this.vx -= 45;
          diagonals.left = true;
      }

         if (diagonals.up && diagonals.right) {
        console.log("diagonal up right")
        this.posY -= 15;
        this.vy -= 45;
        this.posX +=15;
        this.vx += 45;
      } else if (diagonals.right && diagonals.down) {
        console.log("diagonal up down")
        this.posX +=15;
        this.vx += 45;
        this.posY +=15;
        this.vy +=45;
      } 
      
      else if (diagonals.down && diagonals.left) {
        console.log("diagonal down left")
        this.posY +=15;
        this.vy +=45;
        this.posX -= 15;
        this.vx -= 45;
      } 
      
      else if (diagonals.left && diagonals.up) {
        console.log("diagonal left up")
        this.posX -= 15;
        this.vx -= 45;
        this.posY -= 15;
        this.vy -= 45;
      }
    })
    
    document.addEventListener('keyup', (e) => {
      if (this.keys.up === e.keyCode) {
        diagonals.up = false;
      } else if (this.keys.right === e.keyCode) {
        diagonals.right = false;
      } else if (this.keys.down === e.keyCode) {
        diagonals.down = false;
      } else if (this.keys.left === e.keyCode) {
        diagonals.left = false;
      } else if (this.keys.space === e.keyCode) {
        diagonals.space = false;
      }
      if (this.keys.space === e.keyCode) {
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