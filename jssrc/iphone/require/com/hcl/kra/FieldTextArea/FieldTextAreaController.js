define("com/hcl/kra/FieldTextArea/userFieldTextAreaController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/hcl/kra/FieldTextArea/FieldTextAreaControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/kra/FieldTextArea/FieldTextAreaController", ["com/hcl/kra/FieldTextArea/userFieldTextAreaController", "com/hcl/kra/FieldTextArea/FieldTextAreaControllerActions"], function() {
    var controller = require("com/hcl/kra/FieldTextArea/userFieldTextAreaController");
    var actions = require("com/hcl/kra/FieldTextArea/FieldTextAreaControllerActions");
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
            this.view.txaWidget.text = val;
        });
        defineGetter(this, "value", function() {
            return this.view.txaWidget.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
