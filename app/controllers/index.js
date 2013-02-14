// create menu view
var v1=Ti.UI.createView({
	backgroundColor:'blue'
});

// add view to container exposed by widget
$.drawermenu.drawermenuview.add(v1);

// create main view
var v2=Ti.UI.createView({
	backgroundColor:'red'
});

// add eventlistener to view to trigger the open and close of the menu
v2.addEventListener('click',$.drawermenu.showhidemenu);

// add view to container exposed by widget
$.drawermenu.drawermainview.add(v2);

$.index.open();
