function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "config";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mainView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#cacaca",
        id: "mainView"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.mainTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#5B96B2",
        layout: "horizontal",
        id: "mainTopBar"
    });
    $.__views.mainView.add($.__views.mainTopBar);
    $.__views.menuButton = Ti.UI.createView({
        width: "60dp",
        height: "60dp",
        id: "menuButton"
    });
    $.__views.mainTopBar.add($.__views.menuButton);
    var __alloyId1 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId1.push($.__views.row);
    $.__views.view = Ti.UI.createView({
        id: "view",
        backgroundColor: "red",
        width: "20",
        height: "20"
    });
    $.__views.row.add($.__views.view);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        data: __alloyId1,
        id: "__alloyId0"
    });
    $.__views.mainView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;