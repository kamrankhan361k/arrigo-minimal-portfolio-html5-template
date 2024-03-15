const FigureFeature = function () {
	const $elements = $('.figure-feature');

	if (!$elements.length) {
		return;
	}

	const circle = new Circle();

	$elements.each(function () {
		circle.animate($(this));
	});
}
