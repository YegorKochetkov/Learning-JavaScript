window.onload = function(e) {
	let div = document.querySelector('.fields');
	let matrix = new Matrix(div, 15, 10);
	let snake = new Snake(matrix);
	// console.log(matrix)
	matrix.create();
	matrix.setCell(10, 15, 'fruit');
	snake.show();

	//necessary to redo on eventListener
	window.onkeydown = function(e) {
		switch(e.keyCode) {
			case 37:
				snake.course = 'left';
				break;
			case 38:
				snake.course = 'top';
				break;
			case 39:
				snake.course = 'right';
				break;
			case 40:
				snake.course = 'down';
				break;
		}
	}

	setInterval(() => {
		snake.move();
	}, 400);
}