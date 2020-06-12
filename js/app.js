  
'use strict';

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

var i = 0;
carousel();

function carousel() {
  let slide = document.getElementsByClassName("s1");
  slide[0].style.marginLeft = -i*25 + '%';
  i++;
  if (i === 4) {
	  i = 0;
  }
  setTimeout(carousel, 3500);
}

$('.bar').on('click',function(e){
	i = e.target.id - 1;
	let slide = document.getElementsByClassName("s1");
	slide[0].style.marginLeft = -i*25 + '%'
});