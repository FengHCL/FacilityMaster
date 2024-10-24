define("flxResourceTypeSelector", function() {
    return function(controller) {
        var flxResourceTypeSelector = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "30dp",
            "id": "flxResourceTypeSelector",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "KRADemo"
        }, {
            "paddingInPixel": false
        }, {});
        flxResourceTypeSelector.setDefaultUnit(voltmx.flex.DP);
        var iconType = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "iconType",
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
        }, {});
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
        }, {});
        var resourceType = new voltmx.ui.Label({
            "id": "resourceType",
            "isVisible": false,
            "left": "215dp",
            "skin": "defLabel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxResourceTypeSelector.add(iconType, resourceName, resourceType);
        return flxResourceTypeSelector;
    }
})