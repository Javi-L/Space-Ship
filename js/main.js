const Game = {
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
      // console.log(this.time);
      this.counter ++;
      if (this.time > 2500 && this.counter < 5001) {
        this.time = 0;
      }
      if (this.player.healthPlayer === 0) this.gameOver();

      switch(this.time) {
        case 250: this.enemies.push (new Enemy(this.ctx, 250, 290, "images/mothership1.png", this.width, this.height, 250, 0, 360, "mothership"));
        break;
        case 500: this.enemies.push (new Enemy(this.ctx, 250, 290, "images/mothership2.png", this.width, this.height, 250, 0, 360, "mothership"));
        break;
      }
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 120, 120, "images/ship1.png", this.width, this.height, this.playerKeys);
    this.enemies = [];
    this.generateEnemies()
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.background.draw();
    // this.enemy.draw();
    this.enemies.forEach(enemy => enemy.draw())
    this.player.draw();
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
    // this.enemy.move();
    this.enemies.forEach(enemy => enemy.move())
  },

  generateEnemies: function() {

if (this.enemies.length < 12) {
    for (let i = 0; i < 4; i++) {
      this.posX1 = Math.floor(Math.random() * 500);
      this.posY1 = Math.floor(Math.random() * 400);
      this.enemies.push(new Enemy(this.ctx, 100, 100, "images/enemy1.png", this.width, this.height, this.posX1, this.posY1, 500, "enemy1"));
    }
    }
  },

  //Recorremos el array de balas de player
  enemyDamaged: function() {

    console.log("Damage to enemies")

    // this.player.bullets.forEach(function(bullet) {
    //   this.enemies.childNodes.forEach(function(enemy) {
    //     if (this.playerAttack(bullet) === true && enemy.enemy.healthMShip >= 10) {


    //         console.log(enemy.enemy.healthMShip)
    //         enemy.enemy.healthMShip -= 10;
    //       enemy.enemy.barLifeMShip.innerRectW = enemy.enemy.healthMShip;
    //       console.log(enemy.enemy.healthMShip);
        
          
    //     }
    //   }.bind(this));
    // })
  },


  //Comprobamos que las balas aciertan en el enemigo
  playerAttack: function(e) {
    this.enemies.forEach(function(enemy) {
    if (
      enemy.posX < e.posX + e.width &&
      enemy.posX + enemy.width > e.posX &&
      enemy.posY < e.posY + e.height &&
      enemy.posY + enemy.height > e.posY
    ) {
      // console.log("enemy posX", enemy.posX)
      // console.log("bala player posY", e.posY)
      // console.log("e height", e.height)
      return true;
    }
  })
  },

  //Recorremos el array de balas de enemy
  playerDamaged: function() {
    this.enemy.bulletsEnemy.forEach(
      function(bullet) {
        if (
          this.enemyAttack(bullet) === true &&
          this.player.healthPlayer >=20
        ) {
         
          this.player.healthPlayer -= 20;
          this.player.barLifePlayer.innerRectW = this.player.healthPlayer;
          console.log(this.player.healthPlayer);
        }
      }.bind(this)
    );
  },

  //Comprobamos que las balas aciertan en player
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

  // enemyDestroyed: function() {

  //   }
  // },

  gameOver: function() {
    clearInterval(this.interval);
  }
};
