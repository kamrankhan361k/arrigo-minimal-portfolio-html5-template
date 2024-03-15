const Preloader = function (callback) {
	const
		$preloader = $('.preloader'),
		$curtain = $preloader.find('.preloader__curtain'),
		$logo = $preloader.find('.preloader__logo'),
		$rect = $logo.find('.rect'),
		tl = gsap.timeline();

	$('body').imagesLoaded().always({
		background: true
	}, function () {
		if (!$preloader.length) {
			callback();
			return;
		}

		finish();
	});

	if (!$preloader.length) {
		return;
	}

	load();

	function finish() {
		tl
			.clear()
			.to($rect, {
				drawSVG: true,
				duration: 2,
				ease: 'expo.inOut'
			})
			.to($logo, {
				autoAlpha: 0,
				duration: 0.3
			}, '-=0.3')
			.to($curtain, {
				y: '-100%',
				stagger: 0.05,
				duration: 1,
				ease: 'expo.inOut'
			}, '-=0.3')
			.set($preloader, {
				autoAlpha: 0
			})
			.add(function () {
				callback();
			}, '-=0.4');

	}

	function load() {
		tl.fromTo($rect, {
			drawSVG: 0,
			stroke: '#b68c70',
		}, {
			duration: 15,
			ease: {
				'_p': 0.7,
				'_p1': 0.15,
				'_p2': 0.7,
				'_p3': 0.85,
				'_calcEnd': false
			},
			drawSVG: true
		});
	}

	this.curtainsUp = function () {
		tl
			.to($curtain, {
				duration: 1,
				stagger: 0.05,
				y: '-100%',
				ease: 'expo.inOut'
			})
			.set($preloader, {
				autoAlpha: 0
			});
	}

	this.curtainsDown = function () {
		tl
			.set($preloader, {
				autoAlpha: 1
			})
			.to($curtain, {
				duration: 1,
				stagger: 0.05,
				y: '0%',
				ease: 'expo.inOut'
			})
			.set($rect, {
				drawSVG: 0
			})
			.to($logo, {
				duration: 0.6,
				autoAlpha: 1
			});
	}
}
