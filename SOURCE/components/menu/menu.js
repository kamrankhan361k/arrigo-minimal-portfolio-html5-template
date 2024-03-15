const Menu = function () {
	const $menu = $('.js-overlay-menu');

	if (!$menu.length) {
		return;
	}

	const $links = $menu.find('.menu-item-has-children > a'),
		$submenus = $menu.find('.overlay-sub-menu'),
		$submenuButton = $('.js-submenu-back'),
		OPEN_CLASS = 'opened',
		tl = gsap.timeline();

	function openSubmenu($submenu, $currentMenu) {
		const
			$currentLinks = $currentMenu.find('> li > a .overlay-menu__item-wrapper'),
			$submenuLinks = $submenu.find('> li > a .overlay-menu__item-wrapper');

		tl
			.pause()
			.clear()
			.play()
			.set($submenu, {
				autoAlpha: 1,
				zIndex: 100
			})
			.to($currentLinks, {
				y: '-100%',
				duration: 0.6,
				ease: 'power4.in'
			}, '-=0.3')
			.to($submenuLinks, {
				y: '0%',
				stagger: 0.05,
				duration: 0.6,
				ease: 'power4.out'
			});

		$submenus.removeClass(OPEN_CLASS);
		$submenu.not($menu).addClass(OPEN_CLASS);

		if ($submenus.hasClass(OPEN_CLASS)) {
			tl.to($submenuButton, {
				autoAlpha: 1,
				duration: 0.3,
				y: 0
			}, '-=0.6');
		} else {
			tl.to($submenuButton, {
				autoAlpha: 0,
				duration: 0.3,
				y: 10
			}, '-=0.6');
		}
	}

	function closeSubmenu($submenu, $currentMenu) {
		const
			$currentLinks = $currentMenu.find('> li > a .overlay-menu__item-wrapper'),
			$submenuLinks = $submenu.find('> li > a .overlay-menu__item-wrapper');

		tl
			.pause()
			.clear()
			.play()
			.set($submenu, {
				zIndex: -1
			})
			.to($submenuLinks, {
				y: '100%',
				duration: 0.6,
				ease: 'power4.in'
			}, '-=0.3')
			.to($currentLinks, {
				y: '0%',
				duration: 0.6,
				stagger: 0.05,
				ease: 'power4.out'
			})
			.set($submenu, {
				autoAlpha: 0,
				y: 10
			});

		$submenus.removeClass(OPEN_CLASS);
		$currentMenu.not($menu).addClass(OPEN_CLASS);

		if ($submenus.hasClass(OPEN_CLASS)) {
			gsap.to($submenuButton, {
				autoAlpha: 1,
				duration: 0.3,
				y: 0
			}, '-=0.6');
		} else {
			gsap.to($submenuButton, {
				autoAlpha: 0,
				duration: 0.3,
				y: 10
			}, '-=0.6');
		}
	}

	$links.on('click', function (e) {
		e.preventDefault();

		if (!e.detail || e.detail == 1) {
			const
				$el = $(this),
				$currentMenu = $el.parents('ul'),
				$submenu = $el.next('.overlay-sub-menu');

			openSubmenu($submenu, $currentMenu);
		}
	});

	$submenuButton.on('click', function (e) {
		e.preventDefault();

		if (!e.detail || e.detail == 1) {
			const
				$openedMenu = $submenus.filter('.' + OPEN_CLASS),
				$prevMenu = $openedMenu.parent('li').parent('ul');

			closeSubmenu($openedMenu, $prevMenu);
		}
	});
}
