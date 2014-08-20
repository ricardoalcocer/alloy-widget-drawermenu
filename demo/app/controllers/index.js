var controls=require('controls');

// get main and menu view as objects
var menuView=controls.getMenuView();
var mainView=controls.getMainView();

// attach event listener to menu button
mainView.menuButton.add(controls.getMenuButton({
	h: '60',
	w: '60'
}));

//Minor changes to click event. Update the menuOpen status;
mainView.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget


// get config view as objects
var configView=controls.getConfigView();

//add menu view to ConfigView exposed by widget
configView.menuButton.add(controls.getMenuButton({
                h: '60',
                w: '60'
            }));

//Minor changes to click event. Update the menuOpen status;
configView.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
	$.drawermenu.menuOpen=!$.drawermenu.menuOpen;
}); // method is exposed by widget

$.drawermenu.init({
    menuview:menuView.getView(),
    mainview:mainView.getView(),
    duration:200,
    parent: $.index
});

//variable to controler de open/close slide
var activeView = 1;

// add event listener in this context
menuView.menuTable.addEventListener('click',function(e){
    $.drawermenu.showhidemenu();
    $.drawermenu.menuOpen = false; //update menuOpen status to prevent inconsistency.
    if(e.rowData.id==="row1"){
        if(activeView!=1){
            $.drawermenu.drawermainview.remove(configView.getView());
            activeView = 1;
        } else {
            activeView = 1;
        }
    } 
    if(e.rowData.id==="row2"){
        if(activeView!=2){
            $.drawermenu.drawermainview.add(configView.getView());
            activeView = 2;
        } else{
            activeView = 2;
        }
    }
    // on Android the event is received by the label, so watch out!
    Ti.API.info(e.rowData.id); 
});

$.index.open();
