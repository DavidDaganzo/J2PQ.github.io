class Developer {
  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.position = {
      x: window.innerWidth / 2 - 50,
      y: window.innerHeight - 130
    },
      this.bullets = []
    this.size = { w: 100, h: 100 },
      this.developerInstance = new Image();
    this.developerInstance.src = './images/Developer.png';
    this.setEventHandlers();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.developerInstance,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    )

    this.bullets.forEach(bullet => {
      bullet.draw(framesCounter)
    })
  }

  setEventHandlers() {
    document.onkeydown = event => {
      switch (event.key) {
        case 'ArrowLeft':
          if (this.position.x > 0) {
            this.position.x -= 20
          }
          break;
        case 'ArrowRight':
          if (this.position.x + this.size.w < this.canvasSize.w) {
            this.position.x += 20
          }
          break;
        case 'ArrowUp':
          if (this.position.y > 0) {
            this.position.y -= 20
          }
          break;
        case 'ArrowDown':
          if (this.position.y + this.size.h < this.canvasSize.h) {
            this.position.y += 20
          }
          break;
        case ' ':
          this.shoot();
          break;
      }
    }
  }
  shoot() {
    this.bullets.push(new Bullets(this.ctx, this.canvasSize, this.position.x, this.position.y, this.size.w, this.size.h))
  }
}