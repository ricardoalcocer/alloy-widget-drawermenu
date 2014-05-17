//
// SETUP THE MENU VIEW
//
var menu=Alloy.createController('menu').getView();
menu.addEventListener('click',function(e){
	mainLabel.text='Clicked on row with ID : ' + e.rowData.rowId;
	$.drawermenu.showhidemenu();	
});
//

//
// SETUP THE MAIN VIEW
//
var main=Ti.UI.createView({backgroundColor: "#cacaca"});
var mainLabel=Ti.UI.createLabel({text:"MAIN"})
main.add(mainLabel);
//

// SET LISTENER TO OPEN/CLOSE THE MENU
main.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
});
//

// Initialize the widget
$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.index
});

$.drawermenu.addEventListener('open', function menuOpen () {
	Ti.API.info("Menu opened");
});

$.drawermenu.addEventListener('close', function menuOpen () {
	Ti.API.info("Menu closed");
});

// you have access to:
// $.drawermenu.init
// $.drawermenu.duration 			(read/write)
// $.drawermenu.showhidemenu();		(method)
// $.drawermenu.menuopen 						(readonly)
//

$.index.open();
