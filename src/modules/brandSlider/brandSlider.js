'use strict'

var BrandSlider = {
	el: $('.js-brand-slider'),
	options: {
		infinite: true,
		slidesToShow: 5,
		centerMode: true,
		variableWidth: true,
		cssEase: 'ease-in-out',
		speed: 500,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					autoplay: true,
					autoplaySpeed: 2000
				}
			}
		]	
	},
	init: function() {
		return this.el.slick(this.options);
	}
}

$(document).ready(function() {
	BrandSlider.init();
});