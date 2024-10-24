define("com/hcl/mario/MonthlyCalendarDay/userMonthlyCalendarDayController", function() {
    const SKIN_PARTIAL_HOLIDAY = 'skinPartialHoliday';
    const SKIN_CENTER_HOLIDAY = 'skinCenterHoliday';
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.preShow = () => {
                if (!this.initDone) {
                    this.initDone = true;
                }
            };
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineGetter(this, 'month', () => {
                return this._month;
            });
            defineSetter(this, 'month', value => {
                this._month = value;
            });
            defineGetter(this, 'day', () => {
                return this._day;
            });
            defineSetter(this, 'day', value => {
                this._day = value;
                this.view.lblDay.text = `${ value }`;
            });
            defineGetter(this, 'year', () => {
                return this._year;
            });
            defineSetter(this, 'year', value => {
                this._year = value;
            });
        },
        getDate() {
            const addZero = (num) => {
                num = `${num}`;
                if (num.length === 1) {
                    return `0${num}`;
                }
                return num;
            };
            return `${this.year}-${addZero(this.month)}-${addZero(this.day)}`;
        },
        addEventLine({
            eventId,
            space,
            position,
            skinAll,
            skinPartial
        }) {
            const weekDay = new Date(this.year, this.month - 1, this.day).getDay();
            const dayEventLine = this.view[`dayEventLine${position}`];
            dayEventLine.eventId = eventId;
            dayEventLine.space = space;
            const calendarUtils = require('com/hcl/mario/MonthlyCalendarDay/CalendarUtils');
            dayEventLine.skinLeft = calendarUtils.isHoliday({
                day: this.day,
                month: this.month,
                year: this.year
            }) ? SKIN_PARTIAL_HOLIDAY : skinPartial;
            dayEventLine.skinRight = calendarUtils.isHoliday({
                day: this.day,
                month: this.month,
                year: this.year
            }) ? SKIN_PARTIAL_HOLIDAY : skinPartial;
            dayEventLine.skinCenter = calendarUtils.isHoliday({
                day: this.day,
                month: this.month,
                year: this.year
            }) ? SKIN_CENTER_HOLIDAY : skinAll;
        },
        resetEventLines() {
            this.view.flxEvents.widgets().forEach((eventLine) => eventLine.reset());
        },
        getFirstEmptyLine() {
            let ret = 0;
            for (let i = 1; i <= 5; i++) {
                if (this.view.flxEvents.widgets()[i - 1].space === 'none') {
                    ret = i;
                    break;
                }
            }
            return ret;
        },
        onDayClick() {}
    };
});
define("com/hcl/mario/MonthlyCalendarDay/MonthlyCalendarDayControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/MonthlyCalendarDay/MonthlyCalendarDayController", ["com/hcl/mario/MonthlyCalendarDay/userMonthlyCalendarDayController", "com/hcl/mario/MonthlyCalendarDay/MonthlyCalendarDayControllerActions"], function() {
    var controller = require("com/hcl/mario/MonthlyCalendarDay/userMonthlyCalendarDayController");
    var actions = require("com/hcl/mario/MonthlyCalendarDay/MonthlyCalendarDayControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "skinDay", function(val) {
            this.view.lblDay.skin = val;
        });
        defineGetter(this, "skinDay", function() {
            return this.view.lblDay.skin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onDayClick_u346e6a31a594e1697a054cec1264311 = function() {
        if (this.onDayClick) {
            this.onDayClick.apply(this, arguments);
        }
    }
    return controller;
});
