'use strict'

var SideSlider = {
	el: $('.js-sidebar-slider'),
	options: {
		arrows: false,
		dots: true
	},
	init: function() {
		return this.el.slick(this.options);
	}
}

$(document).ready(function() {
	SideSlider.init();
});