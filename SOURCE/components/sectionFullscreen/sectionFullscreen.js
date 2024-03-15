const SectionFullscreen4 = function () {
	const $target = $('.section-fullscreen_4[data-os-animation]'),
		tl = gsap.timeline(),
		$headline = $target.find('.slider-fullscreen4__slide-headline'),
		$heading = $target.find('.slider-fullscreen4__slide-header h2'),
		splitHeading = splitLines($heading);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);

		gsap.set($headline, {
			scaleX: 0,
			transformOrigin: 'center center',
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		tl
			.to($headline, {
				duration: 0.6,
				stagger: 0.05,
				scaleX: 1,
				ease: 'expo.inOut'
			})
			.add(animateLines(splitHeading.words), '-=0.6');
	}
}

/* ======================================================================== */
/* sectionFullscreen1 */
/* ======================================================================== */
const SectionFullscreen1 = function () {
	const
		tl = gsap.timeline(),
		$target = $('.section-fullscreen_1[data-os-animation]'),
		$bg = $target.find('.section-fullscreen__inner-bg'),
		$headline = $target.find('.slider-fullscreen__slide-headline'),
		$heading = $target.find('.slider-fullscreen__slide-header h2'),
		$description = $target.find('.slider-fullscreen__slide-header p'),
		$button = $target.find('.slider-fullscreen__slide-wrapper-button'),
		$img = $target.find('.overflow__content'),
		$curtain = $target.find('.overflow__curtain'),
		splitHeading = splitLines($heading),
		splitDescription = splitLines($description);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);
		setLines(splitDescription.lines);

		if ($headline.length) {
			gsap.set($headline, {
				scaleX: 0,
				transformOrigin: 'left center',
			});
		}

		if ($bg.length) {
			gsap.set($bg, {
				scaleY: 0,
				transformOrigin: 'bottom center'
			});
		}

		if ($img.length) {
			gsap.set($img, {
				scale: 1.1,
				autoAlpha: 0,
			});
		}

		if ($button.length) {
			gsap.set($button, {
				y: 10,
				autoAlpha: 0
			});
		}

		if ($curtain.length) {
			gsap.set($curtain, {
				y: '100%',
			});
		}
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		if ($bg.length) {
			tl
				.to($bg, {
					duration: 0.6,
					stagger: 0.05,
					scaleY: 1,
					ease: 'expo.inOut'
				});
		}

		if ($curtain.length) {
			tl.to($curtain, {
				duration: 0.3,
				y: '0%',
				ease: 'expo.inOut'
			}, '-=0.6');
		}

		if ($img.length) {
			tl.set($img, {
				autoAlpha: 1
			});

			tl.to($img, {
				scale: 1,
				duration: 0.6,
				ease: 'power4.out'
			});
		}

		if ($curtain.length) {
			tl
				.to($curtain, {
					y: '-102%',
					duration: 0.3,
					ease: 'expo.inOut'
				}, '-=0.6');
		}

		if ($headline.length) {
			tl.to($headline, {
				scaleX: 1,
				duration: 0.6,
				ease: 'expo.inOut'
			}, '-=1');
		}

		tl.add(animateLines(splitHeading.words), '-=0.6');

		if ($button.length) {
			tl.to($button, {
				duration: 0.6,
				autoAlpha: 1,
				y: 0
			}, '-=0.6');
		}

		tl.add(animateLines(splitDescription.lines, 1, 0.1), '-=0.6');
	}
}
