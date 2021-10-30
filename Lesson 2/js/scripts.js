window.onload = function(){

	//slider logic 
	var slider1 = new Slider({
		images: '.gallery-1 .photos img',
		btnPrev: '.gallery-1 .buttons .prev',
		btnNext: '.gallery-1 .buttons .next',
		auto: false,
	});

	var slider2 = new Slider({
		images: '.gallery-2 .photos img',
		auto: true,
		rate: 2000,
	});
	
	function Slider(slider){
		this.images = document.querySelectorAll(slider.images);
		this.btnPrev = document.querySelector(slider.btnPrev);
		this.btnNext = document.querySelector(slider.btnNext);
		this.rate = slider.rate || 1500;
		var i = 0;
		var that = this;
		
		this.prev = function(){
			that.images[i].classList.remove('showed');
			i--;

			if(i < 0){
				i = that.images.length - 1;
			}

			that.images[i].classList.add('showed');
		}

		this.next = function(){
			that.images[i].classList.remove('showed');
			i++;

			if(i >= that.images.length){
				i = 0;
			}

			that.images[i].classList.add('showed');
		}
		
		if(slider.auto){
			setInterval(that.next, that.rate);
		}
		else {
			that.btnPrev.onclick = that.prev;
			that.btnNext.onclick = that.next;
		}
	}

	//check form logic
	var inputs = document.querySelectorAll('.check');

	document.querySelector('form').onsubmit = function(e){
		var error = false;

		for(var i = 0; i < inputs.length; i++){
			if(inputs[i].value === ''){
				inputs[i].classList.add('err');
				error = true;
			}
			else{
				inputs[i].classList.remove('err');
			}
		}
		if(error){
			e.preventDefault();
		}
	}
}