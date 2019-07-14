class Player {
	constructor(ctx, x, gameHeight, src) {
		this.ctx = ctx
		this.x = x
		this.gameHeight = gameHeight
		this.y = this.gameHeight - 100
		this.image = new Image()
		this.image.src = src

		this.width = 60
		this.height = 140
		this.velX = 5
		this.velY = 1
		this.gravity = 0.5
		this.serListeners()
	}

	draw() {
		this.ctx.drawImage(this.image, this.x, this.y - this.height, this.width, this.height)
	}

	move() {
		this.y += this.velY
		this.velY += this.gravity
		if (this.y > this.gameHeight - 100) {
			this.y = this.gameHeight - 100
			this.velY = 0
		}
	}

	serListeners() {
		document.onkeydown = e => {
			switch (e.keyCode) {
				case 39:
					this.x += this.velX
					break
				case 37:
					this.x -= this.velX
					break
				case 38:
					this.y -= 50
					this.velY -= 10
					break
			}
		}
	}
}
