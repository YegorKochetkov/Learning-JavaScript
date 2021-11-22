(function($) {
	$.fn.duplicate = function(settings) {
		let defaults = {
			delimiter: ' ',
			cnt: 3
		};

		let inputs = $('.double');
		let buttonDisabled = document.querySelector('.addButton');
		
		let options = $.extend(defaults, settings);
		console.log(inputs.length);
		if(inputs.length <= 6) {
			this.each(function() {
				let elem = $(this);
				let fields = elem.html();
				let out = '';
				
				for (let i = 0; i < options.cnt; i++) {
					out += fields;
					
					if(i < options.cnt - 1) {
						out += options.delimiter;
					}
				}
				elem.html(out);
			});
		}
		if(inputs.length > 3) {
			buttonDisabled.disabled = true;
			buttonDisabled.value = "Is enough!";
		}

		return this;
	};
})(jQuery);