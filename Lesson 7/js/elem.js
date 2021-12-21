class Elem {
	constructor(matrix, coordinates) {
		this.matrix = matrix;
		this.coordinates = coordinates;
		this.value = '';
		this.isExist = false;
	}
	/*
	coordinates [[x,y],[x2,y2]...] - snake or wall
	coordinate [x,y] or [x2,y2]...
	*/
	show() {
		for(let coordinate of this.coordinates) {
			this.matrix.setCell(coordinate[0], coordinate[1], this.value);
		}
	}

	showRandom() {
		this._isExist();
		if(!this.isExist) {			
			let x = Math.floor(Math.random() * (this.matrix.cols)) + 1;
			let y = Math.floor(Math.random() * (this.matrix.rows)) + 1;
			let find = this.matrix.getCell(x, y);
			if(find != '') {
				return;
			}
			this.matrix.setCell(x, y, this.value);
		}
		this.isExist = false;
	}

	_isExist() {
		for(let i in this.matrix.cells) {
			if(this.matrix.cells[i] == 'fruit') {
				this.isExist = true;
			}
		}
	}
}