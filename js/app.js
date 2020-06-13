'use strict';

let templateId = document.getElementById("ltucTemplate");
let sectionId = document.getElementById("showLTUCPageContent");
let headerId = document.getElementById("header");
let sliderId = document.getElementById('slider');
let programId = document.getElementById("program");
let aboutUsId = document.getElementById("aboutUs");
let aboutUsConId = document.getElementById("aboutUsCon")
let footerId = document.getElementById("footer");


let renderPageContent = (url, templateId, sectionId) => {
  $.getJSON(url, (content) => {
    let template = $(templateId).html();
    let headerSource = $(headerId).html()
    let sliderSource = $(sliderId).html();
    let aboutUsSource = $(aboutUsId).html();
    let aboutUsConSource = $(aboutUsConId).html();
    let programSource = $(programId).html();
    let footerSource = $(footerId).html();

    Handlebars.registerPartial('header', headerSource);
    Handlebars.registerPartial('slider', sliderSource);
    Handlebars.registerPartial('aboutUs', aboutUsSource);
    Handlebars.registerPartial('aboutUsCon', aboutUsConSource);
    Handlebars.registerPartial('program', programSource);
    Handlebars.registerPartial('footer', footerSource);
    let renderTemplate = Handlebars.compile(template)(content);
    $(sectionId).append(renderTemplate);
  })
}

function showArabicVersion() {
  console.log("helllloooo");
  $(sectionId).html("");
  renderPageContent('/data/arabic.json', templateId, sectionId);
}
function showEnglishVersion() {
  $(sectionId).html("");
  renderPageContent('/data/english.json', templateId, sectionId)
}

$(document).ready(function () {
  console.log('here')
  showArabicVersion();
});

// $("#arabic-button").on('click', showArabicVersion());
// $('#english-button').on('click', showEnglishVersion());

$('.main-nav-mobile').hide();
$('.sub-dropdown-content').hide();
$('#icon').on("click", function () {
  $('.main-nav-mobile').fadeToggle(200);
});

$(".sub-dropdown-btn").click(function () {
  $('.sub-dropdown-content').fadeToggle(200);
})


var i = 0;
carousel();

function carousel() {
  let slide = document.getElementsByClassName("s1");
  slide[0].style.marginLeft = -i * 25 + '%';
  i++;
  if (i === 4) {
    i = 0;
  }
  setTimeout(carousel, 5000);
}

$('.bar').on('click', function (e) {
  i = e.target.id - 1;
  let slide = document.getElementsByClassName("s1");
  slide[0].style.marginLeft = -i * 25 + '%'
});
