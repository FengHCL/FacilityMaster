define("flxResourcesHeader", function() {
    return function(controller) {
        var flxResourcesHeader = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxResourcesHeader",
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
        flxResourcesHeader.setDefaultUnit(voltmx.flex.DP);
        var resourceType = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "resourceType",
            "isVisible": true,
            "left": "10dp",
            "skin": "skinLblSemiboldBlack100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var resourceName = new voltmx.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "resourceName",
            "isVisible": true,
            "left": "60dp",
            "right": 10,
            "skin": "skinLblSemiboldBlack100",
            "text": "Resource Name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "skin": "skinFlxRed",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, {
            "paddingInPixel": false
        }, {});
        flxSeparator.setDefaultUnit(voltmx.flex.DP);
        flxSeparator.add();
        flxResourcesHeader.add(resourceType, resourceName, flxSeparator);
        return flxResourcesHeader;
    }
})