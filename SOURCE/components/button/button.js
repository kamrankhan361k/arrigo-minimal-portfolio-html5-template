const Button = function () {
	$('.button-square').each(function () {
		const
			$el = $(this),
			$rect = $el.find('.rect');

		if ($rect.length) {
			gsap.set($rect, {
				drawSVG: 0,
				stroke: '#b68c70',
			});

			$el.on('mouseenter touchstart', function () {
				gsap.to($rect, {
					drawSVG: true,
					duration: 0.6,
					ease: 'power4.inOut'
				});
			}).on('mouseleave touchend', function () {
				gsap.to($rect, {
					drawSVG: false,
					duration: 0.6,
					ease: 'power4.inOut'
				});
			});
		}
	});
}
