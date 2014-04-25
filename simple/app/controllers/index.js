//
// SETUP THE MENU VIEW
//
var menu=Alloy.createController('menu').getView();
menu.addEventListener('click',function(e){
	mainLabel.text='Clicked on row with ID : ' + e.rowData.rowId;
	$.drawermenu.showhidemenu();	
})
$.drawermenu.drawermenuview.add(menu);
//

//
// SETUP THE MAIN VIEW
//
var main=Ti.UI.createView({backgroundColor: "#cacaca"});
var mainLabel=Ti.UI.createLabel({text:"MAIN"})
main.add(mainLabel);
$.drawermenu.drawermainview.add(main);
//

// SET LISTENER TO OPEN/CLOSE THE MENU
main.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
})
//

$.index.open();
