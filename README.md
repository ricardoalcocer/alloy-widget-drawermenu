DrawerWidget
======

This is an Appcelerator Alloy widget to implement a nice "drawer-type" menu on you iOS and Android Apps.

This Widget exposes two views: drawermenuview and drawermainview

Adding views
======
To use, simply add views to these containers.  Example:

Assuming you have a CommonJS module that returns your views:

var menuView=common.getMenuView();

var mainView=common.getMainView();


Then add these views to the exposed containers:

$.drawermenu.drawermenuview.add(menuView);

$.drawermenu.drawermainview.add(mainView);


Triggering the Show and Hide
======
Inside your "Main View" you should have a button to trigger the open and close of the "drawer".

var menubutton.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
})