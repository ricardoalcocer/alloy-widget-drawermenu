function WPATH(s) {
    var index = s.lastIndexOf("/"), path = -1 === index ? "com.drawermenu.widget/" + s : s.substring(0, index) + "/com.drawermenu.widget/" + s.substring(index + 1);
    return path;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.drawermenuview = Ti.UI.createView({
        id: "drawermenuview"
    });
    $.addTopLevelView($.__views.drawermenuview);
    $.__views.drawermainview = Ti.UI.createView({
        id: "drawermainview"
    });
    $.addTopLevelView($.__views.drawermainview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var menuOpen = !1, showhidemenu = function() {
        if (menuOpen) {
            moveTo = "0";
            menuOpen = !1;
        } else {
            moveTo = "250dp";
            menuOpen = !0;
        }
        $.drawermainview.width = Ti.Platform.displayCaps.platformWidth;
        $.drawermainview.animate({
            left: moveTo,
            duration: 100
        });
    };
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.drawermainview.width = Ti.Platform.displayCaps.platformWidth;
    });
    exports.showhidemenu = showhidemenu;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;