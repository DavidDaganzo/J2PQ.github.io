class Background {

  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize,
      this.backgroundPos = { x: 0, y: 0 }
    this.backgroundSize = { w: this.canvasSize.w, h: this.canvasSize.h },
      this.image = new Image(),
      this.image.src = "./images/background.jpg";


  }


  draw() {
    this.ctx.drawImage(
      this.image,
      this.backgroundPos.x,
      this.backgroundPos.y,
      this.backgroundSize.w,
      this.backgroundSize.h);
  }
}

