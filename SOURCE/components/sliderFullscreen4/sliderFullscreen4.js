const SliderFullscreen4 = function () {
	createSlider();

	function createSlider() {
		if (!$('.js-slider-fullscreen4').length) {
			return;
		}

		const slider = new Swiper('.js-slider-fullscreen4', {
			slidesPerView: 4,
			speed: 1000,
			autoplay: {
				delay: 5000
			},
			pagination: {
				el: '.js-slider-fullscreen4-progress',
				type: 'progressbar',
				progressbarFillClass: 'slider__progressbar-fill',
				renderProgressbar: function (progressbarFillClass) {
					return '<div class="slider__progressbar"><div class="' + progressbarFillClass + '"></div></div>'
				}
			},
			navigation: {
				prevEl: '.js-slider-fullscreen4-arrow-left',
				nextEl: '.js-slider-fullscreen4-arrow-right',
			},
			mousewheel: {
				eventsTarged: '.page-wrapper',
				eventsTarget: '.page-wrapper',
				sensitivity: 1
			},
			keyboard: {
				enabled: true
			},
			breakpoints: {
				1400: {
					slidesPerView: 4
				},
				991: {
					slidesPerView: 3
				},
				576: {
					slidesPerView: 2
				},
				0: {
					slidesPerView: 1
				}
			}
		});

		renderSliderCounter(
			slider,
			'.js-slider-fullscreen4-counter-current',
			'',
			'.js-slider-fullscreen4-counter-total'
		);
	}
}
