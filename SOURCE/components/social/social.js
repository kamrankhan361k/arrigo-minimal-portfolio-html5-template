const Social = function () {
	const $elements = $('.social__item a');

	if (!$elements.length) {
		return;
	}

	const circle = new Circle();

	$elements.each(function () {
		circle.animate($(this));
	});
}
