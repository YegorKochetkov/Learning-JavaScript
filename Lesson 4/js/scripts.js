$(function() {
	//Task from lesson 3 with jQuery library
    var inputs = document.querySelectorAll('.form2 .check');
    
    document.querySelector('.form2').onsubmit = function(e){
        var error = false;
        
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value === ''){
                inputs[i].classList.add('err');
                error = true;
            }
        }
        
        if(error){
            e.preventDefault();
        }
    }

	let jqInputs = $('.check');

	jqInputs.on('click', function() {
		$(this).removeClass('err');
	});

	jqInputs.on('focus', function() {
		$(this).addClass('focus');
	});

	jqInputs.on('blur', function() {
		$(this).removeClass('focus');
	});

	$('.items .item').on('click', function() {
		$(this).fadeOut(1000, function() {
			$(this).fadeIn(100);
		});
	});

	//FAQ
	$('.faq .question').on('click', function() {
		let question = $(this);
		let answer = $(this).next();

		question.css('cursor','default');
		$('.faq .question').not(question).css('cursor','pointer');
		$('.faq .answer:visible').not(answer).slideUp(400);
		// answer.slideToggle(400);
		answer.slideDown(400);
	})

	//Slider from lesson 2 with jQuery
		var slider = new Slider({
			images: '.gallery-1 .photos img',
			btnPrev: '.gallery-1 .buttons .prev',
			btnNext: '.gallery-1 .buttons .next',
			auto: false,
		});
			
		function Slider(slider){
			this.images = $(slider.images);
			this.btnPrev = slider.btnPrev;
			this.btnNext = slider.btnNext;
			this.rate = slider.rate || 1500;
			var i = 0;
			var that = this;
			
			this.prev = function(){
				that.images.eq(i).removeClass('showed');
				i--;
	
				if(i < 0){
					i = that.images.length - 1;
				}
	
				that.images.eq(i).addClass('showed');
			}
	
			this.next = function(){
				that.images.eq(i).removeClass('showed');
				i++;
	
				if(i >= that.images.length){
					i = 0;
				}
	
				that.images.eq(i).addClass('showed');
			}
			
			if(slider.auto){
				setInterval(that.next, that.rate);
			}
			else {
				$(this.btnPrev).on('click', function() {that.prev();});
				$(this.btnNext).on('click', function() {that.next();});
			}
		}	
});