function splitLines($el) {
	if (!($el).length) {
		return false;
	}

	return new SplitText($el, {
		type: 'words, lines',
		linesClass: 'split-line',
		wordsClass: 'split-word'
	});
};


function setLines(el) {
	if (!$(el).length) {
		return false;
	}

	return gsap.set(el, {
		y: '150%',
		autoAlpha: 0
	});
}

function animateLines(el, customDuration, customStagger) {
	if (!$(el).length) {
		return false;
	}

	const
		duration = customDuration ? customDuration : 0.6,
		stagger = customStagger ? customStagger : 0.03;

	return gsap.to(el, {
		y: '0%',
		duration,
		stagger,
		autoAlpha: 1,
		ease: 'power4.out'
	});
}

function hideLines(el, customDuration, customStagger) {
	if (!$(el).length) {
		return false;
	}

	const
		duration = customDuration ? customDuration : 0.6,
		stagger = customStagger ? customStagger : 0.03;

	return gsap.to(el, {
		y: '150%',
		duration,
		stagger,
		autoAlpha: 0,
		ease: 'power4.in'
	});
}
