$(document).ready(function () {
	$('.turn-card__body').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		swipeToSlide: true,
		dots: false,
    prevArrow: false,
    nextArrow: false,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1.9,
				},
			}
		]
	});
})
