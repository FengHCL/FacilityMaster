define("com/hcl/mario/TimeSelector/userTimeSelectorController", function() {
    const ROW_HEIGHT = 30;
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.initData();
            this.view.flxCancel.onClick = () => this.view.isVisible = false;
            this.view.flxOk.onClick = () => {
                this.onSelect(this.selectedTime, this.widgetId);
                this.view.isVisible = false;
            };
            this.view.preShow = () => {
                if (!this.initDone) {
                    this.view.flxHoursContainer.onScrollEnd = () => {
                        if (this.initHoursDone) {
                            const contentOffsetMeasured = this.view.flxHoursContainer.contentOffsetMeasured.y;
                            const selectedHours = Math.round(contentOffsetMeasured / ROW_HEIGHT);
                            if (this.view.flxHoursContainer.contentOffset.y !== selectedHours * ROW_HEIGHT) {
                                this.view.flxHoursContainer.contentOffset = {
                                    x: 0,
                                    y: selectedHours * ROW_HEIGHT
                                };
                            }
                            this.selectedTime = `${this.formatDigit(selectedHours)}:${this.formatDigit(this.selectedTime.split(':')[1])}`;
                        } else {
                            this.initHoursDone = true;
                        }
                    };
                    this.view.flxMinutesContainer.onScrollEnd = () => {
                        if (this.initMinutesDone) {
                            const contentOffsetMeasured = this.view.flxMinutesContainer.contentOffsetMeasured.y;
                            const selectedMinutes = Math.round(contentOffsetMeasured / ROW_HEIGHT);
                            if (this.view.flxMinutesContainer.contentOffset.y !== selectedMinutes * ROW_HEIGHT) {
                                this.view.flxMinutesContainer.contentOffset = {
                                    x: 0,
                                    y: selectedMinutes * ROW_HEIGHT
                                };
                            }
                            this.selectedTime = `${this.formatDigit(this.selectedTime.split(':')[0])}:${this.formatDigit(selectedMinutes)}`;
                        } else {
                            this.initMinutesDone = true;
                        }
                    };
                    this.initDone = true;
                }
            };
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        initData() {
            let count = 0;
            this.view.flxHours.removeAll();
            this.view.flxHours.add(this.getEmptyElement(count++));
            this.view.flxHours.add(this.getEmptyElement(count++));
            for (let i = 0; i < 24; i++) {
                const element = this.getEmptyElement(count++);
                element.text = this.formatDigit(i);
                this.view.flxHours.add(element);
            }
            this.view.flxHours.add(this.getEmptyElement(count++));
            this.view.flxHours.add(this.getEmptyElement(count++));
            this.view.flxMinutes.removeAll();
            this.view.flxMinutes.add(this.getEmptyElement(count++));
            this.view.flxMinutes.add(this.getEmptyElement(count++));
            for (let i = 0; i < 60; i++) {
                const element = this.getEmptyElement(count++);
                element.text = this.formatDigit(i);
                this.view.flxMinutes.add(element);
            }
            this.view.flxMinutes.add(this.getEmptyElement(count++));
            this.view.flxMinutes.add(this.getEmptyElement(count++));
        },
        show(selectedTime, widgetId) {
            //selectedTime has the format hh:mm
            this.widgetId = widgetId;
            this.selectedTime = selectedTime || '00:00';
            const selectedTimeValues = selectedTime.split(':');
            this.initHoursDone = false;
            this.initMinutesDone = false;
            voltmx.timer.schedule('myTimer', () => {
                this.view.isVisible = true;
                this.view.flxHoursContainer.contentOffset = {
                    x: 0,
                    y: `${parseInt(selectedTimeValues[0]) * ROW_HEIGHT}dp`
                };
                this.view.flxMinutesContainer.contentOffset = {
                    x: 0,
                    y: `${parseInt(selectedTimeValues[1]) * ROW_HEIGHT}dp`
                };
            }, 0.1, false);
        },
        getEmptyElement(prefix) {
            return new com.hcl.mario.TimeSelectorElement({
                id: `element${prefix}`
            }, {}, {});
        },
        formatDigit(i) {
            return `${i}`.length === 1 ? `0${i}` : `${i}`;
        },
        onSelect() {}
    };
});
define("com/hcl/mario/TimeSelector/TimeSelectorControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/TimeSelector/TimeSelectorController", ["com/hcl/mario/TimeSelector/userTimeSelectorController", "com/hcl/mario/TimeSelector/TimeSelectorControllerActions"], function() {
    var controller = require("com/hcl/mario/TimeSelector/userTimeSelectorController");
    var actions = require("com/hcl/mario/TimeSelector/TimeSelectorControllerActions");
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
