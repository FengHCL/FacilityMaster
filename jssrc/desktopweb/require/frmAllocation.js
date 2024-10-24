define("frmAllocation", function() {
    return function(controller) {
        function addWidgetsfrmAllocation() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FormAllocation = new com.hcl.kra.FormAllocation({
                "height": "100%",
                "id": "FormAllocation",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "skinKenia",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "KRADemo",
                "viewType": "FormAllocation",
                "overrides": {
                    "FormAllocation": {
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
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.compInstData = {
                "FormAllocation": {
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
            this.add(FormAllocation);
        };
        return [{
            "addWidgets": addWidgetsfrmAllocation,
            "enabledForIdleTimeout": false,
            "id": "frmAllocation",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "KRADemo"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});