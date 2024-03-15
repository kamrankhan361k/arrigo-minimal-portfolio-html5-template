const Circle = function () {
	this.animate = function ($el) {
		const $circle = $el.find('.circle');

		if (!$circle.length) {
			return;
		}

		gsap.set($circle, {
			drawSVG: 0,
			stroke: '#b68c70',
		});

		$el.on('mouseenter touchstart', () => {
			gsap.to($circle, {
				drawSVG: true,
				duration: 0.6,
				ease: 'power4.inOut'
			});
		}).on('mouseleave touchend', () => {
			gsap.to($circle, {
				drawSVG: false,
				duration: 0.6,
				ease: 'power4.inOut'
			});
		});
	}
}
