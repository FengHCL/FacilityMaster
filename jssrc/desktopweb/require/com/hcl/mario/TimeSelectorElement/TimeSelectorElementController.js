define("com/hcl/mario/TimeSelectorElement/userTimeSelectorElementController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/hcl/mario/TimeSelectorElement/TimeSelectorElementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/TimeSelectorElement/TimeSelectorElementController", ["com/hcl/mario/TimeSelectorElement/userTimeSelectorElementController", "com/hcl/mario/TimeSelectorElement/TimeSelectorElementControllerActions"], function() {
    var controller = require("com/hcl/mario/TimeSelectorElement/userTimeSelectorElementController");
    var actions = require("com/hcl/mario/TimeSelectorElement/TimeSelectorElementControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "text", function(val) {
            this.view.lblElement.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.lblElement.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
