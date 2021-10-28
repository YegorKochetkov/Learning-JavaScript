window.onload = function(e) {
	var products = document.querySelectorAll('.items .item');
	var totalSum = document.querySelector('.total-sum');
	
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
}