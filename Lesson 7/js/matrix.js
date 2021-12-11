class Matrix {
	constructor(elem, rows = 20, cols = 20) {
		this.elem = elem;
		this.rows = rows;
		this.cols = cols;
		this.cells = [];
	}

	create() {
		for (let i = 0; i < (this.rows * this.cols); i++) {
			let div = document.createElement('div');
			this.elem.appendChild(div);
			this.cells[i] = '';
		}
		//make sure that the field is proportional to 20px in css
		//need to get rid of css
		this.elem.style.width = this.cols * 20 + 'px';
	}

	getCell(x, y) {
		let num = this._calcNum(x, y);
		return this.cells[num];
	}
	
	setCell(x, y, val) {
		let num = this._calcNum(x, y);
		this.cells[num] = val;
		this.elem.children[num].className = val;
	}

	//calculate .cells number by coordinates
	_calcNum(x, y) {
		return ((y -1) * this.cols + x - 1);
	}
}