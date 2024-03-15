const SectionIntro = function () {
	const
		tl = gsap.timeline(),
		$target = $('.section-intro[data-os-animation]'),
		$heading = $target.find('h1'),
		$highlight = $heading.find('.highlight__bg'),
		splitHeading = splitLines($heading);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);

		gsap.set($target, {
			scaleY: 0,
			transformOrigin: 'bottom center'
		});

		gsap.set($highlight, {
			x: '-100%',
			y: '98%'
		})
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		tl
			.to($target, {
				scaleY: 1,
				duration: 1,
				ease: 'expo.inOut'
			})
			.add(animateLines(splitHeading.words), '-=0.4')
			.to($highlight, {
				x: '0%',
				duration: 0.6,
				ease: 'expo.inOut'
			}, '-=0.4')
			.to($highlight, {
				y: '0%',
				duration: 0.6,
				ease: 'expo.inOut'
			});
	}
}
