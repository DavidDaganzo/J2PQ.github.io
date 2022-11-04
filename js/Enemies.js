class Enemy {
  constructor(ctx, canvasSize, randomImg) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.velocity = 2
    this.enemyPos = { x: this.canvasSize.w * Math.random(), y: 0 }
    this.enemySize = { w: 100, h: 100 }
    this.randomImg = randomImg
    this.enemyImg = ['Angular', 'Bootstrap', 'CSS', 'GIT', 'Github', 'HTML', 'Ironhack', 'Javascript', 'MongoDB', 'NodeJS', 'React']


    this.enemyInstance = new Image();
    this.enemyInstance.src = `./images/Logos/${this.enemyImg[this.randomImg]}.jpg`;

  }

  draw() {
    // this.randomImg = Math.floor(Math.random() * this.enemyImg.length)
    this.ctx.drawImage(
      this.enemyInstance,
      this.enemyPos.x,
      this.enemyPos.y,
      this.enemySize.w,
      this.enemySize.h
    )
    this.move()
  }

  move() {
    this.enemyPos.y += this.velocity
  }


  moveAll() {
    this.enemyArray.forEach(elm => elm.move())
  }
}
