define(function() {
    return function(controller) {
        var FieldTextArea = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "80dp",
            "id": "FieldTextArea",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "200dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "FieldTextArea"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FieldTextArea"), extendConfig({}, controller.args[2], "FieldTextArea"));
        FieldTextArea.setDefaultUnit(voltmx.flex.DP);
        var lblLabel = new voltmx.ui.Label(extendConfig({
            "height": "20dp",
            "id": "lblLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLblRegularBlack70",
            "text": "Label",
            "textStyle": {},
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
            "height": "60dp",
            "id": "flxWidget",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "minHeight": "30dp",
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
        var txaWidget = new voltmx.ui.TextArea2(extendConfig({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "focusSkin": "skinTxaStandard",
            "height": "100%",
            "id": "txaWidget",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "numberOfVisibleLines": 3,
            "skin": "skinTxaStandard",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txaWidget"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, controller.args[1], "txaWidget"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
            "showCloseButton": true,
            "showProgressIndicator": false,
            "placeholderSkin": "defTextAreaPlaceholder"
        }, controller.args[2], "txaWidget"));
        flxWidget.add(txaWidget);
        FieldTextArea.add(lblLabel, flxWidget);
        return FieldTextArea;
    }
})