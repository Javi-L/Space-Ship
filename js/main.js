const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  // framesCounter: 0,
  playerKeys: {
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    space: 32
  },
  score: 0,

  init: function() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = 600;
    this.height = 800;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.start();
  },

  start: function() {
    this.reset()
    this.interval = setInterval(() => {
      // this.framesCounter++;
      this.clear();
      this.drawAll();
      this.moveAll();
    }, 1000/this.fps)
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 120, 120, 'images/ship1.png', this.width, this.height, this.playerKeys);
    this.mothership = new Mothership (this.ctx, 250, 290, 'images/mothership1.png', this.width, this.height);
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.mothership.draw();
  },

  moveAll: function() {
    this.background.move()
    this.player.move()
    this.mothership.move();
  },

  gameOver: function() {
    clearInterval(this.interval)
  },

  isCollision: function() {
    return this.obstacles.some(obs => (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ))
  },
}