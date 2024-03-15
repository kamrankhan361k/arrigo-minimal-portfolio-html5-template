const Form = function () {
	floatLabels();
	ajaxForm();

	function floatLabels() {
		const
			INPUT_CLASS = '.input-float__input',
			INPUT_NOT_EMPTY = 'input-float__input_not-empty',
			INPUT_FOCUSED = 'input-float__input_focused';

		if (!$(INPUT_CLASS).length) {
			return;
		}

		$(INPUT_CLASS).each(function () {
			const $currentField = $(this);

			if ($currentField.val()) {
				$currentField.addClass(INPUT_NOT_EMPTY);
			} else {
				$currentField.removeClass([INPUT_FOCUSED, INPUT_NOT_EMPTY]);
			}
		});

		$(document).on('focusin', INPUT_CLASS, function () {
			const $currentField = $(this);

			$currentField.addClass(INPUT_FOCUSED).removeClass(INPUT_NOT_EMPTY);
		}).on('focusout', INPUT_CLASS, function () {
			const $currentField = $(this);

			// delay needed due to issues with datepicker
			if ($currentField.val()) {
				$currentField.removeClass(INPUT_FOCUSED).addClass(INPUT_NOT_EMPTY);
			} else {
				$currentField.removeClass(INPUT_FOCUSED);
			}
		});
	}

	function ajaxForm() {
		const $form = $('.js-ajax-form');

		if (!$form.length) {
			return;
		}

		$form.validate({
			errorElement: 'span',
			errorPlacement: function (error, element) {
				error.appendTo(element.parent()).addClass('form__error');
			},
			submitHandler: function (form) {
				ajaxSubmit(form);
			}
		});

		function ajaxSubmit(form) {
			$.ajax({
				type: $form.attr('method'),
				url: $form.attr('action'),
				data: $form.serialize()
			}).done(function () {
				alert($form.attr('data-message-success'));
				$form.trigger('reset');
				floatLabels();
			}).fail(function () {
				alert($form.attr('data-message-error'));
			});
		}
	}
}
