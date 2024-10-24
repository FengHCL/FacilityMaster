define("com/hcl/mario/Weekdays/userWeekdaysController", function() {
    return {};
});
define("com/hcl/mario/Weekdays/WeekdaysControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/Weekdays/WeekdaysController", ["com/hcl/mario/Weekdays/userWeekdaysController", "com/hcl/mario/Weekdays/WeekdaysControllerActions"], function() {
    var controller = require("com/hcl/mario/Weekdays/userWeekdaysController");
    var actions = require("com/hcl/mario/Weekdays/WeekdaysControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
