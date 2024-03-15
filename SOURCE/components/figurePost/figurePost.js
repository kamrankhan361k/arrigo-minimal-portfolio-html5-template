const FigurePost = function () {
	const $target = $('.figure-post[data-os-animation]'),
		$heading = $target.find('.figure-post__content h3'),
		$text = $target.find('.figure-post__content p'),
		splitHeading = splitLines($heading),
		splitDescr = splitLines($text);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);

		if (splitDescr) {
			setLines(splitDescr.lines);
		}
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		$target.each(function () {
			const
				$el = $(this),
				tl = gsap.timeline(),
				$elHeading = $el.find($heading),
				elSplitDescr = $elHeading.find(splitDescr.lines),
				elSplitHeading = $elHeading.find(splitHeading.words);

			tl
				.add(animateLines(elSplitHeading));
			if (splitDescr) {
				tl.add(animateLines(elSplitDescr, 1, 0.1));
			}

			createOSScene($el, tl);
		});
	}
}
