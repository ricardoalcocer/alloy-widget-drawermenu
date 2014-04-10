function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.drawermenu.widget/" + s : s.substring(0, index) + "/com.drawermenu.widget/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("com.drawermenu.widget");
    this.__widgetId = "com.drawermenu.widget";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.drawermenuview = Ti.UI.createView({
        id: "drawermenuview"
    });
    $.__views.drawermenuview && $.addTopLevelView($.__views.drawermenuview);
    $.__views.drawermainview = Ti.UI.createView({
        id: "drawermainview"
    });
    $.__views.drawermainview && $.addTopLevelView($.__views.drawermainview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var menuOpen = false;
    var showhidemenu = function() {
        if (menuOpen) {
            moveTo = "0";
            menuOpen = false;
        } else {
            moveTo = "250dp";
            menuOpen = true;
        }
        $.drawermainview.width = Ti.Platform.displayCaps.platformWidth;
        $.drawermainview.animate({
            left: moveTo,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 400
        });
    };
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.drawermainview.width = Ti.Platform.displayCaps.platformWidth;
    });
    exports.showhidemenu = showhidemenu;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;