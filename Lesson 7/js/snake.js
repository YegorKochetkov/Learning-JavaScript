class Snake {
	constructor(matrix, x = 1, y = 1, course = 'right') {
		this.matrix = matrix;
		this.x = x;
		this.y = y;
		this.course = course;
	}

	show() {
		this.matrix.setCell(this.x, this.y, 'snake');
	}
	
	move() {
		this.matrix.setCell(this.x, this.y, '');
		
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
		if(this.x > this.matrix.cols) this.x = 1;
		if(this.x < 1) this.x = this.matrix.cols;
		if(this.y > this.matrix.rows) this.y = 1;
		if(this.y < 1) this.y = this.matrix.rows;
		// console.log(this.y)
		this.matrix.setCell(this.x, this.y, 'snake');

	}
}