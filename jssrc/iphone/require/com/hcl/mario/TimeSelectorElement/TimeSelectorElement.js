define(function() {
    return function(controller) {
        var TimeSelectorElement = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "30dp",
            "id": "TimeSelectorElement",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "TimeSelectorElement"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "TimeSelectorElement"), extendConfig({}, controller.args[2], "TimeSelectorElement"));
        TimeSelectorElement.setDefaultUnit(voltmx.flex.DP);
        var lblElement = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblElement",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLbRegularBlack80",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblElement"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblElement"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblElement"));
        TimeSelectorElement.add(lblElement);
        return TimeSelectorElement;
    }
})