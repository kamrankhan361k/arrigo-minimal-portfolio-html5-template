const SliderServices = function () {
	const
		tl = gsap.timeline(),
		$target = $('.slider-services[data-os-animation]'),
		$headline = $target.find('.figure-service__headline'),
		$heading = $target.find('.figure-service__header h3'),
		$counters = $target.find('.figure-service__number'),
		$icons = $target.find('.figure-service__icon'),
		splitHeading = splitLines($heading);

	prepare();
	createSlider();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);

		gsap.set($headline, {
			scaleX: 0,
			transformOrigin: 'center center',
		});

		gsap.set($counters, {
			y: 30,
			autoAlpha: 0
		});

		gsap.set($icons, {
			y: 30,
			autoAlpha: 0
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		tl
			.to($headline, {
				scaleX: 1,
				duration: 0.6,
				stagger: 0.05,
				ease: 'expo.inOut'
			})
			.add(animateLines(splitHeading.words), '-=0.6')
			.to($counters, {
				y: 0,
				duration: 0.6,
				stagger: 0.1,
				autoAlpha: 1
			}, '-=0.6')
			.to($icons, {
				y: 0,
				duration: 0.6,
				stagger: 0.1,
				autoAlpha: 1
			}, '-=0.6');

		createOSScene($target, tl);
	}

	function createSlider() {
		if (!$('.js-slider-services').length) {
			return;
		}

		const slider = new Swiper('.js-slider-services', {
			slidesPerView: 4,
			speed: 800,
			autoplay: {
				delay: 5000
			},
			pagination: {
				el: '.js-slider-services-progress',
				type: 'progressbar',
				progressbarFillClass: 'slider__progressbar-fill',
				renderProgressbar: function (progressbarFillClass) {
					return '<div class="slider__progressbar"><div class="' + progressbarFillClass + '"></div></div>'
				}
			},
			navigation: {
				prevEl: '.js-slider-services__arrow-left',
				nextEl: '.js-slider-services__arrow-right',
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
			'.js-slider-services-counter-current',
			'',
			'.js-slider-services-counter-total'
		);
	}
}
