window.onload = function(e) {
	let width = innerWidth;
	let height = innerHeight; 
	let div = document.querySelector('.fields');
	let scoreDiv = document.querySelector('.score');
	let matrixWidth = parseInt(width / 30);
	let matrixHeight = parseInt(height / 50);
	let matrix = new Matrix(div, matrixHeight, matrixWidth);
	let snake = new Snake(matrix);
	let fruit = new Fruit(matrix);
	let score = 0;
	
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

		if(snake.eaten) {
			score++;
			console.log(score)
			console.log(scoreDiv)
			scoreDiv.innerHTML = `<p class='score'>Score: ${score}</p>`;
		}
	}, 300);

}