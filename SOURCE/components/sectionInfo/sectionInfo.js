const SectionInfo = function () {
	const
		$target = $('.section-info[data-os-animation]'),
		$heading = $target.find('.section-info__quote h2'),
		splitHeading = splitLines($heading);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.lines);
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		$target.each(function () {
			const
				$el = $(this),
				elLines = $el.find(splitHeading.lines),
				tl = gsap.timeline();

			tl.add(animateLines(elLines, 1, 0.1));

			createOSScene($el, tl);
		});
	}
}
