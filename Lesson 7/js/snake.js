class Snake {
	constructor(matrix, x = 10, y = 10) {
		this.matrix = matrix;
		this.x = x;
		this.y = y;
	}

	show() {
		this.matrix.setCell(this.x, this.y, 'snake');
	}
	
	move(direction) {
		this.matrix.setCell(this.x, this.y, '');
		switch(direction) {
			case 'right': this.x++;
			break;
			case 'left': this.x--;
			break;
			case 'top': this.y--;
			break;
			case 'down': this.y++;
			break;
		}
		if(this.x > 20) this.x = 1;
		if(this.x < 1) this.x = 20;
		if(this.y > 20) this.y = 1;
		if(this.y < 1) this.y = 20;
		// console.log(this.y)
		this.matrix.setCell(this.x, this.y, 'snake');

	}
}