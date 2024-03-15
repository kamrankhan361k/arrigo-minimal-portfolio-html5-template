const SectionSteps = function () {
	const $target = $('.section-steps[data-os-animation] .section-steps__step'),
		$heading = $target.find('.section-steps__content h2'),
		$text = $target.find('.section-steps__content p'),
		$headline = $target.find('.section-steps__headline'),
		$number = $target.find('.section-steps__number'),
		splitDescr = splitLines($text),
		splitHeading = splitLines($heading);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);
		setLines(splitDescr.lines);

		gsap.set($headline, {
			scaleX: 0,
			transformOrigin: 'left center'
		});

		gsap.set($number, {
			autoAlpha: 0,
			y: 30
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		$target.each(function () {
			const
				$el = $(this),
				$elNumber = $el.find($number),
				$elHeadline = $el.find($headline),
				elDescr = $el.find(splitDescr.lines),
				elHeading = $el.find(splitHeading.words),
				tl = gsap.timeline();

			tl
				.to($elNumber, {
					autoAlpha: 1,
					y: 0,
					duration: 0.6,
					ease: 'power4.out'
				})
				.add(animateLines(elHeading), '-=0.4')
				.add(animateLines(elDescr, 1, 0.1), '-=0.4')
				.to($elHeadline, {
					scale: 1,
					duration: 0.6,
					ease: 'power4.out'
				}, '-=0.8');

			createOSScene($el, tl);
		});
	}
}
