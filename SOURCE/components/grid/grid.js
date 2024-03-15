const Grid = function () {
	const $grid = $('.js-grid');

	if (!$grid.length) {
		return;
	}

	$grid.masonry({
		itemSelector: '.js-grid__item',
		columnWidth: '.js-grid__sizer',
		horizontalOrder: true
	});
}
