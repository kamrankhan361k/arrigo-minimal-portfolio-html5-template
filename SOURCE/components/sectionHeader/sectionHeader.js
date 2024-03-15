const SectionHeader = function () {
	const $target = $('.section-header[data-os-animation]'),
		$square = $target.find('.section-header__square'),
		$label = $target.find('.section-header__label span'),
		$heading = $target.find('h2'),
		splitHeading = splitLines($heading),
		splitLabel = splitLines($label);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines([splitHeading.lines, splitLabel.lines]);

		gsap.set($square, {
			transformOrigin: 'left center',
			scaleX: 0
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		$target.each(function () {
			const
				$el = $(this),
				tl = gsap.timeline(),
				$elSquare = $el.find($square),
				elSplitHeading = $el.find(splitHeading.lines),
				elSplitLabel = $el.find(splitLabel.lines);

			tl
				.to($elSquare, {
					scaleX: 1,
					duration: 0.6,
					ease: 'power4.out'
				})
				.add(animateLines(elSplitLabel, 1, 0.1), '<')
				.add(animateLines(elSplitHeading, 1, 0.1), '<0.2');

			createOSScene($el, tl);
		});
	}
}
