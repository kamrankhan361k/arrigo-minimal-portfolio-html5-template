function renderSliderCounter(sliderMain, sliderCounter, slideClass, elTotal, sliderSecondary) {
	if (!sliderMain.slides.length) {
		return;
	}

	const
		numOfSlides = sliderMain.slides.length,
		startSlides = sliderMain.params.slidesPerView;

	const counter = new Swiper(sliderCounter, {
		direction: 'vertical',
		simulateTouch: false,
	});

	for (let index = startSlides; index <= numOfSlides; index++) {
		counter.appendSlide('<div class="swiper-slide"><div class="' + slideClass + '">0' + index + '</div></div>');
	}

	$(elTotal).html('0' + numOfSlides);

	sliderMain.controller.control = counter;
	counter.controller.control = sliderMain;

	if (sliderSecondary) {
		sliderSecondary.controller.control = counter;
		counter.controller.control = sliderSecondary;
	}
}
