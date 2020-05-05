'use strict'

$("document").ready(function() {
	console.log('hello world');
});
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