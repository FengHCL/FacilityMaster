define("com/hcl/kra/FieldDate/userFieldDateController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.onClick = () => this.onOpenSelector();
        },
        initGettersSetters: function() {},
        onOpenSelector() {}
    };
});
define("com/hcl/kra/FieldDate/FieldDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/kra/FieldDate/FieldDateController", ["com/hcl/kra/FieldDate/userFieldDateController", "com/hcl/kra/FieldDate/FieldDateControllerActions"], function() {
    var controller = require("com/hcl/kra/FieldDate/userFieldDateController");
    var actions = require("com/hcl/kra/FieldDate/FieldDateControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "label", function(val) {
            this.view.lblLabel.text = val;
        });
        defineGetter(this, "label", function() {
            return this.view.lblLabel.text;
        });
        defineSetter(this, "value", function(val) {
            this.view.lblWidget.text = val;
        });
        defineGetter(this, "value", function() {
            return this.view.lblWidget.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
