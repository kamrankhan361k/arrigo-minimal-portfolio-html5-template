const SectionCTA = function () {
	const $target = $('.section-cta[data-os-animation]'),
		$header = $target.find('.section-cta__header'),
		$headline = $target.find('.section-cta__headline'),
		$heading = $header.find('h2, h4'),
		$button = $target.find('.section-cta__wrapper-button'),
		splitHeading = splitLines($heading);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.lines);

		gsap.set($button, {
			autoAlpha: 0,
			y: 30
		});

		gsap.set($headline, {
			scaleX: 0,
			transformOrigin: 'left center'
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		$target.each(function () {
			const $el = $(this),
				elLines = $el.find(splitHeading.lines),
				$elHeader = $el.find($header),
				tl = gsap.timeline();

			tl
				.add(animateLines(elLines, 1, 0.1))
				.to($button, {
					duration: 0.6,
					autoAlpha: 1,
					y: 0
				}, '<0.2')
				.to($headline, {
					duration: 0.6,
					scaleX: 1,
					ease: 'expo.inOut'
				}, '<');

			createOSScene($elHeader, tl);
		});
	}
}
