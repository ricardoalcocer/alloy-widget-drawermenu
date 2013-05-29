var controls=require('controls');

// get main and menu view as objects
var menuView=controls.getMenuView();

// add event listener in this context
menuView.menuTable.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
	// on Android the event is received by the label, so watch out!
	Ti.API.info(e.rowData.id); 
})

var mainView=controls.getMainView();

// add menu view to container exposed by widget
$.drawermenu.drawermenuview.add(menuView.getView()); // get view is an Alloy Method

// attach event listener to menu button
mainView.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}))
mainView.menuButton.addEventListener('click',$.drawermenu.showhidemenu); // method is exposed by widget

// add view to container exposed by widget
$.drawermenu.drawermainview.add(mainView.getView());

$.index.open();
