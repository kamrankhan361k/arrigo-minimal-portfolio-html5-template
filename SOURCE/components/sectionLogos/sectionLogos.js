const SectionLogos = function () {
	const $target = $('.section-logos[data-os-animation] .section-logos__wrapper-items'),
		tl = gsap.timeline(),
		$logos = $target.find('.section-logos__item');

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		gsap.set($logos, {
			y: 30,
			autoAlpha: 0
		});
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		tl
			.to($logos, {
				duration: 1,
				autoAlpha: 1,
				y: 0,
				ease: 'power4.out'
			}, 0.1);

		createOSScene($target, tl);
	}
}
