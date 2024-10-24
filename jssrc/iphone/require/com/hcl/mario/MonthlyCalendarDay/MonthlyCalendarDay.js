define(function() {
    return function(controller) {
        var MonthlyCalendarDay = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "MonthlyCalendarDay",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxDaySelected",
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "MonthlyCalendarDay"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "MonthlyCalendarDay"), extendConfig({}, controller.args[2], "MonthlyCalendarDay"));
        MonthlyCalendarDay.setDefaultUnit(voltmx.flex.DP);
        var flxContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_onDayClick_u346e6a31a594e1697a054cec1264311,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxContent"), extendConfig({}, controller.args[2], "flxContent"));
        flxContent.setDefaultUnit(voltmx.flex.DP);
        var lblDay = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "30%",
            "id": "lblDay",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinDaySelected",
            "text": "x",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDay"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDay"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDay"));
        var flxEvents = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": false,
            "height": "70%",
            "id": "flxEvents",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30%",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxEvents"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEvents"), extendConfig({}, controller.args[2], "flxEvents"));
        flxEvents.setDefaultUnit(voltmx.flex.DP);
        var dayEventLine1 = new com.hcl.mario.DayEventLine(extendConfig({
            "height": "15%",
            "id": "dayEventLine1",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "dayEventLine1",
            "overrides": {
                "DayEventLine": {
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
        }, controller.args[0], "dayEventLine1"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "dayEventLine1"), extendConfig({
            "overrides": {}
        }, controller.args[2], "dayEventLine1"));
        dayEventLine1.space = "none";
        dayEventLine1.eventId = "";
        dayEventLine1.onClick = controller.AS_onDayClick_u346e6a31a594e1697a054cec1264311;
        var dayEventLine2 = new com.hcl.mario.DayEventLine(extendConfig({
            "height": "15%",
            "id": "dayEventLine2",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "dayEventLine2",
            "overrides": {
                "DayEventLine": {
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
        }, controller.args[0], "dayEventLine2"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "dayEventLine2"), extendConfig({
            "overrides": {}
        }, controller.args[2], "dayEventLine2"));
        dayEventLine2.space = "none";
        dayEventLine2.eventId = "";
        dayEventLine2.onClick = controller.AS_onDayClick_u346e6a31a594e1697a054cec1264311;
        var dayEventLine3 = new com.hcl.mario.DayEventLine(extendConfig({
            "height": "15%",
            "id": "dayEventLine3",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "dayEventLine3",
            "overrides": {
                "DayEventLine": {
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
        }, controller.args[0], "dayEventLine3"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "dayEventLine3"), extendConfig({
            "overrides": {}
        }, controller.args[2], "dayEventLine3"));
        dayEventLine3.space = "none";
        dayEventLine3.eventId = "";
        dayEventLine3.onClick = controller.AS_onDayClick_u346e6a31a594e1697a054cec1264311;
        var dayEventLine4 = new com.hcl.mario.DayEventLine(extendConfig({
            "height": "15%",
            "id": "dayEventLine4",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "dayEventLine4",
            "overrides": {
                "DayEventLine": {
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
        }, controller.args[0], "dayEventLine4"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "dayEventLine4"), extendConfig({
            "overrides": {}
        }, controller.args[2], "dayEventLine4"));
        dayEventLine4.space = "none";
        dayEventLine4.eventId = "";
        dayEventLine4.onClick = controller.AS_onDayClick_u346e6a31a594e1697a054cec1264311;
        var dayEventLine5 = new com.hcl.mario.DayEventLine(extendConfig({
            "height": "15%",
            "id": "dayEventLine5",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "dayEventLine5",
            "overrides": {
                "DayEventLine": {
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
        }, controller.args[0], "dayEventLine5"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "dayEventLine5"), extendConfig({
            "overrides": {}
        }, controller.args[2], "dayEventLine5"));
        dayEventLine5.space = "none";
        dayEventLine5.eventId = "";
        dayEventLine5.onClick = controller.AS_onDayClick_u346e6a31a594e1697a054cec1264311;
        flxEvents.add(dayEventLine1, dayEventLine2, dayEventLine3, dayEventLine4, dayEventLine5);
        flxContent.add(lblDay, flxEvents);
        MonthlyCalendarDay.add(flxContent);
        return MonthlyCalendarDay;
    }
})