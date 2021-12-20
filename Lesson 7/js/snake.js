class Snake extends Elem {
	constructor(matrix, coordinates = [[1, 1]], course = 'right') {
		super(matrix, coordinates);
		this.value = 'snake';
		this.course = course;
		this.newCourse = course;
		this.alive = true;
		this.eaten = false;
	}
	
	move() {
		if(!this.alive) {
			return;
		}

		this.eaten = false;
		this.course = this.newCourse;
		let head = this.coordinates[0].slice();
		let lastX = head[0];
		let lastY = head[1];
		
		switch(this.course) {
			case 'right':
				head[0]++;
				break;
			case 'left':
				head[0]--;
				break;
			case 'up':
				head[1]--;
				break;
			case 'down':
				head[1]++;
				break;
		}
		
		if(!this._isAlive(head)) {
			this.alive = false;
			return;
		};
		
		let find = this.matrix.getCell(head[0], head[1]);
		if(find == 'snake') {
			this.alive = false;
			return;
		}

		if(find == 'fruit') {
			this.eaten = true;
		} else {
			let tail = this.coordinates.pop();
			this.matrix.setCell(tail[0], tail[1], '');
		}

		this.coordinates.unshift(head);
		this.matrix.setCell(head[0], head[1], 'snake');
	}
	
	//handle a collision of a snake with a wall
	_isAlive(head) {
		return (head[0] >= 1 && head[0] <= this.matrix.cols &&
				head[1] >= 1 && head[1] <= this.matrix.rows);

		// if(this.x > this.matrix.cols) this.x = 1;
		// if(this.x < 1) this.x = this.matrix.cols;
		// if(this.y > this.matrix.rows) this.y = 1;
		// if(this.y < 1) this.y = this.matrix.rows;
		}
}