
'use strict';
let templateId = document.getElementById("ltucTemplate");
let sectionId = document.getElementById("showLTUCPageContent");
let headerId = document.getElementById("header")
let footerId = document.getElementById("footer");
let programId = document.getElementById("program");
let aboutUsConId = document.getElementById("aboutUsCon")
let aboutUsId = document.getElementById("aboutUs");
$(document).ready(function () {
	
	console.log("hii")
	$('.sub-dropdown-content').hide();
	$('#icon').on("click",function () {
		$('.main-nav-mobile').fadeToggle(200);
	});

	$(".sub-dropdown-btn").click(function () {
		$('.sub-dropdown-content').fadeToggle(200);
	})

	let renderPageContent = (url, templateId, sectionId) => {
		$.getJSON(url, (content) => {
			let template = $(templateId).html();
			let headerSource = $(headerId).html()
			let footerSource = $(footerId).html()
			let programSource = $(programId).html();
			let aboutUsConSource = $(aboutUsConId).html();
			let aboutUsSource = $(aboutUsId).html();

			Handlebars.registerPartial('header', headerSource);
			Handlebars.registerPartial('footer', footerSource);
			Handlebars.registerPartial('program', programSource);
			Handlebars.registerPartial('aboutUs', aboutUsSource)
			Handlebars.registerPartial('aboutUsCon', aboutUsConSource);
			// Handlebars.registerHelper('include', function(source) {
			// 	return new Handlebars.SafeString(source);
			// })
			let renderTemplate = Handlebars.compile(template)(content);
			$(sectionId).append(renderTemplate);
		})
	}
	
	renderPageContent('/data/arabic.json', templateId, sectionId);
	function showArabicVersion() {
		console.log("helllloooo");
		$(sectionId).html("");
	}
	function showEnglishVersion() {
		$(sectionId).html("");
		renderPageContent('data/english-version.json', templateId, sectionId)
	}
	
	// showArabicVersion();
	// $("#arabic-buuton").on('click', showArabicVersion);
	// $('#english-version').on('click', showEnglishVersion);
	

	
})
	$('.main-nav-mobile').hide();
