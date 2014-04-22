var menuOpen = false;
var duration = 400;

var showhidemenu=function(){
	if (menuOpen){
		moveTo="0";
		menuOpen=false;
	}else{
		moveTo="250dp";
		menuOpen=true;
	}

	var newWidth = Ti.Platform.displayCaps.platformWidth;
    	if (OS_ANDROID) 
        	newWidth /= Ti.Platform.displayCaps.logicalDensityFactor;
	$.drawermainview.width=newWidth;
	$.drawermainview.animate({
		left:moveTo,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration:400
	});
	
	
}

Ti.Gesture.addEventListener('orientationchange', function(e) {
    var newWidth;
    newWidth = Ti.Platform.displayCaps.platformWidth;
    if (OS_ANDROID)
        newWidth /= Ti.Platform.displayCaps.logicalDensityFactor;
    $.drawermainview.width = newWidth;
});

exports.showhidemenu=showhidemenu;

exports.setDuration=function(dur)
{
	duration = dur;
};
