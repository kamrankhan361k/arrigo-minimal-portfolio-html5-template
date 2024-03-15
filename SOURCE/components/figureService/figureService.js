const FigureService = function () {
	const $target = $('.figure-service');

	if (!$target.length) {
		return;
	}

	const
		circle = new Circle(),
		$icons = $target.find('.figure-service__icon'),
		$headlines = $target.find('.figure-service__headline'),
		$numbers = $target.find('.figure-service__number'),
		$texts = $target.find('.figure-service__header p'),
		splitDescr = new SplitText($texts, {
			type: 'lines',
			linesClass: 'split-line',
		});

	setLines(splitDescr.lines);

	$target.each(function () {
		const
			$el = $(this),
			$elIcon = $el.find($icons),
			$elHeadline = $el.find($headlines),
			$elNumber = $el.find($numbers),
			tl = gsap.timeline(),
			elDescr = $el.find(splitDescr.lines);

		circle.animate($el);

		$el
			.on('mouseenter touchstart', function () {
				tl
					.clear()
					.to($elHeadline, {
						scaleX: 2,
						duration: 0.6,
						ease: 'power4.out'
					})
					.to($elNumber, {
						y: -50,
						duration: 0.3,
						autoAlpha: 0
					}, '-=0.6')
					.to($elIcon, {
						y: -50,
						duration: 0.6,
						ease: 'power4.out'
					}, '-=0.6')
					.add(animateLines(elDescr, 0.6, 0.1), '-=0.6');
			})
			.on('mouseleave touchend', function () {
				tl
					.clear()
					.to($elHeadline, {
						scaleX: 1,
						duration: 0.3
					})
					.to($elNumber, {
						y: 0,
						duration: 0.3,
						autoAlpha: 1
					}, '-=0.3')
					.to($elIcon, {
						y: 0,
						duration: 0.3,
					}, '-=0.3')
					.to(elDescr, {
						y: '100%',
						duration: 0.3,
						autoAlpha: 0
					}, '-=0.3');
			});
	});
}
