/*========================================
/*	StarColon Site 2015
/*	Main js
/*
/*	by StarColon Projects
/*======================================*/

var sk = {}; // skrollr object
var fullwidth = window.screen.availWidth;
var fullheight = window.screen.availHeight;

(function init(){

	// Generate sample text
	$(document).ready(function(){

		// Initialize toolkits
		(function initToolkits(){
			if (typeof skrollr === 'undefined')
				return;
			sk = skrollr.init({ forceHeight: false});
			console.log('--> skrollr initialized ...');
		})();

		// Monitor vertical scroll position
		// (function bindScrollMonitor(){
		// 	$(window).scroll(function(){
		// 		console.log('Pos Y: ' + $(document).scrollTop());	
		// 	});
		// })();

		// Stretch misc bottom panel
		(function stretchMiscBottom(){
			$('#BOTTOM-MISC').height(window.screen.height*.8);
		})();

	})
	
})();


// UTILITY FUNCTION
function scrollScreenTo(offset){
	$('html, body').animate({
        scrollTop: offset
    }, 1036);
}