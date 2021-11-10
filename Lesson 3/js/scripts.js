function Popup(options) {
	this.modal = document.querySelector(options.modal);
	this.overlay = document.querySelector(options.overlay);

	const popup = this;

	this.open = function(content) {
		popup.modal.innerHTML = content;
		popup.modal.classList.add('open');
		popup.overlay.classList.add('open');
	}
	
	this.close = function() {
		popup.modal.classList.remove('open');
		popup.overlay.classList.remove('open');
	}

	this.overlay.onclick = popup.close;
}

window.onload = function(e) {
//modal window logic
	var p = new Popup({
		modal: '.modal',
		overlay: '.overlay'
	});
	
	document.querySelector('.callme').onclick = function() {
		p.open('form of callback');
	};
	
	document.querySelector('.write').onclick = function() {
		var form = document.querySelector('.for-write-popup');
		p.open(form.innerHTML);
	};

//callback and own library lesson	
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
		this.classList.remove('err');
	});

	jqInputs.on('focus', function() {
		this.classList.add('focus');
	});

	jqInputs.on('blur', function() {
		this.classList.remove('focus');
	});

	$('.items .item').on('click', function() {
		$(this).fade(1000, function() {
			this.style.opacity = 1;
			this.style.display = 'block';
		});
	});
}