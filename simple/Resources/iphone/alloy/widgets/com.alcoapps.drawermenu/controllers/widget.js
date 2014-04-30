function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.alcoapps.drawermenu/" + s : s.substring(0, index) + "/com.alcoapps.drawermenu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.alcoapps.drawermenu");
    this.__widgetId = "com.alcoapps.drawermenu";
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
    var duration = 400;
    var parent;
    var init = function(opts) {
        $.drawermainview.add(opts.mainview);
        $.drawermenuview.add(opts.menuview);
        duration = opts.duration;
        parent = opts.parent;
        console.log("initialized");
        setSwipe();
    };
    var setSwipe = function() {
        parent.addEventListener("swipe", function(e) {
            if (false == menuOpen && "right" == e.direction) {
                showhidemenu();
                menuOpen = true;
            }
            if (true == menuOpen && "left" == e.direction) {
                showhidemenu();
                menuOpen = false;
            }
        });
    };
    var showhidemenu = function() {
        if (menuOpen) {
            moveTo = "0";
            menuOpen = false;
        } else {
            moveTo = "250dp";
            menuOpen = true;
        }
        var newWidth = Ti.Platform.displayCaps.platformWidth;
        $.drawermainview.width = newWidth;
        $.drawermainview.animate({
            left: moveTo,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: duration
        });
    };
    Ti.Gesture.addEventListener("orientationchange", function() {
        var newWidth;
        newWidth = Ti.Platform.displayCaps.platformWidth;
        $.drawermainview.width = newWidth;
    });
    exports.init = init;
    exports.showhidemenu = showhidemenu;
    exports.menuOpen = menuOpen;
    exports.setDuration = function(dur) {
        duration = dur;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;