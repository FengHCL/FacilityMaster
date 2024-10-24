define("userflxResourcesController", {
    //Type your controller code here 
});
define("flxResourcesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxResourcesController", ["userflxResourcesController", "flxResourcesControllerActions"], function() {
    var controller = require("userflxResourcesController");
    var controllerActions = ["flxResourcesControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
