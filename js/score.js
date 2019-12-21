const Score = {
    ctx: undefined,
    score:undefined,
  
    init: function(ctx, score) {
      this.ctx = ctx;
      this.score = score;
    },
  
    draw: function(score) {

        this.ctx.fillStyle = '#1C6177';
        if (score < 10) {    
        this.ctx.fillRect (500, 10, 50, 50);
        this.ctx.clearRect (504, 15, 41, 41)
        } else if (score >= 10 && score < 100) {
          this.ctx.fillRect (500, 10, 64, 50);
          this.ctx.clearRect (504, 15, 55, 41)
        } else if (score >= 100) {
          this.ctx.fillRect (500, 10, 78, 50);
          this.ctx.clearRect (504, 15, 70, 41)
        }
        
        this.ctx.font = "bold 30px Orbitron";
        this.ctx.textAlign = "start";
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText(Math.floor(score), 517, 45);
    }
  }