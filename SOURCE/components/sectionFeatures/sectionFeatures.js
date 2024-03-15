const SectionFeatures = function () {
	const $target = $('.section-features[data-os-animation]'),
		$heading = $('.figure-feature__header h3'),
		$text = $('.figure-feature__header p'),
		$icon = $('.figure-feature__icon'),
		splitDescr = splitLines($text),
		splitHeading = splitLines($heading),
		tl = gsap.timeline();

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);
		setLines(splitDescr.lines);

		gsap.set($icon, {
			autoAlpha: 0,
			y: 30
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		tl.to($icon, {
			autoAlpha: 1,
			duration: 0.6,
			stagger: 0.05,
			y: 0,
			ease: 'power4.out'
		})
		tl.add(animateLines(splitHeading.words), '-=0.6')
		tl.add(animateLines(splitDescr.lines), '-=0.6')

		createOSScene($target, tl);
	}
}
