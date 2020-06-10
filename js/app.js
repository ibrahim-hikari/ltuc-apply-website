  
'use strict';

$(".slide-container").slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 3500,
	pauseOnDotsHover: false,
	fade: true,
});

$(document).ready( function(){
	$('.sub-dropdown-content').hide()
	$('.main-nav-mobile').hide()
$('.icon').click(function () { 
	$('.main-nav-mobile').fadeToggle(200);
});

$(".sub-dropdown-btn").on("click" ,function(){
	$('.sub-dropdown-content').fadeToggle(200);
})
})
