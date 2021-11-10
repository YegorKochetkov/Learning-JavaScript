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

window.onload = function() {

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
	
}