define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(voltmx.flex.DP);
            var ACMELogin = new konylogin.ACMELogin({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "ACMELogin",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "KRADemo",
                "overrides": {
                    "imgLogo": {
                        "centerX": "50.00%",
                        "src": "logokra.png",
                        "top": "5.00%"
                    },
                    "tbxPassword": {
                        "text": "1234567890"
                    },
                    "tbxUsername": {
                        "text": "admin@kra.go.ke"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            ACMELogin.btnLogin.onClick = controller.AS_Button_f6e9c850db944b3daa325b552ba5d7d4;
            this.compInstData = {
                "ACMELogin.imgLogo": {
                    "centerX": "50.00%",
                    "src": "logokra.png",
                    "top": "5.00%"
                },
                "ACMELogin.tbxPassword": {
                    "text": "1234567890"
                },
                "ACMELogin.tbxUsername": {
                    "text": "admin@kra.go.ke"
                }
            }
            this.add(ACMELogin);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0e75d5999d8c04a",
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