define("userflxResourcesHeaderController", {
    //Type your controller code here 
});
define("flxResourcesHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxResourcesHeaderController", ["userflxResourcesHeaderController", "flxResourcesHeaderControllerActions"], function() {
    var controller = require("userflxResourcesHeaderController");
    var controllerActions = ["flxResourcesHeaderControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
