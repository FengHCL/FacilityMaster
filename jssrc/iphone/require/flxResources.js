define("flxResources", function() {
    return function(controller) {
        var flxResources = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxResources",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "FacilityMaster"
        }, {
            "paddingInPixel": false
        }, {});
        flxResources.setDefaultUnit(voltmx.flex.DP);
        var resourceType = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "resourceType",
            "isVisible": true,
            "left": "10dp",
            "skin": "skinLbIconRed80",
            "text": "p",
            "textStyle": {},
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var resourceName = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "resourceName",
            "isVisible": true,
            "left": "60dp",
            "right": 10,
            "skin": "skinLbRegularBlack90",
            "text": "Label",
            "textStyle": {},
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var iconEdit = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "iconEdit",
            "isVisible": true,
            "right": 10,
            "skin": "skinLbIconBlack80",
            "text": "y",
            "textStyle": {},
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSeparator = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxGrey",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, {
            "paddingInPixel": false
        }, {});
        flxSeparator.setDefaultUnit(voltmx.flex.DP);
        flxSeparator.add();
        flxResources.add(resourceType, resourceName, iconEdit, flxSeparator);
        return flxResources;
    }
})