define(function() {
    return function(controller) {
        var FieldTime = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "50dp",
            "id": "FieldTime",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "200dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "FieldTime"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FieldTime"), extendConfig({}, controller.args[2], "FieldTime"));
        FieldTime.setDefaultUnit(voltmx.flex.DP);
        var lblLabel = new voltmx.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLblRegularBlack70",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLabel"));
        var flxWidget = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxWidget",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxWhiteBorderGrey",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxWidget"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxWidget"), extendConfig({}, controller.args[2], "flxWidget"));
        flxWidget.setDefaultUnit(voltmx.flex.DP);
        var lblWidget = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblWidget",
            "isVisible": true,
            "left": "5dp",
            "right": 30,
            "skin": "skinLbRegularBlack80",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWidget"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWidget"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblWidget"));
        var flxIcon = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxIcon",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxIcon"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxIcon"), extendConfig({}, controller.args[2], "flxIcon"));
        flxIcon.setDefaultUnit(voltmx.flex.DP);
        var lblIcon = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblIcon",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLbIconBlack80",
            "text": "6",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblIcon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblIcon"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblIcon"));
        flxIcon.add(lblIcon);
        flxWidget.add(lblWidget, flxIcon);
        FieldTime.add(lblLabel, flxWidget);
        return FieldTime;
    }
})