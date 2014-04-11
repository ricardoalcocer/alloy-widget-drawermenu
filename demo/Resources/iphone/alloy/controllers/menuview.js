function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "blue",
        id: "menuView"
    });
    $.__views.menuView && $.addTopLevelView($.__views.menuView);
    $.__views.menuTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#3D3D3D",
        layout: "horizontal",
        id: "menuTopBar"
    });
    $.__views.menuView.add($.__views.menuTopBar);
    var __alloyId3 = [];
    $.__views.row1 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "row1"
    });
    __alloyId3.push($.__views.row1);
    $.__views.rowContainer = Ti.UI.createView({
        height: "30dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row1.add($.__views.rowContainer);
    $.__views.rowSkull = Ti.UI.createView({
        left: 5,
        top: 7,
        width: "20dp",
        height: "20dp",
        backgroundImage: "/21-skull.png",
        id: "rowSkull"
    });
    $.__views.rowContainer.add($.__views.rowSkull);
    $.__views.rowLabel = Ti.UI.createLabel({
        top: 7,
        left: 10,
        height: "20dp",
        font: {
            fontSize: "15dp"
        },
        color: "#000",
        text: "Home",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.row2 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "row2"
    });
    __alloyId3.push($.__views.row2);
    $.__views.rowContainer = Ti.UI.createView({
        height: "30dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row2.add($.__views.rowContainer);
    $.__views.rowGear = Ti.UI.createView({
        left: 5,
        top: 7,
        width: "20dp",
        height: "20dp",
        backgroundImage: "/19-gear.png",
        id: "rowGear"
    });
    $.__views.rowContainer.add($.__views.rowGear);
    $.__views.rowLabel = Ti.UI.createLabel({
        top: 7,
        left: 10,
        height: "20dp",
        font: {
            fontSize: "15dp"
        },
        color: "#000",
        text: "Configurations",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.menuTable = Ti.UI.createTableView({
        separatorStyle: "NONE",
        separatorColor: "transparent",
        backgroundColor: "#F2F2F2",
        data: __alloyId3,
        id: "menuTable"
    });
    $.__views.menuView.add($.__views.menuTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;