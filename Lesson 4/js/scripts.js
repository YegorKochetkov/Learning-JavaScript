$(function() {
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
});