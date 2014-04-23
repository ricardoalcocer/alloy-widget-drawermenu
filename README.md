DrawerWidget
======

This is an Appcelerator Alloy widget to implement a nice "drawer-type" menu on you iOS and Android Apps.


![Demo](http://s20.postimg.org/wfxbv3kwd/drawermenu.gif)

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

Set the slide duration:

	$.drawermenu.setDuration(200);

Triggering the Show and Hide
======
Inside your "Main View" you should have a button to trigger the open and close of the "drawer".

	var menubutton.addEventListener('click',function(e){
		$.drawermenu.showhidemenu();
	})

Contribuitors
======

* [Ricardo Alcocer](https://github.com/ricardoalcocer)
* [Bert Grantges](https://github.com/grantges)
* [Victor Casé](https://github.com/casevictor)
* [HarkDev](https://github.com/HarkDev)

License
======
MIT - [http://alco.mit-license.org](http://alco.mit-license.org)