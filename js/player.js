class Player {
  constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 250;
    this.posY = 640;
    this.vy = 1;
    this.vx = 1;
    this.gameWidth = gameWidth;

    // this.frames = 3;
    // this.framesIndex = 0;

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
    // this.animate(framesCounter);
  }

  move() {
    if (this.posY <= 0) {
      this.posY = 0;
    }
    if (this.posY >= 675) {
      this.posY = 675;
    }
    if (this.posX <= 0) {
      this.posX = 0;
    }
    if (this.posX >= 480) {
      this.posX = 480;
    }

    this.bullets.forEach(bullet => bullet.move());
  }

  // animate(framesCounter) {
  //   if (framesCounter % 10 === 0) {
  //     this.framesIndex++;

  //     if (this.framesIndex > 2) this.framesIndex = 0;
  //   }
  // }

  setListeners() {
    let direction = {
      up: false,
      right: false,
      down: false,
      left: false
    };

    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.up:
          direction.up = true;
          break;
        case this.keys.right:
          direction.right = true;
          break;
        case this.keys.down:
          direction.down = true;
          break;
        case this.keys.left:
          direction.left = true;
          break;
      }

      if (direction.up && direction.right) {
        this.posY -= 15;
        this.vy -= 45;
        this.posX += 15;
        this.vx += 45;
      } else if (direction.right && direction.down) {
        this.posX += 15;
        this.vx += 45;
        this.posY += 15;
        this.vy += 45;
      } else if (direction.down && direction.left) {
        this.posY += 15;
        this.vy += 45;
        this.posX -= 15;
        this.vx -= 45;
      } else if (direction.left && direction.up) {
        this.posX -= 15;
        this.vx -= 45;
        this.posY -= 15;
        this.vy -= 45;
      } else if (direction.up) {
        this.posY -= 15;
        this.vy -= 45;
      } else if (direction.right) {
        this.posX += 15;
        this.vx += 45;
      } else if (direction.down) {
        this.posY += 15;
        this.vy += 45;
      } else if (direction.left) {
        this.posX -= 15;
        this.vx -= 45;
      }
    });
    document.addEventListener("keyup", e => {
      if (this.keys.up === e.keyCode) {
        direction.up = false;
      } else if (this.keys.right === e.keyCode) {
        direction.right = false;
      } else if (this.keys.down === e.keyCode) {
        direction.down = false;
      } else if (this.keys.left === e.keyCode) {
        direction.left = false;
      }
      if (this.keys.space === e.keyCode) {
        this.shoot();
      }
    });
  }

  shoot() {
    this.bullets.push(
      new Bullet(
        this.ctx,
        "player",
        10,
        this.posX,
        this.posY,
        this.width,
        this.height
      )
    );
  }

  clearBullets() {
    this.bullets = this.bullets.filter(bullet => bullet.posY >= 0);
  }
}