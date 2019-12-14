class Player {
  constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 250;
    this.posY = gameHeight * 0.98 - this.height;
    this.vy = 1;
    this.vx = 1;
    this.gameWidth = gameWidth;

    this.frames = 3;
    this.framesIndex = 0;

    this.keys = keys;
    this.bullets = [];
    this.setListeners();
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
    this.bullets.forEach(bullet => bullet.draw());
  }

  move() {
    if (this.posY <= 0) {
      this.posY = 0;
    }
    if (this.posY >= 640) {
      this.posY = 640;
    }
    if (this.posX <= 0) {
      this.posX = 0;
    }
    if (this.posX >= 550) {
      this.posX = 550;
    }

    this.bullets.forEach(bullet => bullet.move());
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 2) this.framesIndex = 0;
    }
  }

  setListeners() {
    let diagonals = {
      up: false,
      right: false,
      down: false,
      left: false
    };

    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.up:
          diagonals.up = true;
          console.log(diagonals);
          break;
        case this.keys.right:
          diagonals.right = true;
          console.log(diagonals);
          break;
        case this.keys.down:
          diagonals.down = true;
          console.log(diagonals);
          break;
        case this.keys.left:
          diagonals.left = true;
          console.log(diagonals);
      }

      if (diagonals.up && diagonals.right) {
        console.log("diagonal up right");
        console.log(diagonals);
        this.posY -= 15;
        this.vy -= 45;
        this.posX += 15;
        this.vx += 45;
      } else if (diagonals.right && diagonals.down) {
        console.log("diagonal right down");
        console.log(diagonals);
        this.posX += 15;
        this.vx += 45;
        this.posY += 15;
        this.vy += 45;
      } else if (diagonals.down && diagonals.left) {
        console.log("diagonal down left");
        console.log(diagonals);
        this.posY += 15;
        this.vy += 45;
        this.posX -= 15;
        this.vx -= 45;
      } else if (diagonals.left && diagonals.up) {
        console.log("diagonal left up");
        console.log(diagonals);
        this.posX -= 15;
        this.vx -= 45;
        this.posY -= 15;
        this.vy -= 45;
      } else if (diagonals.up) {
        console.log("arriba");
        this.posY -= 15;
        this.vy -= 45;
      } else if (diagonals.right) {
        console.log("derecha");
        this.posX += 15;
        this.vx += 45;
      } else if (diagonals.down) {
        console.log("abajo");
        this.posY += 15;
        this.vy += 45;
      } else if (diagonals.left) {
        console.log("izquierda");
        this.posX -= 15;
        this.vx -= 45;
      }
    });
    document.addEventListener("keyup", e => {
      if (this.keys.up === e.keyCode) {
        diagonals.up = false;
        console.log(diagonals);
      } else if (this.keys.right === e.keyCode) {
        diagonals.right = false;
        console.log(diagonals);
      } else if (this.keys.down === e.keyCode) {
        diagonals.down = false;
        console.log(diagonals);
      } else if (this.keys.left === e.keyCode) {
        diagonals.left = false;
        console.log(diagonals);
      }

      if (this.keys.space === e.keyCode) {
        this.shoot();
        console.log(this.bullets);
        console.log(diagonals);
      }
    });
  }

  shoot() {
    this.bullets.push(
      new Bullet(this.ctx, 10, this.posX, this.posY, this.width, this.height)
    );
  }

  clearBullets() {
    this.bullets = this.bullets.filter(bullet => bullet.posY >= 0);
  }
}
