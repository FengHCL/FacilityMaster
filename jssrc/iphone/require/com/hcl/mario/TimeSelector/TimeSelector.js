define(function() {
    return function(controller) {
        var TimeSelector = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "TimeSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "TimeSelector"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "TimeSelector"), extendConfig({}, controller.args[2], "TimeSelector"));
        TimeSelector.setDefaultUnit(voltmx.flex.DP);
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
        var flxTimeSelector = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "235dp",
            "id": "flxTimeSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "skinFlxWhiteRoundedBorderRed",
            "width": "190dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxTimeSelector"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxTimeSelector"), extendConfig({}, controller.args[2], "flxTimeSelector"));
        flxTimeSelector.setDefaultUnit(voltmx.flex.DP);
        var flxCancel = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "20dp",
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "5dp",
            "width": "20dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxCancel"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCancel"), extendConfig({}, controller.args[2], "flxCancel"));
        flxCancel.setDefaultUnit(voltmx.flex.DP);
        var lblCancel = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblCancel",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinIconBlack100",
            "text": "b",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCancel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCancel"));
        flxCancel.add(lblCancel);
        var flxSelectors = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "150dp",
            "id": "flxSelectors",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxSelectors"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSelectors"), extendConfig({}, controller.args[2], "flxSelectors"));
        flxSelectors.setDefaultUnit(voltmx.flex.DP);
        var flxEnhanceHours = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxEnhanceHours",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "11dp",
            "isModalContainer": false,
            "skin": "skinEnhance",
            "top": "60dp",
            "width": "78dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxEnhanceHours"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEnhanceHours"), extendConfig({}, controller.args[2], "flxEnhanceHours"));
        flxEnhanceHours.setDefaultUnit(voltmx.flex.DP);
        flxEnhanceHours.add();
        var flxHoursContainer = new voltmx.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": 10,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "150dp",
            "horizontalScrollIndicator": true,
            "id": "flxHoursContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "pagingEnabled": false,
            "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
            "skin": "CopyskinFlxTransparentBorderBlueRoundedCorners0ea9f6a1e57ff43",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "flxHoursContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHoursContainer"), extendConfig({}, controller.args[2], "flxHoursContainer"));
        flxHoursContainer.setDefaultUnit(voltmx.flex.DP);
        var flxHours = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "840dp",
            "id": "flxHours",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxHours"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHours"), extendConfig({}, controller.args[2], "flxHours"));
        flxHours.setDefaultUnit(voltmx.flex.DP);
        var TimeSelectorElement = new com.hcl.mario.TimeSelectorElement(extendConfig({
            "height": "30dp",
            "id": "TimeSelectorElement",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "TimeSelectorElement",
            "overrides": {
                "TimeSelectorElement": {
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
        }, controller.args[0], "TimeSelectorElement"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "TimeSelectorElement"), extendConfig({
            "overrides": {}
        }, controller.args[2], "TimeSelectorElement"));
        flxHours.add(TimeSelectorElement);
        flxHoursContainer.add(flxHours);
        var flxEnhanceMinutes = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxEnhanceMinutes",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "101dp",
            "isModalContainer": false,
            "skin": "skinEnhance",
            "top": "60dp",
            "width": "78dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxEnhanceMinutes"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEnhanceMinutes"), extendConfig({}, controller.args[2], "flxEnhanceMinutes"));
        flxEnhanceMinutes.setDefaultUnit(voltmx.flex.DP);
        flxEnhanceMinutes.add();
        var flxMinutesContainer = new voltmx.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": 10,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "150dp",
            "horizontalScrollIndicator": true,
            "id": "flxMinutesContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "100dp",
            "pagingEnabled": false,
            "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
            "skin": "CopyskinFlxTransparentBorderBlueRoundedCorners0f4d3821049734d",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "flxMinutesContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMinutesContainer"), extendConfig({}, controller.args[2], "flxMinutesContainer"));
        flxMinutesContainer.setDefaultUnit(voltmx.flex.DP);
        var flxMinutes = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1920dp",
            "id": "flxMinutes",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxMinutes"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMinutes"), extendConfig({}, controller.args[2], "flxMinutes"));
        flxMinutes.setDefaultUnit(voltmx.flex.DP);
        flxMinutes.add();
        flxMinutesContainer.add(flxMinutes);
        flxSelectors.add(flxEnhanceHours, flxHoursContainer, flxEnhanceMinutes, flxMinutesContainer);
        var flxOk = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxOk",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "skinFlxBlueBorderBlueRoundedCorners",
            "top": "10dp",
            "width": "170dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxOk"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOk"), extendConfig({}, controller.args[2], "flxOk"));
        flxOk.setDefaultUnit(voltmx.flex.DP);
        var lblOk = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblOk",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLblRegularWhite80",
            "text": "Ok",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblOk"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOk"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOk"));
        flxOk.add(lblOk);
        flxTimeSelector.add(flxCancel, flxSelectors, flxOk);
        TimeSelector.add(flxBackground, flxTimeSelector);
        return TimeSelector;
    }
})