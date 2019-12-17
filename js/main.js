const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
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
      if (this.player.healthPlayer < 17.29) this.gameOver();
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(
      this.ctx,
      120,
      120,
      "images/ship1.png",
      this.width,
      this.height,
      this.playerKeys
    );
    this.mothership = new Mothership(
      this.ctx,
      250,
      290,
      "images/mothership1.png",
      this.width,
      this.height
    );
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.background.draw();
    this.mothership.draw();
    this.player.draw();
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
    this.mothership.move();
  },

  //Recorremos el array de balas de player
  enemyDamaged: function() {
    this.player.bullets.forEach(
      function(bullet) {
        if (
          this.playerAttack(bullet) === true &&
          this.mothership.healthMShip > 11.53
        ) {
          this.mothership.healthMShip -= 11.53;
          this.mothership.barLifeMShip.innerRectW = this.mothership.healthMShip;
          console.log(this.mothership.healthMShip);
        }
      }.bind(this)
    );
  },

  //Comprobamos que las balas aciertan en el enemigo
  playerAttack: function(e) {
    if (
      this.mothership.posX < e.posX + e.width &&
      this.mothership.posX + this.mothership.width > e.posX &&
      this.mothership.posY < e.posY + e.height &&
      this.mothership.posY + this.mothership.height > e.posY
    ) {
      return true;
    }
  },

  //Recorremos el array de balas de enemy
  playerDamaged: function() {
    this.mothership.bulletsEnemy.forEach(
      function(bullet) {
        if (
          this.enemyAttack(bullet) === true &&
          this.player.healthPlayer > 17.3
        ) {
          console.log(this.player.healthPlayer);
          this.player.healthPlayer -= 17.29;
          this.player.barLifePlayer.innerRectW = this.player.healthPlayer;
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

  gameOver: function() {
    clearInterval(this.interval);
  }
};
