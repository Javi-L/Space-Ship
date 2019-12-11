const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
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
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();
    }, 1000/this.fps)
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 50, 150, 'images/ship1.png', this.width,this.height, this.playerKeys);
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
  },

  moveAll: function() {
    this.background.move()
    this.player.move()
  },

  gameOver: function() {
    clearInterval(this.interval)
  },
}