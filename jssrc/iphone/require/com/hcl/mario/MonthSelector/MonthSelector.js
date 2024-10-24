define(function() {
    return function(controller) {
        var MonthSelector = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "isMaster": true,
            "height": "40dp",
            "id": "MonthSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "MonthSelector"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "MonthSelector"), extendConfig({}, controller.args[2], "MonthSelector"));
        MonthSelector.setDefaultUnit(voltmx.flex.DP);
        var flxMonth = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxMonth",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxMonth"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMonth"), extendConfig({}, controller.args[2], "flxMonth"));
        flxMonth.setDefaultUnit(voltmx.flex.DP);
        var flxIcons = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxIcons",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "45dp",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxIcons"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxIcons"), extendConfig({}, controller.args[2], "flxIcons"));
        flxIcons.setDefaultUnit(voltmx.flex.DP);
        var flxRight = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxRight"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRight"), extendConfig({}, controller.args[2], "flxRight"));
        flxRight.setDefaultUnit(voltmx.flex.DP);
        var lblRight = new voltmx.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblRight",
            "isVisible": true,
            "left": 0,
            "skin": "sknlIconCalendarRed",
            "text": "d",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRight"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRight"));
        flxRight.add(lblRight);
        var flxLeft = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxLeft"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLeft"), extendConfig({}, controller.args[2], "flxLeft"));
        flxLeft.setDefaultUnit(voltmx.flex.DP);
        var lblLeft = new voltmx.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblLeft",
            "isVisible": true,
            "left": 0,
            "skin": "sknlIconCalendarRed",
            "text": "g",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLeft"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLeft"));
        flxLeft.add(lblLeft);
        flxIcons.add(flxRight, flxLeft);
        var lblMonth = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblMonth",
            "isVisible": true,
            "left": "10dp",
            "right": "40dp",
            "skin": "sknLblMonthCalendar",
            "text": "September 2023",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblMonth"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMonth"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMonth"));
        flxMonth.add(flxIcons, lblMonth);
        MonthSelector.add(flxMonth);
        return MonthSelector;
    }
})