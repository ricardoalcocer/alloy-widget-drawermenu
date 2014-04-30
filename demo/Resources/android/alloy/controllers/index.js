function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        top: 20,
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT ],
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.drawermenu = Alloy.createWidget("com.alcoapps.drawermenu", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.index
    });
    $.__views.drawermenu.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var controls = require("controls");
    var menuView = controls.getMenuView();
    var mainView = controls.getMainView();
    $.drawermenu.drawermenuview.add(menuView.getView());
    $.drawermenu.setDuration(200);
    mainView.menuButton.add(controls.getMenuButton({
        h: "60",
        w: "60"
    }));
    mainView.menuButton.addEventListener("click", function() {
        $.drawermenu.showhidemenu();
        $.drawermenu.menuOpen = !$.drawermenu.menuOpen;
    });
    $.drawermenu.drawermainview.add(mainView.getView());
    var configView = controls.getConfigView();
    configView.menuButton.add(controls.getMenuButton({
        h: "60",
        w: "60"
    }));
    configView.menuButton.addEventListener("click", function() {
        $.drawermenu.showhidemenu();
        $.drawermenu.menuOpen = !$.drawermenu.menuOpen;
    });
    var activeView = 1;
    menuView.menuTable.addEventListener("click", function(e) {
        $.drawermenu.showhidemenu();
        $.drawermenu.menuOpen = false;
        if ("row1" === e.rowData.id) if (1 != activeView) {
            $.drawermenu.drawermainview.remove(configView.getView());
            activeView = 1;
        } else activeView = 1;
        if ("row2" === e.rowData.id) if (2 != activeView) {
            $.drawermenu.drawermainview.add(configView.getView());
            activeView = 2;
        } else activeView = 2;
        Ti.API.info(e.rowData.id);
    });
    $.index.addEventListener("swipe", function(e) {
        if (false == $.drawermenu.menuOpen && "right" == e.direction) {
            $.drawermenu.showhidemenu();
            $.drawermenu.menuOpen = true;
        }
        if (true == $.drawermenu.menuOpen && "left" == e.direction) {
            $.drawermenu.showhidemenu();
            $.drawermenu.menuOpen = false;
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;