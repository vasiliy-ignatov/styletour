'use strict'

var MainSlider = {
	el: $('.js-main-slider'),
	options: {
		arrows: false,
		dots: true,
		fade: true
	},
	init: function() {
		return this.el.slick(this.options);
	}
}

$(document).ready(function() {
	MainSlider.init();
});