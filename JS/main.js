/*========================================
/*	StarColon Site 2014
/*	Main js
/*
/*	by StarColon Projects
/*======================================*/

var sk = {};

(function init(){

	// Generate sample text
	$(document).ready(function(){

		// Initialize toolkits
		(function initToolkits(){
			sk = skrollr.init({ forceHeight: false});
			console.log('--> skrollr initialized ...');
		})();

		// Monitor vertical scroll position
		(function bindScrollMonitor(){
			$(window).scroll(function(){
				console.log('Pos Y: ' + $(document).scrollTop());	
			});
		})();

		// Stretch misc bottom panel
		(function stretchMiscBottom(){
			$('#BOTTOM-MISC').height(window.screen.height*.8);
		})();

	})
	
})();