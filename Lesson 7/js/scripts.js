window.onload = function(e) {
	let div = document.querySelector('.fields');
	let matrix = new Matrix(div, 10, 15);
	let snake = new Snake(matrix);
	let fruit = new Fruit(matrix);
	
	matrix.create();
	fruit.showRandom();
	snake.show();

	//necessary to redo on eventListener
	window.onkeydown = function(e) {
		switch(e.keyCode) {
			case 37:
				if(snake.course != 'right') {
					snake.newCourse = 'left';
				}
				break;
			case 38:
				if(snake.course != 'down') {
					snake.newCourse = 'up';
				}
				break;
			case 39:
				if(snake.course != 'left') {
					snake.newCourse = 'right';
				}
				break;
			case 40:
				if(snake.course != 'up') {
					snake.newCourse = 'down';
				}
				break;
		}
	}

	let timer = setInterval(() => {
		snake.move();
		if(!fruit.isExist) {
			fruit.showRandom();
		}

		if(!snake.alive) {
			clearInterval(timer);
			alert('Game over!');
		}
	}, 300);

}