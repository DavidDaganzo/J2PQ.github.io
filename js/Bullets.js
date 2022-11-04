class Bullets {

  constructor(ctx, canvasSize, developerPosX, developerPosY, developerWidth, developerHeight) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.position = {
      x: developerPosX + developerWidth / 2 - 7.5,
      y: developerPosY
    }
    this.velocity = 4
    this.size = { w: 15, h: 75 }
    this.bulletInstance = new Image();
    this.bulletInstance.src = `./images/bullet.png`;

  }
  draw() {
    this.ctx.drawImage(
      this.bulletInstance,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    )
    this.move()
  }

  move() {
    this.position.y -= this.velocity
  }
}