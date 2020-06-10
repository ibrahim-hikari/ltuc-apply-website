  
'use strict';

$(".slide-container").slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 3500,
	pauseOnDotsHover: false,
	fade: true,
});

$('.icon').click(function (e) { 
	e.preventDefault();
	$('.main_nav').toggle(500);
});