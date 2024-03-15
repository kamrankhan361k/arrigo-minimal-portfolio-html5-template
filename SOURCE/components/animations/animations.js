function createOSScene($el, tl) {
	ScrollTrigger.create({
		trigger: $el.get(0),
		start: () => `top bottom-=${window.innerHeight * 0.15}vh`,
		animation: tl,
		invalidateOnRefresh: true,
		once: true
	});
}

function animateCurtainImg($curtain, $img) {
	const tl = gsap.timeline({
		defaults: {
			ease: 'expo.inOut',
		}
	});

	return tl.to($curtain, {
		x: '0%',
		duration: 0.3
	}).to($curtain, {
		y: '0%',
		duration: 0.4
	}).set($img, {
		autoAlpha: 1
	}).to($img, {
		scale: 1,
		duration: 1,
		ease: 'power4.out'
	}).to($curtain, {
		y: '102%',
		duration: 0.3
	}, '-=1');
}

function animateCurtainContent($curtain, $content) {
	const tl = gsap.timeline({
		defaults: {
			ease: 'expo.inOut'
		}
	});

	return tl.to($curtain, {
		x: '0%',
		duration: 0.3
	}).to($curtain, {
		y: '0%',
		duration: 0.4``
	}).set($content, {
		autoAlpha: 1
	}).to($curtain, {
		y: '102%',
		duration: 0.3
	});
}

function setCurtainImg($curtain, $img) {
	gsap.set($img, {
		scale: 1.1,
		autoAlpha: 0,
	});

	gsap.set($curtain, {
		y: '-99%',
		x: '-100%'
	});
}

function setCurtainContent($curtain, $content) {
	gsap.set($content, {
		autoAlpha: 0,
	});

	gsap.set($curtain, {
		y: '-99%',
		x: '-100%'
	});
}
