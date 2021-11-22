$(function() {
	//Own plugin for jQuery that duplicates fields
	$('.duplicate input').on('click', function() {
		$('.form2').duplicate({delimiter: ' + ', cnt: 2});
	});


	//Owl Carousel
	let $items = $('.carousel .item');

	$('.owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:true
			},
			1000:{
				items:5,
				nav:true
			}
		},
		onInitialized: function(){
			autoHeight($items);
		},
		onResized: function(){
			autoHeight($items);
		},
		navText:["&nbsp;prev&nbsp;","&nbsp;next&nbsp;"]
	});

	function autoHeight($items) {
		let max = 0;

		$items.each(function() {
			let h = $(this).find('> div').height();

			if(h > max) {
				max = h;
			}
		});
		$items.css('min-height', max + 'px');
	}
});