define(function() {
    return function(controller) {
        var Weekdays = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "40dp",
            "id": "Weekdays",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "Weekdays"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Weekdays"), extendConfig({}, controller.args[2], "Weekdays"));
        Weekdays.setDefaultUnit(voltmx.flex.DP);
        var lbl1 = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lbl1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCalendar",
            "text": "Mon",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1
        }, controller.args[0], "lbl1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbl1"));
        var lbl2 = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lbl2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCalendar",
            "text": "Tue",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1
        }, controller.args[0], "lbl2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbl2"));
        var lbl3 = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lbl3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCalendar",
            "text": "Wed",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1
        }, controller.args[0], "lbl3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbl3"));
        var lbl4 = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lbl4",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCalendar",
            "text": "Thu",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1
        }, controller.args[0], "lbl4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbl4"));
        var lbl5 = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lbl5",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCalendar",
            "text": "Fri",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1
        }, controller.args[0], "lbl5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbl5"));
        var lbl6 = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lbl6",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCalendar",
            "text": "Sat",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1
        }, controller.args[0], "lbl6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbl6"));
        var lbl7 = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lbl7",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCalendar",
            "text": "Sun",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "14.28%",
            "zIndex": 1
        }, controller.args[0], "lbl7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lbl7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lbl7"));
        Weekdays.add(lbl1, lbl2, lbl3, lbl4, lbl5, lbl6, lbl7);
        return Weekdays;
    }
})