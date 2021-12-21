window.onload = function(e) {
	let width = innerWidth;
	let height = innerHeight; 
	let div = document.querySelector('.fields');
	let scoreDiv = document.querySelector('.score');
	let matrixWidth = parseInt(width / 30);
	let matrixHeight = parseInt(height / 40);
	let score = 0;
	
	if(matrixWidth > 25) {
		matrixWidth = 25;
	}

	if(matrixHeight > 25) {
		matrixHeight = 25;
	}

	let matrix = new Matrix(div, matrixHeight, matrixWidth);
	let snake = new Snake(matrix);
	
	matrix.create();
	snake.show();
	(new Fruit(matrix)).showRandom();

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

		if(!snake.alive) {
			clearInterval(timer);
			alert('Game over!');
		}

		if(snake.eaten) {
			score++;
			scoreDiv.innerHTML = `<p class='score'>Score: ${score}</p>`;
			(new Fruit(matrix)).showRandom();
		}
	}, 300);

}