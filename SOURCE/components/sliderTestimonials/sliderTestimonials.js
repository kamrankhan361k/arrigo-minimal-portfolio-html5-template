const SliderTestimonials = function () {
	const
		tl = gsap.timeline(),
		$target = $('.slider-testimonials[data-os-animation]'),
		$text = $target.find('.slider-testimonials__text'),
		splitTestimonial = splitLines($text);

	prepare();
	createSlider();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitTestimonial.lines);
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		tl.add(animateLines(splitTestimonial.lines, 1, 0.1));

		createOSScene($target, tl);
	}

	function createSlider() {
		if (!$('.js-slider-testimonials').length) {
			return;
		}

		const slider = new Swiper('.js-slider-testimonials', {
			autoHeight: true,
			speed: 800,
			autoplay: {
				delay: 5000
			},
			navigation: {
				prevEl: '.js-slider-testimonials__arrow-prev',
				nextEl: '.js-slider-testimonials__arrow-next'
			},
			pagination: {
				el: '.js-slider-testimonials__dots',
				type: 'bullets',
				bulletElement: 'div',
				clickable: true,
				bulletClass: 'slider__dot',
				bulletActiveClass: 'slider__dot_active'
			},
		});

		renderSliderCounter(
			slider,
			'.js-slider-testimonials-counter-current',
			'slider-testimonials__counter-current',
			'.js-slider-testimonials-counter-total'
		);
	}
}
