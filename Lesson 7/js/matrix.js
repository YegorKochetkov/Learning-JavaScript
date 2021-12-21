class Matrix {
	constructor(elem, rows = 18, cols = 18) {
		this.elem = elem;
		this.rows = rows;
		this.cols = cols;
		this.cells = [];
	}

	create() {
		for (let i = 0; i < (this.rows * this.cols); i++) {
			let div = document.createElement('div');

			if(i % this.cols === 0) {
				div.classList.add('row-start');
			}
			div.setAttribute('data-game', '');
			this.elem.appendChild(div);
			this.cells[i] = '';
		}
	}

	getCell(x, y) {
		let num = this._calcNum(x, y);
		return this.cells[num];
	}
	
	setCell(x, y, val) {
		let num = this._calcNum(x, y);
		this.cells[num] = val;
		this.elem.children[num].setAttribute('data-game', val);
	}

	//calculate .cells number by coordinates
	_calcNum(x, y) {
		return ((y -1) * this.cols + x - 1);
	}
}