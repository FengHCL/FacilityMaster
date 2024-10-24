define("userfrmAllocationController", {
    //Type your controller code here 
});
define("frmAllocationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmAllocationController", ["userfrmAllocationController", "frmAllocationControllerActions"], function() {
    var controller = require("userfrmAllocationController");
    var controllerActions = ["frmAllocationControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
