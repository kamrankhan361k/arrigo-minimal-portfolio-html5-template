const SectionMasthead = function () {
	const
		$target = $('.section-masthead[data-os-animation]'),
		$heading = $target.find('h1'),
		$meta = $target.find('.post-meta li'),
		$headline = $target.find('.section-masthead__line'),
		splitMeta = splitLines($meta),
		splitHeading = splitLines($heading);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);
		setLines(splitMeta.lines);

		gsap.set($headline, {
			scaleY: 0,
			transformOrigin: 'top center'
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		$target.each(function () {
			const
				$el = $(this),
				elMeta = $el.find(splitMeta.lines),
				elHeading = $el.find(splitHeading.words),
				$elHeadline = $el.find($headline),
				tl = gsap.timeline();

			tl
				.add(animateLines(elHeading))
				.add(animateLines(elMeta), '-=0.3')
				.to($elHeadline, {
					scaleY: 1,
					duration: 0.6,
					ease: 'expo.inOut',
				}, '-=0.6');

			createOSScene($el, tl);
		});
	}
}
