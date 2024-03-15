const SliderPortfolioItem = function () {
	if (!$('.js-slider-portfolio-item').length) {
		return;
	}

	const slider = new Swiper('.js-slider-portfolio-item', {
		autoplay: {
			delay: 6000
		},
		autoHeight: true,
		speed: 800,
		pagination: {
			el: '.js-slider-portfolio-item-progress',
			type: 'progressbar',
			progressbarFillClass: 'slider__progressbar-fill',
			renderProgressbar: function (progressbarFillClass) {
				return '<div class="slider__progressbar"><div class="' + progressbarFillClass + '"></div></div>'
			}
		},
		navigation: {
			prevEl: '.js-slider-portfolio-item__arrow-left',
			nextEl: '.js-slider-portfolio-item__arrow-right',
		},
	});

	renderSliderCounter(
		slider,
		'.js-slider-portfolio-item-counter-current',
		'',
		'.js-slider-portfolio-item-counter-total'
	);
}
