// store drawermenu in global variable for easy access from menu
Alloy.CFG.drawermenu=$.drawermenu;

var thisWin=$.index;
var main=Ti.UI.createView({
	backgroundColor: "#fff"
})

var menu=Alloy.createController('menu').getView();

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: thisWin
})

thisWin.addEventListener('open',function(e){
	var actionBarHelper = require('com.alcoapps.actionbarhelper')(thisWin);	
	actionBarHelper.setTitle('ActionBar with DrawerMenu');
	actionBarHelper.setUpAction(function(e){
		$.drawermenu.showhidemenu();
	});
})

thisWin.open();
