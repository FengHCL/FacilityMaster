define(function() {
    return function(controller) {
        var MonthlyCalendarWeek = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "20%",
            "id": "MonthlyCalendarWeek",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "MonthlyCalendarWeek"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "MonthlyCalendarWeek"), extendConfig({}, controller.args[2], "MonthlyCalendarWeek"));
        MonthlyCalendarWeek.setDefaultUnit(voltmx.flex.DP);
        var day1 = new com.hcl.mario.MonthlyCalendarDay(extendConfig({
            "height": "100%",
            "id": "day1",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "day1",
            "overrides": {
                "MonthlyCalendarDay": {
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
        }, controller.args[0], "day1"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "day1"), extendConfig({
            "overrides": {}
        }, controller.args[2], "day1"));
        day1.month = 1;
        day1.day = 1;
        day1.year = 2023;
        var day2 = new com.hcl.mario.MonthlyCalendarDay(extendConfig({
            "height": "100%",
            "id": "day2",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "day2",
            "overrides": {
                "MonthlyCalendarDay": {
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
        }, controller.args[0], "day2"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "day2"), extendConfig({
            "overrides": {}
        }, controller.args[2], "day2"));
        day2.month = 1;
        day2.day = 1;
        day2.year = 2023;
        var day3 = new com.hcl.mario.MonthlyCalendarDay(extendConfig({
            "height": "100%",
            "id": "day3",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "day3",
            "overrides": {
                "MonthlyCalendarDay": {
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
        }, controller.args[0], "day3"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "day3"), extendConfig({
            "overrides": {}
        }, controller.args[2], "day3"));
        day3.month = 1;
        day3.day = 1;
        day3.year = 2023;
        var day4 = new com.hcl.mario.MonthlyCalendarDay(extendConfig({
            "height": "100%",
            "id": "day4",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "day4",
            "overrides": {
                "MonthlyCalendarDay": {
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
        }, controller.args[0], "day4"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "day4"), extendConfig({
            "overrides": {}
        }, controller.args[2], "day4"));
        day4.month = 1;
        day4.day = 1;
        day4.year = 2023;
        var day5 = new com.hcl.mario.MonthlyCalendarDay(extendConfig({
            "height": "100%",
            "id": "day5",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "day5",
            "overrides": {
                "MonthlyCalendarDay": {
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
        }, controller.args[0], "day5"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "day5"), extendConfig({
            "overrides": {}
        }, controller.args[2], "day5"));
        day5.month = 1;
        day5.day = 1;
        day5.year = 2023;
        var day6 = new com.hcl.mario.MonthlyCalendarDay(extendConfig({
            "height": "100%",
            "id": "day6",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "day6",
            "overrides": {
                "MonthlyCalendarDay": {
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
        }, controller.args[0], "day6"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "day6"), extendConfig({
            "overrides": {}
        }, controller.args[2], "day6"));
        day6.month = 1;
        day6.day = 1;
        day6.year = 2023;
        var day7 = new com.hcl.mario.MonthlyCalendarDay(extendConfig({
            "height": "100%",
            "id": "day7",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "day7",
            "overrides": {
                "MonthlyCalendarDay": {
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
        }, controller.args[0], "day7"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "day7"), extendConfig({
            "overrides": {}
        }, controller.args[2], "day7"));
        day7.month = 1;
        day7.day = 1;
        day7.year = 2023;
        MonthlyCalendarWeek.add(day1, day2, day3, day4, day5, day6, day7);
        return MonthlyCalendarWeek;
    }
})