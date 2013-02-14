var menuOpen = false;

var showhidemenu=function(){
	if (menuOpen){
		moveTo="0";
		menuOpen=false;
	}else{
		moveTo="250dp";
		menuOpen=true;
	}

	$.drawermainview.width=Ti.Platform.displayCaps.platformWidth;
	$.drawermainview.animate({
		left:moveTo,
		duration:100
	});
}

Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.drawermainview.width=Ti.Platform.displayCaps.platformWidth;
});

exports.showhidemenu=showhidemenu;