define("com/hcl/mario/DayEventLine/userDayEventLineController", function() {
    return {
        constructor(baseConfig, layoutConfig, pspConfig) {},
        initGettersSetters() {
            defineGetter(this, 'space', () => {
                return this._space;
            });
            defineSetter(this, 'space', value => {
                this._space = value;
                this.view.flxCenter.isVisible = (value === 'center' || value === 'left' || value === 'right');
                this.view.flxRight.isVisible = (value === 'right' || value === 'all');
                this.view.flxLeft.isVisible = (value === 'left' || value === 'all');
            });
            defineGetter(this, 'eventId', () => {
                return this._eventId;
            });
            defineSetter(this, 'eventId', value => {
                this._eventId = value;
            });
        },
        reset() {
            this.view.flxCenter.skin = 'slFbox';
            this.view.flxRight.skin = 'slFbox';
            this.view.flxLeft.skin = 'slFbox';
            this.space = 'none';
            this.eventId = null;
        }
    };
});
define("com/hcl/mario/DayEventLine/DayEventLineControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/DayEventLine/DayEventLineController", ["com/hcl/mario/DayEventLine/userDayEventLineController", "com/hcl/mario/DayEventLine/DayEventLineControllerActions"], function() {
    var controller = require("com/hcl/mario/DayEventLine/userDayEventLineController");
    var actions = require("com/hcl/mario/DayEventLine/DayEventLineControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "skinCenter", function(val) {
            this.view.flxCenter.skin = val;
        });
        defineGetter(this, "skinCenter", function() {
            return this.view.flxCenter.skin;
        });
        defineSetter(this, "skinRight", function(val) {
            this.view.flxRight.skin = val;
        });
        defineGetter(this, "skinRight", function() {
            return this.view.flxRight.skin;
        });
        defineSetter(this, "skinLeft", function(val) {
            this.view.flxLeft.skin = val;
        });
        defineGetter(this, "skinLeft", function() {
            return this.view.flxLeft.skin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
