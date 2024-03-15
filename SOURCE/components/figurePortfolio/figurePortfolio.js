const FigurePortfolio = function () {
	const $target = $('.figure-portfolio[data-os-animation]'),
		$img = $target.find('.overflow__content'),
		$curtain = $target.find('.overflow__curtain'),
		$heading = $target.find('.figure-portfolio__header h2'),
		$headline = $target.find('.figure-portfolio__headline'),
		$info = $target.find('.figure-portfolio__info'),
		splitHeading = splitLines($heading),
		splitInfo = splitLines($info);

	prepare();

	function prepare() {
		if (!$target.length) {
			return;
		}

		setLines(splitHeading.words);
		setLines(splitInfo.words);

		gsap.set($headline, {
			scaleX: 0,
			transformOrigin: 'left center'
		});

		setCurtainImg($curtain, $img);
	}

	this.animate = function () {
		if (!$target.length) {
			return;
		}

		$target.each(function () {
			const $el = $(this),
				tl = gsap.timeline(),
				$elLink = $el.find('.figure-portfolio__link'),
				$elImg = $el.find($img),
				$elCurtain = $el.find($curtain),
				$elHeading = $el.find($heading),
				$elHeadline = $el.find($headline),
				elSplitInfo = $el.find(splitInfo.words),
				elSplitHeading = $el.find(splitHeading.words);

			tl
				.add(animateCurtainImg($elCurtain, $elImg))
				.to($elHeadline, {
					scaleX: 1,
					duration: 0.6,
					ease: 'power4.out'
				}, '-=1')
				.add(animateLines(elSplitInfo), '-=0.8')
				.add(animateLines(elSplitHeading), '-=0.8');

			createOSScene($el, tl);

			$elLink
				.on('mouseenter touchstart', function () {
					gsap.to($elImg, {
						scale: 1.1,
						duration: 0.3,
						ease: 'power3.InOut',
					});

					gsap.to($elHeadline, {
						scaleX: 0.8,
						duration: 0.3,
						ease: 'power3.InOut',
						transformOrigin: 'right center'
					});

					gsap.to($elHeading, {
						x: 10,
						duration: 0.3,
						ease: 'power3.InOut',
					});
				})
				.on('mouseleave touchend', function () {
					gsap.to($elImg, {
						scale: 1,
						duration: 0.3,
						ease: 'power2.InOut',
					});

					gsap.to($elHeadline, {
						scaleX: 1,
						duration: 0.3,
						ease: 'power2.InOut',
						transformOrigin: 'right center'
					});

					gsap.to($elHeading, {
						x: 0,
						duration: 0.3,
						ease: 'power2.InOut',
					});
				});
		});
	}
}
