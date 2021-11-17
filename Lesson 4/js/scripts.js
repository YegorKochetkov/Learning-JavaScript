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
			let images = $(slider.images);
			let btnPrev = $(slider.btnPrev);
			let btnNext = $(slider.btnNext);
			let i = 0;

			btnNext.on('click', function() {
				slideImage(1);
			});
	
			btnPrev.on('click', function() {
				slideImage(-1);
			});
	
			function slideImage(direction) {
				images.eq(i).fadeToggle(500);
				i += direction;

				if(i >= images.length){
					i = 0;
				}

				if(i < 0){
					i = images.length - 1;
				}

				images.eq(i).fadeToggle(500);
			}
		}	

	//Animation with jQuery's plugin
	$('.animation .item').on('click', function() {
		$(this).stop(true,true).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
	});
	
	$('.animation .item').one('contextmenu', function(e) {
		e.preventDefault();
		$(this).animate({
			opacity: 0.5,
			height: '-=50px'
		},1000,$.bez([0,1.86,1,-0.67]));
	});

	//Page navigation
	$('nav a').on('click', function(e) {
		e.preventDefault();

		let anchor = $(this).attr('href');
		// console.log(anchor);
		let task = $(anchor);
		// console.log(task);

		$('html, body').animate({
			scrollTop: task.offset().top - 5
		}, 700);
	});

	let upBtn = $('.upBtn');

	function scrollBtn() {
		let top = $(this).scrollTop();
		if(top > 50) {
			upBtn.fadeIn(400);
		} else {
			upBtn.fadeOut(400);
		}
	}

	scrollBtn();

	$(document).on('scroll', scrollBtn);
	
	upBtn.on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
	});
});