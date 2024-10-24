define(function() {
    return function(controller) {
        var FormHome = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "FormHome",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinKenia",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "FormHome"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FormHome"), extendConfig({}, controller.args[2], "FormHome"));
        FormHome.setDefaultUnit(voltmx.flex.DP);
        var flxHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxWhite",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgLogo",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "logokra.png",
            "top": "13dp",
            "width": "150dp",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        var flxSeparatorTop = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "2dp",
            "id": "flxSeparatorTop",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxRed",
            "top": 0,
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxSeparatorTop"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparatorTop"), extendConfig({}, controller.args[2], "flxSeparatorTop"));
        flxSeparatorTop.setDefaultUnit(voltmx.flex.DP);
        flxSeparatorTop.add();
        var lblTitle = new voltmx.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblTitle",
            "isVisible": true,
            "right": "10dp",
            "skin": "skinSemiboldBlack150",
            "text": "Resource List",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitle"));
        flxHeader.add(imgLogo, flxSeparatorTop, lblTitle);
        var flxContent = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": 20,
            "clipBounds": false,
            "id": "flxContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "80dp",
            "width": "100%",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxContent"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxContent"), extendConfig({}, controller.args[2], "flxContent"));
        flxContent.setDefaultUnit(voltmx.flex.DP);
        var flxSelectResourceType = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": false,
            "id": "flxSelectResourceType",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxSelectResourceType"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSelectResourceType"), extendConfig({}, controller.args[2], "flxSelectResourceType"));
        flxSelectResourceType.setDefaultUnit(voltmx.flex.DP);
        var flxSelectResourceTypeField = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxSelectResourceTypeField",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxWhiteRoundedBorderRed",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxSelectResourceTypeField"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSelectResourceTypeField"), extendConfig({}, controller.args[2], "flxSelectResourceTypeField"));
        flxSelectResourceTypeField.setDefaultUnit(voltmx.flex.DP);
        var iconType = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "iconType",
            "isVisible": true,
            "left": "10dp",
            "skin": "skinLbIconRed80",
            "text": "0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "iconType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "iconType"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "iconType"));
        var resourceName = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "resourceName",
            "isVisible": true,
            "left": "60dp",
            "right": 10,
            "skin": "skinLbRegularBlack90",
            "text": "All",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "resourceName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "resourceName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "resourceName"));
        var iconSelector = new voltmx.ui.Label(extendConfig({
            "height": "40dp",
            "id": "iconSelector",
            "isVisible": true,
            "right": 0,
            "skin": "skinIconBlack100",
            "text": "d",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "iconSelector"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "iconSelector"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "iconSelector"));
        flxSelectResourceTypeField.add(iconType, resourceName, iconSelector);
        var flxSelectResourceTypeList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "142dp",
            "id": "flxSelectResourceTypeList",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxWhiteRoundedBorderRed",
            "top": "42dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxSelectResourceTypeList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSelectResourceTypeList"), extendConfig({}, controller.args[2], "flxSelectResourceTypeList"));
        flxSelectResourceTypeList.setDefaultUnit(voltmx.flex.DP);
        var segSelectResourceType = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "iconType": "0",
                "resourceName": "All",
                "resourceType": "0"
            }, {
                "iconType": "j",
                "resourceName": "Accommodation",
                "resourceType": "1"
            }, {
                "iconType": "i",
                "resourceName": "Meeting Room",
                "resourceType": "2"
            }, {
                "iconType": "P",
                "resourceName": "Parking Slot",
                "resourceType": "3"
            }],
            "groupCells": true,
            "height": "142dp",
            "id": "segSelectResourceType",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxResourceTypeSelector",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxResourceTypeSelector": "flxResourceTypeSelector",
                "iconType": "iconType",
                "resourceName": "resourceName"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "segSelectResourceType"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSelectResourceType"), extendConfig({}, controller.args[2], "segSelectResourceType"));
        flxSelectResourceTypeList.add(segSelectResourceType);
        flxSelectResourceType.add(flxSelectResourceTypeField, flxSelectResourceTypeList);
        var flxResources = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": false,
            "height": "400dp",
            "id": "flxResources",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "skinFlxWhiteRoundedBorderRed",
            "width": "90%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxResources"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxResources"), extendConfig({}, controller.args[2], "flxResources"));
        flxResources.setDefaultUnit(voltmx.flex.DP);
        var segResources = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [
                [{
                        "resourceName": "",
                        "resourceType": ""
                    },
                    [{
                        "iconEdit": "",
                        "resourceName": "",
                        "resourceType": ""
                    }]
                ]
            ],
            "groupCells": false,
            "height": "100%",
            "id": "segResources",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxResources",
            "scrollingEvents": {},
            "sectionHeaderTemplate": "flxResourcesHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": 0,
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxResources": "flxResources",
                "flxResourcesHeader": "flxResourcesHeader",
                "flxSeparator": "flxSeparator",
                "iconEdit": "iconEdit",
                "resourceName": "resourceName",
                "resourceType": "resourceType"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "segResources"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segResources"), extendConfig({}, controller.args[2], "segResources"));
        flxResources.add(segResources);
        flxContent.add(flxSelectResourceType, flxResources);
        FormHome.add(flxHeader, flxContent);
        return FormHome;
    }
})