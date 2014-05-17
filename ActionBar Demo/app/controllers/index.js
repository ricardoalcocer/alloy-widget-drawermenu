var thisWin=$.index;
var main=Ti.UI.createView({
	backgroundColor: "#fff"
});

// store drawermenu and main in global variable for easy access from menu
Alloy.CFG.drawermenu=$.drawermenu;
Alloy.CFG.main=main;

var menu=Alloy.createController('menu').getView();

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: thisWin
});

$.drawermenu.addEventListener('open', function menuOpen () {
	Ti.API.info("Menu opened");
});

$.drawermenu.addEventListener('close', function menuOpen () {
	Ti.API.info("Menu closed");
});

thisWin.addEventListener('open',function(e){
	var actionBarHelper = require('com.alcoapps.actionbarhelper')(thisWin);	
	actionBarHelper.setIcon('/drawericonw@2x.png');
	actionBarHelper.setTitle('ActionBar with DrawerMenu');
	actionBarHelper.setUpAction(function(e){
		$.drawermenu.showhidemenu();
	});
	actionBarHelper.displayHomeAsUp(false);
});

thisWin.open();
