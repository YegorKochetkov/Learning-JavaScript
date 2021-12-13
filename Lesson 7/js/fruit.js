class Fruit {
	constructor(matrix) {
		this.matrix = matrix;
		this.isFruit = false;
	}

	show() {
		let x = Math.floor(Math.random() * (this.matrix.cols - 1 + 1)) + 1;
		let y = Math.floor(Math.random() * (this.matrix.rows - 1 + 1)) + 1;

		this._isFruit();
		if(this.isFruit == false) {
			this.matrix.setCell(x, y,'fruit');
		}
		this.isFruit = false;
	}
	
	_isFruit() {
		for(const i in this.matrix.cells) {
			if(this.matrix.cells[i] == 'fruit') {
				this.isFruit = true;
			}
		}
	}
	
}