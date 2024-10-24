define(function() {
    return function(controller) {
        var BiMonthlyCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "BiMonthlyCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxWhiteBorderRounded",
            "top": "0dp",
            "width": "420dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "BiMonthlyCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "BiMonthlyCalendar"), extendConfig({}, controller.args[2], "BiMonthlyCalendar"));
        BiMonthlyCalendar.setDefaultUnit(voltmx.flex.DP);
        var topCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "topCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "right": 10,
            "skin": "slFbox",
            "top": "10dp",
            "width": "400dp",
            "appName": "FacilityMaster"
        }, controller.args[0], "topCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "topCalendar"), extendConfig({}, controller.args[2], "topCalendar"));
        topCalendar.setDefaultUnit(voltmx.flex.DP);
        var flxSelector = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "40dp",
            "id": "flxSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxSelector"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSelector"), extendConfig({}, controller.args[2], "flxSelector"));
        flxSelector.setDefaultUnit(voltmx.flex.DP);
        var flxMonthSelector = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "100%",
            "id": "flxMonthSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxMonthSelector"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMonthSelector"), extendConfig({}, controller.args[2], "flxMonthSelector"));
        flxMonthSelector.setDefaultUnit(voltmx.flex.DP);
        var monthSelector = new com.hcl.mario.MonthSelector(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "monthSelector",
            "isVisible": true,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "right": 160,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "monthSelector",
            "overrides": {
                "MonthSelector": {
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared"
                }
            }
        }, controller.args[0], "monthSelector"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "monthSelector"), extendConfig({
            "overrides": {}
        }, controller.args[2], "monthSelector"));
        monthSelector.month = 1;
        monthSelector.year = 2023;
        var flxToday = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "100%",
            "id": "flxToday",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "40dp",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxToday"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxToday"), extendConfig({}, controller.args[2], "flxToday"));
        flxToday.setDefaultUnit(voltmx.flex.DP);
        var lblToday = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblToday",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblIconRed100",
            "text": "h",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblToday"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToday"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToday"));
        flxToday.add(lblToday);
        flxMonthSelector.add(monthSelector, flxToday);
        flxSelector.add(flxMonthSelector);
        var weekdaysTop = new com.hcl.mario.Weekdays(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "height": "40dp",
            "id": "weekdaysTop",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "overrides": {}
        }, controller.args[0], "weekdaysTop"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "weekdaysTop"), extendConfig({
            "overrides": {}
        }, controller.args[2], "weekdaysTop"));
        var flxCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": 10,
            "centerX": "50%",
            "clipBounds": true,
            "height": "320dp",
            "id": "flxCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "90dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCalendar"), extendConfig({}, controller.args[2], "flxCalendar"));
        flxCalendar.setDefaultUnit(voltmx.flex.DP);
        var week1 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week1",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week1",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week1"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week1"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week1"));
        var week2 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week2",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week2",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week2"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week2"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week2"));
        var week3 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week3",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week3",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week3"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week3"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week3"));
        var week4 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week4",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week4",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week4"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week4"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week4"));
        var week5 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week5",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week5",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week5"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week5"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week5"));
        var week6 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week6",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week6",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week6"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week6"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week6"));
        flxCalendar.add(week1, week2, week3, week4, week5, week6);
        topCalendar.add(flxSelector, weekdaysTop, flxCalendar);
        var bottomCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": 10,
            "clipBounds": false,
            "id": "bottomCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "right": 10,
            "skin": "slFbox",
            "top": "10dp",
            "width": "400dp",
            "appName": "FacilityMaster"
        }, controller.args[0], "bottomCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "bottomCalendar"), extendConfig({}, controller.args[2], "bottomCalendar"));
        bottomCalendar.setDefaultUnit(voltmx.flex.DP);
        var flxSelectorBottom = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "40dp",
            "id": "flxSelectorBottom",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxSelectorBottom"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSelectorBottom"), extendConfig({}, controller.args[2], "flxSelectorBottom"));
        flxSelectorBottom.setDefaultUnit(voltmx.flex.DP);
        var flxMonthSelectorBottom = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "100%",
            "id": "flxMonthSelectorBottom",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxMonthSelectorBottom"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMonthSelectorBottom"), extendConfig({}, controller.args[2], "flxMonthSelectorBottom"));
        flxMonthSelectorBottom.setDefaultUnit(voltmx.flex.DP);
        var monthSelectorBottom = new com.hcl.mario.MonthSelector(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "monthSelectorBottom",
            "isVisible": true,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "right": 160,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "monthSelectorBottom",
            "overrides": {
                "flxIcons": {
                    "isVisible": false
                },
                "MonthSelector": {
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared"
                }
            }
        }, controller.args[0], "monthSelectorBottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "monthSelectorBottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "monthSelectorBottom"));
        monthSelectorBottom.month = 1;
        monthSelectorBottom.year = 2023;
        flxMonthSelectorBottom.add(monthSelectorBottom);
        flxSelectorBottom.add(flxMonthSelectorBottom);
        var weekdaysBottom = new com.hcl.mario.Weekdays(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "height": "40dp",
            "id": "weekdaysBottom",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "overrides": {}
        }, controller.args[0], "weekdaysBottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "weekdaysBottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "weekdaysBottom"));
        var flxCalendarBottom = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": 10,
            "centerX": "50%",
            "clipBounds": true,
            "height": "320dp",
            "id": "flxCalendarBottom",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "90dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxCalendarBottom"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCalendarBottom"), extendConfig({}, controller.args[2], "flxCalendarBottom"));
        flxCalendarBottom.setDefaultUnit(voltmx.flex.DP);
        var week1Bottom = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week1Bottom",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week1Bottom",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week1Bottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week1Bottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week1Bottom"));
        var week2Bottom = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week2Bottom",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week2Bottom",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week2Bottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week2Bottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week2Bottom"));
        var week3Bottom = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week3Bottom",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week3Bottom",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week3Bottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week3Bottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week3Bottom"));
        var week4Bottom = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week4Bottom",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week4Bottom",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week4Bottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week4Bottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week4Bottom"));
        var week5Bottom = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week5Bottom",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week5Bottom",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week5Bottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week5Bottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week5Bottom"));
        var week6Bottom = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "20%",
            "id": "week6Bottom",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "week6Bottom",
            "overrides": {
                "MonthlyCalendarWeek": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "week6Bottom"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week6Bottom"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week6Bottom"));
        flxCalendarBottom.add(week1Bottom, week2Bottom, week3Bottom, week4Bottom, week5Bottom, week6Bottom);
        bottomCalendar.add(flxSelectorBottom, weekdaysBottom, flxCalendarBottom);
        BiMonthlyCalendar.add(topCalendar, bottomCalendar);
        return BiMonthlyCalendar;
    }
})