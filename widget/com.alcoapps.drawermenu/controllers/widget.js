var menuOpen = false;
var duration = 400;
var parent;
var handlers = {};

// Assign empty function to avoid calling undefined functions.
handlers.open = function(){};
handlers.close = function(){};

var init=function(opts){
	$.drawermainview.add(opts.mainview);
	$.drawermenuview.add(opts.menuview);
	duration=opts.duration;
	parent=opts.parent;
	console.log('initialized');
	setSwipe();
};

var setSwipe=function(){
	parent.addEventListener('swipe',function(e){ 
	    if(menuOpen == false && e.direction == 'right'){
	        showhidemenu();
	        menuOpen = true;
	    }
	    
	    if(menuOpen == true && e.direction == 'left' ){
	        showhidemenu();
	        menuOpen = false;
	    }
	});
};

var showhidemenu=function(){
	if (menuOpen){
		moveTo="0";
		menuOpen=false;
		handlers.close();
	}else{
		moveTo="250dp";
		menuOpen=true;
		handlers.open();
	}

	var newWidth = Ti.Platform.displayCaps.platformWidth;
    	if (OS_ANDROID) 
        	newWidth /= Ti.Platform.displayCaps.logicalDensityFactor;
	$.drawermainview.width=newWidth;
	$.drawermainview.animate({
		left:moveTo,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: duration
	});
};

var addEventListener=function(listenerName, listenerFunction){
	switch (listenerName) {
		case 'open' :
			handlers.open = listenerFunction;
			break;
		case 'close' :
			handlers.close = listenerFunction;
			break;
	};
};

Ti.Gesture.addEventListener('orientationchange', function(e) {
    var newWidth;
    newWidth = Ti.Platform.displayCaps.platformWidth;
    if (OS_ANDROID)
        newWidth /= Ti.Platform.displayCaps.logicalDensityFactor;
    $.drawermainview.width = newWidth;
});

exports.init=init;
exports.showhidemenu=showhidemenu;
exports.menuOpen=menuOpen;
exports.addEventListener=addEventListener;
exports.setDuration=function(dur){
	duration = dur;
};
