'use strict';

$(document).ready(function () {
	document.fonts.ready.then(() => {
		var
			sectionFullscreen4 = new SectionFullscreen4(),
			sectionFullscreen1 = new SectionFullscreen1(),
			figurePortfolio = new FigurePortfolio(),
			sectionHeader = new SectionHeader(),
			sectionIntro = new SectionIntro(),
			sliderServices = new SliderServices(),
			sectionInfo = new SectionInfo(),
			sectionCTA = new SectionCTA(),
			figurePost = new FigurePost(),
			sliderTestimonials = new SliderTestimonials(),
			sectionLogos = new SectionLogos(),
			sectionFeatures = new SectionFeatures(),
			sectionSteps = new SectionSteps(),
			sectionMasthead = new SectionMasthead();

		objectFitImages();

		new SliderPortfolioItem();
		new SliderFullscreen1();
		new SliderFullscreen4();
		new FigureFeature();
		new FigureService();
		new GMap();
		new Form();
		new Burger();
		new Social();
		new Button();
		new Menu();

		new Preloader(function () {
			new Grid();

			sectionFullscreen4.animate();
			sectionFullscreen1.animate();
			sectionHeader.animate();
			sectionIntro.animate();
			figurePortfolio.animate();
			sliderServices.animate();
			sectionInfo.animate();
			sectionCTA.animate();
			figurePost.animate();
			sliderTestimonials.animate();
			sectionLogos.animate();
			sectionFeatures.animate();
			sectionSteps.animate();
			sectionMasthead.animate();
		});
	});
});
