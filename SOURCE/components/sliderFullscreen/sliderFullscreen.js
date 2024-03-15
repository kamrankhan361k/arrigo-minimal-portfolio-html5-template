const SliderFullscreen1 = function () {
	createSlider();

	function createSlider() {
		if (!$('.js-slider-fullscreen').length) {
			return;
		}

		const
			overlapFactor = 0.5,
			sliderImg = new Swiper('.js-slider-fullscreen__slider-img', {
				autoplay: {
					delay: 5000,
				},
				allowTouchMove: false,
				direction: 'vertical',
				speed: 1000,
				pagination: {
					el: '.js-slider-fullscreen__dots',
					type: 'bullets',
					bulletElement: 'div',
					clickable: true,
					bulletClass: 'slider__dot',
					bulletActiveClass: 'slider__dot_active'
				},
				navigation: {
					prevEl: '.js-slider-fullscreen-arrow-left',
					nextEl: '.js-slider-fullscreen-arrow-right',
				},
				mousewheel: {
					eventsTarged: '.page-wrapper',
					eventsTarget: '.page-wrapper',
					sensitivity: 1
				},
				keyboard: {
					enabled: true
				},
				watchSlidesProgress: true,
				on: {
					progress: function () {
						const swiper = this;

						for (let i = 0; i < swiper.slides.length; i++) {
							const
								slideProgress = swiper.slides[i].progress,
								innerOffset = swiper.width * overlapFactor,
								innerTranslate = slideProgress * innerOffset;

							gsap.set(swiper.slides[i].querySelector('img'), {
								y: innerTranslate,
								transition: swiper.params.speed + 'ms'
							});
						}
					},
					touchStart: function () {
						const swiper = this;

						for (let i = 0; i < swiper.slides.length; i++) {
							gsap.set(swiper.slides[i].querySelector('img'), {
								transition: ''
							});
						}
					},
				}
			});

		const sliderContent = new Swiper('.js-slider-fullscreen__slider-content', {
			speed: 1000,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			allowTouchMove: false,
			breakpoints: {
				991: {
					autoHeight: true
				}
			}
		});

		renderSliderCounter(
			sliderImg,
			'.js-slider-fullscreen__counter-current',
			'',
			'.js-slider-fullscreen__counter-total',
			sliderContent
		);
	}
}
