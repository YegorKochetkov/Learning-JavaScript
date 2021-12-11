window.onload = function(e) {
	let div = document.querySelector('.fields');
	let matrix = new Matrix(div);
	let snake = new Snake(matrix);
	// console.log(matrix)
	matrix.create();
	matrix.setCell(10, 15, 'fruit');
	snake.show();

	setInterval(() => {
		snake.move('down');
	}, 400);
}