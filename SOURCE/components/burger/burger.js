const Burger = function () {
	const
		OPEN_CLASS = 'burger_opened',
		header = new Header();

	$(document).on('click', '.js-burger', function (e) {
		e.preventDefault();

		if (!e.detail || e.detail == 1) {
			const $burger = $(this);

			if ($burger.hasClass(OPEN_CLASS)) {
				$burger.removeClass(OPEN_CLASS);
				header.closeOverlayMenu();
			} else {
				$burger.addClass(OPEN_CLASS);
				header.openOverlayMenu();
			}
		}
	});
}
