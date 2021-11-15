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
});