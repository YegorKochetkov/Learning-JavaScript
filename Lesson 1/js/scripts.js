window.onload = function(e) {
	var products = document.querySelectorAll('.items .item');
	var totalSum = document.querySelector('.total-sum');

	// var addBtn = document.querySelector('input[name=add]');
	// var subtractBtn = document.querySelector('input[name=subtract]');
	// var multiplyBtn = document.querySelector('input[name=multiply]');
	// var divideBtn = document.querySelector('input[name=divide]');

	var buttons = document.querySelectorAll('.calc input[type=button]');
	var num1 = document.querySelector('input[name=num1]');
	var num2 = document.querySelector('input[name=num2]');
	var result = document.querySelector('.res');

// shop logic
	for(var i = 0; i < products.length; i++) {
		products[i].onclick = function() {
			this.classList.toggle('item-active');
			calcPrice();
		}
	}

	function calcPrice() {
		var price = 0;

		for(var i = 0; i < products.length; i++) {
			if(products[i].classList.contains('item-active')) {
				price += parseInt(products[i].getAttribute('data-price'));
			}
		}
		totalSum.innerHTML = 'Cart: ' + price;
	}

// calc logic
	for(i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function() {
			var operator = this.getAttribute('name');
			calcFunc(operator);
			this.disabled = true;
		}
	}

	function calcFunc(operator) {
		var a = parseInt(num1.value);
		var b = parseInt(num2.value);
		var res;

		switch (operator) {
			case 'add':
				res = a + b;
				break;
			case 'subtract':
				res = a - b;
				break;
			case 'multiply':
				res = a * b;
				break;
			case 'divide':
				res = a / b;
				break;
			}
		result.innerHTML = res;
	}

	// addBtn.onclick = function() {
	// 	var res = parseInt(num1.value) + parseInt(num2.value);
	// 	result.innerHTML = res;
	// 	this.disabled = true;
	// }

	// subtractBtn.onclick = function() {
	// 	var res = parseInt(num1.value) - parseInt(num2.value);
	// 	result.innerHTML = res;
	// 	this.disabled = true;
	// }

	// multiplyBtn.onclick = function() {
	// 	var res = parseInt(num1.value) * parseInt(num2.value);
	// 	result.innerHTML = res;
	// 	this.disabled = true;
	// }
	
	// divideBtn.onclick = function() {
	// 	var res = parseInt(num1.value) / parseInt(num2.value);
	// 	result.innerHTML = res;
	// 	this.disabled = true;
	// }

	num1.oninput = btnEnabled;
	num2.oninput = btnEnabled;
	

	function btnEnabled() {
		for(i = 0; i < buttons.length; i++) {
			buttons[i].disabled = false;
			}
		}
	}