window.onload = function(e) {
	let div = document.querySelector('.fields');
	let matrix = new Matrix(div);
	let snake = new Snake(matrix);
	let fruit = new Fruit(matrix);
	
	matrix.create();
	fruit.show();
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

	let timer = setInterval(() => {
		snake.move();
		if(!fruit.isFruit) {
			fruit.show();
		}

		if(!snake.alive) {
			clearInterval(timer);
			alert('Game over!');
		}
	}, 300);

}