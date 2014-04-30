function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        top: 20,
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
    var menu = Alloy.createController("menu").getView();
    menu.addEventListener("click", function(e) {
        mainLabel.text = "Clicked on row with ID : " + e.rowData.rowId;
        $.drawermenu.showhidemenu();
    });
    var main = Ti.UI.createView({
        backgroundColor: "#cacaca"
    });
    var mainLabel = Ti.UI.createLabel({
        text: "MAIN"
    });
    main.add(mainLabel);
    main.addEventListener("click", function() {
        $.drawermenu.showhidemenu();
    });
    $.drawermenu.init({
        menuview: menu,
        mainview: main,
        duration: 200,
        parent: $.index
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;