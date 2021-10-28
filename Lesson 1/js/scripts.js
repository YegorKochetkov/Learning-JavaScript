window.onload = function(e) {
	var products = document.querySelectorAll('.items .item');
	var totalSum = document.querySelector('.total-sum');

	var addBtn = document.querySelector('input[name=add]');
	var subtractBtn = document.querySelector('input[name=subtract]');
	var multiplyBtn = document.querySelector('input[name=multiply]');
	var divideBtn = document.querySelector('input[name=divide]');
	var num1 = document.querySelector('input[name=num1]');
	var num2 = document.querySelector('input[name=num2]');
	var result = document.querySelector('.res');
	
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

	addBtn.onclick = function() {
		var res = parseInt(num1.value) + parseInt(num2.value);
		result.innerHTML = res;
		addBtn.disabled = true;
	}

	subtractBtn.onclick = function() {
		var res = parseInt(num1.value) - parseInt(num2.value);
		result.innerHTML = res;
		subtractBtn.disabled = true;
	}

	multiplyBtn.onclick = function() {
		var res = parseInt(num1.value) * parseInt(num2.value);
		result.innerHTML = res;
		multiplyBtn.disabled = true;
	}
	
	divideBtn.onclick = function() {
		var res = parseInt(num1.value) / parseInt(num2.value);
		result.innerHTML = res;
		divideBtn.disabled = true;
	}

	num1.onclick = function() {
		addBtn.disabled = false;
		subtractBtn.disabled = false;
		multiplyBtn.disabled = false;
		divideBtn.disabled = false;
	}

	num2.onclick = function() {
		addBtn.disabled = false;
		subtractBtn.disabled = false;
		multiplyBtn.disabled = false;
		divideBtn.disabled = false;
	}
}