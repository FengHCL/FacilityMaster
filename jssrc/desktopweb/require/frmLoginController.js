define("userfrmLoginController", {
    //Type your controller code here 
});
define("frmLoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f6e9c850db944b3daa325b552ba5d7d4: function AS_Button_f6e9c850db944b3daa325b552ba5d7d4(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "KRADemo",
            "friendlyName": "frmHome"
        });
        ntf.navigate();
    }
});
define("frmLoginController", ["userfrmLoginController", "frmLoginControllerActions"], function() {
    var controller = require("userfrmLoginController");
    var controllerActions = ["frmLoginControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
