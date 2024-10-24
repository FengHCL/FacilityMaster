define("com/hcl/mario/MonthlyCalendarWeek/userMonthlyCalendarWeekController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        removeAll() {
            this.view.removeAll();
        },
        add(widget) {
            this.view.add(widget);
        },
        widgets() {
            return this.view.widgets();
        }
    };
});
define("com/hcl/mario/MonthlyCalendarWeek/MonthlyCalendarWeekControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/MonthlyCalendarWeek/MonthlyCalendarWeekController", ["com/hcl/mario/MonthlyCalendarWeek/userMonthlyCalendarWeekController", "com/hcl/mario/MonthlyCalendarWeek/MonthlyCalendarWeekControllerActions"], function() {
    var controller = require("com/hcl/mario/MonthlyCalendarWeek/userMonthlyCalendarWeekController");
    var actions = require("com/hcl/mario/MonthlyCalendarWeek/MonthlyCalendarWeekControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
