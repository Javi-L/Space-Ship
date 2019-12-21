const secondGame = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    time: 0,
    playerKeys: {
      up: 38,
      down: 40,
      left: 37,
      right: 39,
      space: 32
    },
    score: 0,
  
    init: function() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.width = 600;
      this.height = 800;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
  
      this.start();
    },
  
    start: function() {
      this.reset();
      this.interval = setInterval(() => {
        this.clear();
        this.drawAll();
        this.moveAll();
        this.time ++;
        this.counter ++;
        if (this.time > 2500 && this.counter < 5001) {
          this.time = 0;
        }
        if (this.player.healthPlayer === 0) this.gameOver();
  
        switch(this.time) {
          case 500:
          for (let i = 0; i < 4; i++) {
            this.posX1 = Math.floor(Math.random() * 500);
            this.posY1 = Math.floor(Math.random() * 200);
            this.enemies.push(new Enemy(this.ctx, 150, 150, "images/enemy2.png", this.width, this.height, this.posX1, this.posY1, 500, "enemy2", 30)); 
        }
        break;
          case 1000:
          this.enemies.splice(0, this.enemies.length);
          break;
          case 10: this.mShips.push (new Mothership(this.ctx, 250, 290, "images/mothership2.png", this.width, this.height, 250, 0, 360, 300));
          break;
        }
      }, 1000 / this.fps);
    },
  
    reset: function() {
      this.background = new Background(this.ctx, this.width, this.height, "images/background2.jpg", 8);
      this.player = new Player(this.ctx, 120, 120, "images/ship1.png", this.width, this.height, this.playerKeys);
      this.enemies = [];
      this.mShips = [];
      this.generateEnemies()
      this.score = 0;
      Score.init(this.ctx, this.score)
    },
  
    clear: function() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    },
  
    drawAll: function() {
      this.background.draw();
      
      this.enemies.forEach(enemy => enemy.draw());
      this.mShips.forEach(enemy => enemy.draw());
      this.player.draw();
      Score.draw(this.score);
    },
  
    moveAll: function() {
      this.background.move();
      this.player.move();
      this.enemies.forEach(enemy => enemy.move())
      this.mShips.forEach(enemy => enemy.move())
    },
  
    generateEnemies: function() {
  if (this.enemies.length < 12) {
      for (let i = 0; i < 5; i++) {
        this.posX1 = Math.floor(Math.random() * 500);
        this.posY1 = Math.floor(Math.random() * 400);
        this.enemies.push(new Enemy(this.ctx, 100, 100, "images/enemy1.png", this.width, this.height, this.posX1, this.posY1, 500, "enemy1", 20));
       }
      }
    },
  
    mShipDamaged: function() {
    this.player.bullets.forEach(function(bullet) {
        if (this.playerAttackMS(bullet) === true && this.mShips[0].healthMShip >=10) {
          this.mShips[0].healthMShip -= 10;
          console.log(this.mShips[0].healthMShip);
          this.mShips[0].barLifeMShip.innerRectW = this.mShips[0].healthMShip;
          if(this.mShips[0].healthMShip <= 0) {
            this.mShipDestroyed(this.mShips[0]);
            return true;
          }
        }
      }.bind(this)
    );
  },
  
    playerAttackMS: function(e) {
      if (
        this.mShips[0].posX < e.posX + e.width &&
        this.mShips[0].posX + this.mShips[0].width > e.posX &&
        this.mShips[0].posY < e.posY + e.height &&
        this.mShips[0].posY + this.mShips[0].height > e.posY
      ) {
        return true;
      }
    },
  
    enemyDamaged: function() {
      this.player.bullets.forEach(function(bullet) {
        for (i = 0; i < this.enemies.length; i ++) {
          if (this.playerAttack(bullet) === true) {
            this.enemies[i].healthEnemy -= 10;
            if (this.enemies[i].healthEnemy <= 0) {
              this.enemyDestroyed(this.enemies[i]);
              console.log(this.enemies[i].healthEnemy);
              return true;
            }
          }
        }
        }.bind(this)
      );
    },
    
      playerAttack: function(e) {
        if (
          this.enemies[i].posX < e.posX + e.width &&
          this.enemies[i].posX + this.enemies[i].width > e.posX &&
          this.enemies[i].posY < e.posY + e.height &&
          this.enemies[i].posY + this.enemies[i].height > e.posY
        ) {
          return true;
        }
      },
  
    playerDamaged: function() {
  
  for (let i = 0; i < this.enemies.length; i ++) {
      this.enemies[i].bulletsEnemy.forEach(function(bullet) {
          if (this.enemyAttack(bullet) === true && this.player.healthPlayer >=10) {
            this.player.healthPlayer -= 10;
            this.player.barLifePlayer.innerRectW = this.player.healthPlayer;
          }
        }.bind(this));
      }
    },
  
    enemyAttack: function(e) {
      if (
        this.player.posX < e.posX + e.width &&
        this.player.posX + this.player.width > e.posX &&
        this.player.posY < e.posY + e.height &&
        this.player.posY + this.player.height > e.posY
      ) {
        return true;
      }
    },
  
    enemyDestroyed: function(e) {
      if(e === this.enemies[i]) {
        console.log(e)
        this.enemies.splice(i, 1)
        this.score += 50;
      }
      },
  
      mShipDestroyed: function(e) {
        if ( e === this.mShips[0]) {
          this.mShips.splice(0, 1);
          this.score += 500;      
        }
      },
  
    gameOver: function() {
      clearInterval(this.interval);
    }
  };
  