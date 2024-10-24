define(function() {
    return function(controller) {
        var DateSelector = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "DateSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "DateSelector"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "DateSelector"), extendConfig({}, controller.args[2], "DateSelector"));
        DateSelector.setDefaultUnit(voltmx.flex.DP);
        var flxBackground = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxBackground",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinBackground",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxBackground"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxBackground"), extendConfig({}, controller.args[2], "flxBackground"));
        flxBackground.setDefaultUnit(voltmx.flex.DP);
        flxBackground.add();
        var flxDateSelector = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "id": "flxDateSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "skinFlxPopup",
            "width": "300dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxDateSelector"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDateSelector"), extendConfig({}, controller.args[2], "flxDateSelector"));
        flxDateSelector.setDefaultUnit(voltmx.flex.DP);
        var cmpCalendar = new com.hcl.mario.MonthlyCalendar(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "id": "cmpCalendar",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "skinFlxWhiteBorderRounded",
            "top": "0dp",
            "width": "298dp",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "cmpCalendar",
            "overrides": {
                "MonthlyCalendar": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "height": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "cmpCalendar"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "cmpCalendar"), extendConfig({
            "overrides": {}
        }, controller.args[2], "cmpCalendar"));
        cmpCalendar.selectedDate = "";
        cmpCalendar.visibleDates = "";
        cmpCalendar.eventTypes = {
            "data": [],
            "schema": [{
                "columnHeaderTemplate": null,
                "columnHeaderText": "eventType",
                "columnHeaderType": "text",
                "columnID": "eventType",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "fa8ff5e11ecc4319bd8bce593d296436"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "skinAll",
                "columnHeaderType": "text",
                "columnID": "skinAll",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "e97c0269077b4f6b9cdd03d2438e036a"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "skinPartial",
                "columnHeaderType": "text",
                "columnID": "skinPartial",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "h5777b978b094dfdb0ceb44583a4c458"
            }]
        };
        cmpCalendar.weekRowHeight = "30";
        flxDateSelector.add(cmpCalendar);
        DateSelector.add(flxBackground, flxDateSelector);
        return DateSelector;
    }
})