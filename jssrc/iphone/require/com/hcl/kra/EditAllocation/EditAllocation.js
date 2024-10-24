define(function() {
    return function(controller) {
        var EditAllocation = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "EditAllocation",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "EditAllocation"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "EditAllocation"), extendConfig({}, controller.args[2], "EditAllocation"));
        EditAllocation.setDefaultUnit(voltmx.flex.DP);
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
        var flxEditAllocation = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "360dp",
            "id": "flxEditAllocation",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "skinFlxWhiteRoundedBorderRed",
            "width": "340dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxEditAllocation"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEditAllocation"), extendConfig({}, controller.args[2], "flxEditAllocation"));
        flxEditAllocation.setDefaultUnit(voltmx.flex.DP);
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
        var flxLeft = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 10,
            "skin": "slFbox",
            "top": "10dp",
            "width": "40dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
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
            "text": "b",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLeft"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLeft"));
        flxLeft.add(lblLeft);
        var lblTitle = new voltmx.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblTitle",
            "isVisible": true,
            "left": "60dp",
            "right": 60,
            "skin": "skinSemiboldBlack130",
            "text": "Edit Allocation",
            "top": "10dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTitle"));
        flxHeader.add(flxLeft, lblTitle);
        var flxStart = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxStart",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": 20,
            "skin": "slFbox",
            "top": "20dp",
            "width": "300dp",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxStart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxStart"), extendConfig({}, controller.args[2], "flxStart"));
        flxStart.setDefaultUnit(voltmx.flex.DP);
        var fieldStartDate = new com.hcl.kra.FieldDate(extendConfig({
            "height": "50dp",
            "id": "fieldStartDate",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "160dp",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "fieldStartDate",
            "overrides": {
                "lblLabel": {
                    "text": "Start Date *"
                },
                "FieldDate": {
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
        }, controller.args[0], "fieldStartDate"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "fieldStartDate"), extendConfig({
            "overrides": {}
        }, controller.args[2], "fieldStartDate"));
        var fieldStartTime = new com.hcl.kra.FieldTime(extendConfig({
            "height": "50dp",
            "id": "fieldStartTime",
            "isVisible": true,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "130dp",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "fieldStartTime",
            "overrides": {
                "lblLabel": {
                    "text": "Start Time"
                },
                "lblWidget": {
                    "text": "00:00"
                },
                "FieldTime": {
                    "left": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "fieldStartTime"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "fieldStartTime"), extendConfig({
            "overrides": {}
        }, controller.args[2], "fieldStartTime"));
        flxStart.add(fieldStartDate, fieldStartTime);
        var flxEnd = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxEnd",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": 20,
            "skin": "slFbox",
            "top": "10dp",
            "width": "300dp",
            "appName": "FacilityMaster"
        }, controller.args[0], "flxEnd"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxEnd"), extendConfig({}, controller.args[2], "flxEnd"));
        flxEnd.setDefaultUnit(voltmx.flex.DP);
        var fieldEndDate = new com.hcl.kra.FieldDate(extendConfig({
            "height": "50dp",
            "id": "fieldEndDate",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "160dp",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "fieldEndDate",
            "overrides": {
                "lblLabel": {
                    "text": "End Date *"
                },
                "FieldDate": {
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
        }, controller.args[0], "fieldEndDate"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "fieldEndDate"), extendConfig({
            "overrides": {}
        }, controller.args[2], "fieldEndDate"));
        var fieldEndTime = new com.hcl.kra.FieldTime(extendConfig({
            "height": "50dp",
            "id": "fieldEndTime",
            "isVisible": true,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "130dp",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "fieldEndTime",
            "overrides": {
                "lblLabel": {
                    "text": "End Time"
                },
                "lblWidget": {
                    "text": "23:59"
                },
                "FieldTime": {
                    "left": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "fieldEndTime"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "fieldEndTime"), extendConfig({
            "overrides": {}
        }, controller.args[2], "fieldEndTime"));
        flxEnd.add(fieldEndDate, fieldEndTime);
        var fieldNotes = new com.hcl.kra.FieldTextArea(extendConfig({
            "height": "80dp",
            "id": "fieldNotes",
            "isVisible": true,
            "left": "20dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "right": 20,
            "skin": "slFbox",
            "top": "10dp",
            "width": "300dp",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "fieldNotes",
            "overrides": {
                "lblLabel": {
                    "text": "Notes *"
                },
                "FieldTextArea": {
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "fieldNotes"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "fieldNotes"), extendConfig({
            "overrides": {}
        }, controller.args[2], "fieldNotes"));
        var flxButtons = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxButtons",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "300dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxButtons"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(voltmx.flex.DP);
        var buttonDelete = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "buttonDelete",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxBorderRed",
            "top": "0dp",
            "width": "48%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "buttonDelete"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "buttonDelete"), extendConfig({}, controller.args[2], "buttonDelete"));
        buttonDelete.setDefaultUnit(voltmx.flex.DP);
        var lblDelete = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDelete",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLblRegularRed80",
            "text": "Delete",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDelete"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDelete"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDelete"));
        buttonDelete.add(lblDelete);
        var buttonUpdate = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "buttonUpdate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "skinFlxRed",
            "top": "0dp",
            "width": "48%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "buttonUpdate"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "buttonUpdate"), extendConfig({}, controller.args[2], "buttonUpdate"));
        buttonUpdate.setDefaultUnit(voltmx.flex.DP);
        var lblUpdate = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblUpdate",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLblRegularWhite80",
            "text": "Update",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblUpdate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUpdate"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblUpdate"));
        buttonUpdate.add(lblUpdate);
        flxButtons.add(buttonDelete, buttonUpdate);
        var flxButtonAllocate = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxButtonAllocate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "300dp",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "flxButtonAllocate"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxButtonAllocate"), extendConfig({}, controller.args[2], "flxButtonAllocate"));
        flxButtonAllocate.setDefaultUnit(voltmx.flex.DP);
        var buttonAllocate = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "buttonAllocate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "right": 0,
            "skin": "skinFlxRed",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster"
        }, controller.args[0], "buttonAllocate"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "buttonAllocate"), extendConfig({}, controller.args[2], "buttonAllocate"));
        buttonAllocate.setDefaultUnit(voltmx.flex.DP);
        var lblAllocate = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblAllocate",
            "isVisible": true,
            "left": "0dp",
            "skin": "skinLblRegularWhite80",
            "text": "Allocate",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAllocate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAllocate"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAllocate"));
        buttonAllocate.add(lblAllocate);
        flxButtonAllocate.add(buttonAllocate);
        flxEditAllocation.add(flxHeader, flxStart, flxEnd, fieldNotes, flxButtons, flxButtonAllocate);
        var cmpTimeSelector = new com.hcl.mario.TimeSelector(extendConfig({
            "height": "100%",
            "id": "cmpTimeSelector",
            "isVisible": false,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "cmpTimeSelector",
            "overrides": {
                "TimeSelector": {
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
        }, controller.args[0], "cmpTimeSelector"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "cmpTimeSelector"), extendConfig({
            "overrides": {}
        }, controller.args[2], "cmpTimeSelector"));
        var cmpDateSelector = new com.hcl.mario.DateSelector(extendConfig({
            "height": "100%",
            "id": "cmpDateSelector",
            "isVisible": false,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "FacilityMaster",
            "viewType": "cmpDateSelector",
            "overrides": {
                "DateSelector": {
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
        }, controller.args[0], "cmpDateSelector"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "cmpDateSelector"), extendConfig({
            "overrides": {}
        }, controller.args[2], "cmpDateSelector"));
        cmpDateSelector.widgetId = "";
        flxBackground.add(flxEditAllocation, cmpTimeSelector, cmpDateSelector);
        EditAllocation.add(flxBackground);
        return EditAllocation;
    }
})