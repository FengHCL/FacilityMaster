define("userfrmLoginController", {
    //Type your controller code here 
});
define("frmLoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f427a50b48ee4053aa75078dd1e6f791: function AS_Button_f427a50b48ee4053aa75078dd1e6f791(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation({
            "appName": "FacilityMaster",
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
