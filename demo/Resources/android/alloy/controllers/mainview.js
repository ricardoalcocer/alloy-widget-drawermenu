function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mainview";
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
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.mainView.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;