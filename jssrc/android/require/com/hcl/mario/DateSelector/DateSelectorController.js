define("com/hcl/mario/DateSelector/userDateSelectorController", function() {
    return {
        constructor(baseConfig, layoutConfig, pspConfig) {
            this.view.flxBackground.onClick = () => this.view.isVisible = false;
            this.view.cmpCalendar.onSelect = (selectedDate) => {
                this.view.isVisible = false;
                this.onSelect(selectedDate, this.widgetId);
            };
        },
        initGettersSetters() {
            defineGetter(this, 'widgetId', () => {
                return this._widgetId;
            });
            defineSetter(this, 'widgetId', value => {
                this._widgetId = value;
            });
        },
        show(selectedDate, widgetId) {
            this.widgetId = widgetId;
            if (selectedDate) {
                this.view.cmpCalendar.selectedDate = selectedDate;
                this.view.cmpCalendar.refresh();
            }
            this.view.isVisible = true;
        },
        onSelect() {}
    };
});
define("com/hcl/mario/DateSelector/DateSelectorControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/DateSelector/DateSelectorController", ["com/hcl/mario/DateSelector/userDateSelectorController", "com/hcl/mario/DateSelector/DateSelectorControllerActions"], function() {
    var controller = require("com/hcl/mario/DateSelector/userDateSelectorController");
    var actions = require("com/hcl/mario/DateSelector/DateSelectorControllerActions");
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
