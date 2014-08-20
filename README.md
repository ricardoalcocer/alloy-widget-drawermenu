DrawerWidget
======

This is an Appcelerator Alloy widget to implement a nice "drawer-type" menu on you iOS and Android Apps.  This new version 2.0 was a bit refactored, simplifying the way you interact with the widget, and adding swipe functionality.


![Demo](http://s20.postimg.org/wfxbv3kwd/drawermenu.gif)

This Widget exposes two views: drawermenuview and drawermainview

Before you get started
======
The demo at [/demo](https://github.com/ricardoalcocer/alloy-widget-drawermenu/tree/master/demo) shows the menu running on iOS with a simple yet practical scenario of two menu options and responding to click events.  For Android after Titanium SDK 3.3.0, you MUST use the ActionBar which is displayed by default on Android apps, and it's somewhat difficult to hide (I blogged about this [here](http://www.appcelerator.com/blog/2014/08/hiding-the-android-actionbar/)).  So, for Android you have two options: check the example in [/ActionBar Demo](https://github.com/ricardoalcocer/alloy-widget-drawermenu/tree/master/ActionBar%20Demo), or better yet, don't use this widget for Android and use Android's native Drawer Layout exposed by this [module](https://github.com/Tripvi/Ti.DrawerLayout).


Getting started
======
This widget simply gives you a container to which you can add two views: the menu view and the main view.  Open/Close of the menu can be triggered by either a button you add to your main view, or by swiping with your finger.  

Assuming you have a view called **menu** and a view called **main**, simply add this to the index.js of your app:

````javascript
$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.index
})
````

That's all.  At this point you have a swipeable area that shows the menu by swiping to the right.

If you add a "menu button" to your main view, simply add an event listener like this:

````javascript
	var menubutton.addEventListener('click',function(e){
		$.drawermenu.showhidemenu();
	})
````

ActionBar
======
In the ActionBar Demo folder you'll find an example of how to trigger the Drawer Menu from the ActionBar

![ActionBar Demo](http://drops.ricardoalcocer.com/drops/drawermenu_actionbar-aLFu5IksDE.gif)

Want to try it for yourself? Download the [APK](https://github.com/ricardoalcocer/alloy-widget-drawermenu/blob/master/ActionBar%20Demo/ActionBar%20Demo.apk?raw=true).


Apps
======
Send me a link to your app, or a pull request of the README.md file to showcase your app using this Widget.


Contribuitors
======

* [Ricardo Alcocer](https://github.com/ricardoalcocer)
* [Bert Grantges](https://github.com/grantges)
* [Victor Casé](https://github.com/casevictor)
* [HarkDev](https://github.com/HarkDev)

License
======
MIT - [http://alco.mit-license.org](http://alco.mit-license.org)