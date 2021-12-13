class Snake {
	constructor(matrix, x = 1, y = 1, course = 'right') {
		this.matrix = matrix;
		this.x = x;
		this.y = y;
		this.course = course;
		this.alive = true;
	}

	show() {
		this.matrix.setCell(this.x, this.y, 'snake');
	}
	
	move() {
		if(!this.alive) {
			return;
		}

		let lastX = this.x;
		let lastY = this.y;
		
		switch(this.course) {
			case 'right':
				this.x++;
				break;
			case 'left':
				this.x--;
				break;
			case 'top':
				this.y--;
				break;
			case 'down':
				this.y++;
				break;
		}
		
		if(!this._isAlive()) {
			this.alive = false;
			return;
		};
		
		this.matrix.setCell(lastX, lastY, '');
		this.matrix.setCell(this.x, this.y, 'snake');
	}
	
	//handle a collision of a snake with a wall
	_isAlive() {
		return (this.x >= 1 && this.x <= this.matrix.cols &&
				this.y >= 1 && this.y <= this.matrix.rows);
		// if(this.x > this.matrix.cols) this.x = 1;
		// if(this.x < 1) this.x = this.matrix.cols;
		// if(this.y > this.matrix.rows) this.y = 1;
		// if(this.y < 1) this.y = this.matrix.rows;
		}
}