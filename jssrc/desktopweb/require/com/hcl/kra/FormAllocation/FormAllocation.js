define(function() {
    return function(controller) {
        var FormAllocation = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "FormAllocation",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinKenia",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "KRADemo"
        }, controller.args[0], "FormAllocation"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FormAllocation"), extendConfig({}, controller.args[2], "FormAllocation"));
        FormAllocation.setDefaultUnit(voltmx.flex.DP);
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
            "appName": "KRADemo"
        }, controller.args[0], "flxHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(voltmx.flex.DP);
        var flxLeft = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "40dp",
            "zIndex": 1,
            "appName": "KRADemo"
        }, controller.args[0], "flxLeft"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLeft"), extendConfig({}, controller.args[2], "flxLeft"));
        flxLeft.setDefaultUnit(voltmx.flex.DP);
        var lblLeft = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblLeft",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinIconBlack100",
            "text": "s",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLeft"), extendConfig({}, controller.args[2], "lblLeft"));
        flxLeft.add(lblLeft);
        var flxRight = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 10,
            "skin": "slFbox",
            "top": "10dp",
            "width": "40dp",
            "zIndex": 1,
            "appName": "KRADemo"
        }, controller.args[0], "flxRight"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRight"), extendConfig({}, controller.args[2], "flxRight"));
        flxRight.setDefaultUnit(voltmx.flex.DP);
        var lblRight = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblRight",
            "isVisible": true,
            "right": 0,
            "skin": "skinIconRed100",
            "text": "j",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblRight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRight"), extendConfig({}, controller.args[2], "lblRight"));
        flxRight.add(lblRight);
        var lblTitle = new voltmx.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblTitle",
            "isVisible": true,
            "left": "60dp",
            "right": 50,
            "skin": "skinSemiboldBlack130",
            "text": "Luxury Suite 1",
            "top": "10dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({}, controller.args[2], "lblTitle"));
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
            "appName": "KRADemo"
        }, controller.args[0], "flxSeparatorTop"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparatorTop"), extendConfig({}, controller.args[2], "flxSeparatorTop"));
        flxSeparatorTop.setDefaultUnit(voltmx.flex.DP);
        flxSeparatorTop.add();
        flxHeader.add(flxLeft, flxRight, lblTitle, flxSeparatorTop);
        var flxCalendar = new voltmx.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": 20,
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "80dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCalendar"), extendConfig({}, controller.args[2], "flxCalendar"));
        flxCalendar.setDefaultUnit(voltmx.flex.DP);
        var cmpCalendar = new com.hcl.mario.BiMonthlyCalendar(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "id": "cmpCalendar",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "skinFlxWhiteBorderRounded",
            "top": "0dp",
            "width": "350dp",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "cmpCalendar",
            "overrides": {
                "BiMonthlyCalendar": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "height": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "cmpCalendar"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "cmpCalendar"), extendConfig({
            "overrides": {}
        }, controller.args[2], "cmpCalendar"));
        cmpCalendar.selectedDate = "";
        cmpCalendar.visibleDates = "";
        cmpCalendar.eventTypes = {
            "data": [{
                "eventType": "allocation",
                "skinAll": "skinCenterClosed",
                "skinPartial": "skinPartialClosed"
            }],
            "schema": [{
                "columnHeaderTemplate": null,
                "columnHeaderText": "eventType",
                "columnHeaderType": "text",
                "columnID": "eventType",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "fa8ff5e11ecc4319bd8bce593d296436"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "skinAll",
                "columnHeaderType": "text",
                "columnID": "skinAll",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "e97c0269077b4f6b9cdd03d2438e036a"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "skinPartial",
                "columnHeaderType": "text",
                "columnID": "skinPartial",
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "h5777b978b094dfdb0ceb44583a4c458"
            }]
        };
        cmpCalendar.weekRowHeight = 40;
        flxCalendar.add(cmpCalendar);
        var cmpEditAllocation = new com.hcl.kra.EditAllocation(extendConfig({
            "height": "100%",
            "id": "cmpEditAllocation",
            "isVisible": false,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "cmpEditAllocation",
            "overrides": {
                "EditAllocation": {
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
        }, controller.args[0], "cmpEditAllocation"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "cmpEditAllocation"), extendConfig({
            "overrides": {}
        }, controller.args[2], "cmpEditAllocation"));
        FormAllocation.add(flxHeader, flxCalendar, cmpEditAllocation);
        FormAllocation.compInstData = {
            "cmpCalendar": {
                "right": "",
                "bottom": "",
                "height": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerY": ""
            },
            "cmpEditAllocation": {
                "right": "",
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerX": "",
                "centerY": ""
            }
        }
        return FormAllocation;
    }
})