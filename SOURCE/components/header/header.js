const Header = function () {
	const
		$overlay = $('.header__wrapper-overlay-menu'),
		$menuLinks = $('.overlay-menu > li > a .overlay-menu__item-wrapper'),
		$submenu = $('.overlay-sub-menu'),
		$submenuButton = $('.js-submenu-back'),
		$submenuLinks = $submenu.find('> li > a .overlay-menu__item-wrapper');

	stickHeader();

	if (!$overlay.length) {
		return;
	}

	setOverlayMenu();

	function setOverlayMenu() {
		gsap.set($overlay, {
			y: '100%'
		});

		if ($menuLinks.length) {
			gsap.set($menuLinks, {
				y: '100%'
			});
		}

		if ($submenuLinks.length) {
			gsap.set($submenuLinks, {
				y: '100%'
			});
		}

		if ($submenu.length) {
			gsap.set($submenu, {
				autoAlpha: 0,
				y: 10
			});
		}

		if ($submenuButton.length) {
			gsap.set($submenuButton, {
				autoAlpha: 0,
				y: 10
			});
		}
	}

	this.closeOverlayMenu = function () {
		const tl = gsap.timeline();

		tl.timeScale(2);

		if ($menuLinks.length) {
			tl
				.to($menuLinks, {
					y: '-100%',
					duration: 0.6,
					ease: 'power4.in'
				}, 'start');
		}

		if ($submenuLinks.length) {
			tl
				.to($submenuLinks, {
					y: '-100%',
					duration: 0.6,
					ease: 'power4.in'
				}, 'start');
		}

		tl.to($submenuButton, {
			y: -10,
			duration: 0.6,
			autoAlpha: 0
		})
			.to($overlay, {
				y: '-100%',
				duration: 1,
				ease: 'expo.inOut'
			})
			.add(function () {
				setOverlayMenu();
			});
	};

	this.openOverlayMenu = function () {
		const tl = gsap.timeline();

		tl
			.to($overlay, {
				y: '0%',
				duration: 1,
				ease: 'expo.inOut'
			})
			.to($menuLinks, {
				y: '0%',
				stagger: 0.05,
				duration: 0.6,
				ease: 'power4.out',
			}, '-=0.3');
	};

	function stickHeader() {
		const $header = $('.js-header-sticky');

		if ($header.length) {
			ScrollTrigger.create({
				start: () => `top+=1px top`,
				end: () => `bottom top`, // page "end" will never be reached
				scrub: true,
				pinSpacing: false,
				onToggle: (isActive) => {
					$header.toggleClass('header_sticky', isActive);
				},
			});
		}
	}
}
