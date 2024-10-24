define("userfrmHomeController", {
    //Type your controller code here 
});
define("frmHomeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmHomeController", ["userfrmHomeController", "frmHomeControllerActions"], function() {
    var controller = require("userfrmHomeController");
    var controllerActions = ["frmHomeControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
