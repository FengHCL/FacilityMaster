define(function() {
    return function(controller) {
        var DayEventLine = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "15%",
            "id": "DayEventLine",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "200dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "DayEventLine"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "DayEventLine"), extendConfig({}, controller.args[2], "DayEventLine"));
        DayEventLine.setDefaultUnit(voltmx.flex.DP);
        var flxEventLine = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxEventLine",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxEventLine"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEventLine"), extendConfig({}, controller.args[2], "flxEventLine"));
        flxEventLine.setDefaultUnit(voltmx.flex.DP);
        var flxCenter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxCenter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxCenter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCenter"), extendConfig({}, controller.args[2], "flxCenter"));
        flxCenter.setDefaultUnit(voltmx.flex.DP);
        flxCenter.add();
        var flxRight = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "55%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxRight"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRight"), extendConfig({}, controller.args[2], "flxRight"));
        flxRight.setDefaultUnit(voltmx.flex.DP);
        flxRight.add();
        var flxLeft = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "55%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxLeft"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLeft"), extendConfig({}, controller.args[2], "flxLeft"));
        flxLeft.setDefaultUnit(voltmx.flex.DP);
        flxLeft.add();
        flxEventLine.add(flxCenter, flxRight, flxLeft);
        DayEventLine.add(flxEventLine);
        return DayEventLine;
    }
})