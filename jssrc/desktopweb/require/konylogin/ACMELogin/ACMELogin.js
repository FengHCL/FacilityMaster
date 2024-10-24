define(function() {
    return function(controller) {
        var ACMELogin = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "ACMELogin",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0c7f56d19e68d42",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "KRADemo"
        }, controller.args[0], "ACMELogin"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ACMELogin"), extendConfig({}, controller.args[2], "ACMELogin"));
        ACMELogin.setDefaultUnit(voltmx.flex.DP);
        var flxLogin = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxLogin",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "Copykonympbl4",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 6,
            "appName": "KRADemo"
        }, controller.args[0], "flxLogin"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogin"), extendConfig({}, controller.args[2], "flxLogin"));
        flxLogin.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "150dp",
            "id": "imgLogo",
            "isVisible": true,
            "skin": "Copykonympbl5",
            "src": "logo_acme.png",
            "top": "5%",
            "width": "200dp",
            "zIndex": 11
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        var lblWelcome = new voltmx.ui.Label(extendConfig({
            "centerX": "38%",
            "id": "lblWelcome",
            "isVisible": true,
            "skin": "CopysknWelcome",
            "text": "Welcome! Please Login",
            "textStyle": {},
            "top": "25.80%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblWelcome"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcome"), extendConfig({}, controller.args[2], "lblWelcome"));
        var flxRememberMe = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "71.11%",
            "clipBounds": false,
            "height": "5.50%",
            "id": "flxRememberMe",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "40%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b558ce3d37ea4028b1883b08012e2350,
            "right": "5%",
            "skin": "slFbox",
            "top": "49.58%",
            "width": "45%",
            "zIndex": 1,
            "appName": "KRADemo"
        }, controller.args[0], "flxRememberMe"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRememberMe"), extendConfig({}, controller.args[2], "flxRememberMe"));
        flxRememberMe.setDefaultUnit(voltmx.flex.DP);
        var lblRememberMe = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblRememberMe",
            "isVisible": true,
            "left": "5%",
            "skin": "sknACMERememberMe",
            "text": "Remember Me",
            "textStyle": {},
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRememberMe"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMe"), extendConfig({}, controller.args[2], "lblRememberMe"));
        var imgRememberme = new voltmx.ui.Image2(extendConfig({
            "centerX": "84.98%",
            "centerY": "51.85%",
            "height": "20dp",
            "id": "imgRememberme",
            "imageWhenFailed": "checkbox_unselected.png",
            "isVisible": true,
            "left": 0,
            "skin": "Copykonympbl5",
            "src": "checkbox_active_1.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, controller.args[0], "imgRememberme"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRememberme"), extendConfig({}, controller.args[2], "imgRememberme"));
        var imgUnselected = new voltmx.ui.Image2(extendConfig({
            "centerX": "84.91%",
            "centerY": "51.80%",
            "height": "20dp",
            "id": "imgUnselected",
            "isVisible": true,
            "left": 0,
            "skin": "Copykonympbl5",
            "src": "checkbox_inactive_1.png",
            "width": "25dp",
            "zIndex": 1
        }, controller.args[0], "imgUnselected"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUnselected"), extendConfig({}, controller.args[2], "imgUnselected"));
        flxRememberMe.add(lblRememberMe, imgRememberme, imgUnselected);
        var flxForgotPassword = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "19.26%",
            "clipBounds": true,
            "height": "5.65%",
            "id": "flxForgotPassword",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "49.58%",
            "width": "25.78%",
            "zIndex": 3,
            "appName": "KRADemo"
        }, controller.args[0], "flxForgotPassword"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxForgotPassword"), extendConfig({}, controller.args[2], "flxForgotPassword"));
        flxForgotPassword.setDefaultUnit(voltmx.flex.DP);
        var btnForgotPassword = new voltmx.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopyCopysknFocusSecondaryAction",
            "height": "80%",
            "id": "btnForgotPassword",
            "isVisible": true,
            "left": "0%",
            "skin": "sknACMEForgotPassword",
            "text": "FORGOT ?",
            "width": "81.03%",
            "zIndex": 1
        }, controller.args[0], "btnForgotPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnForgotPassword"), extendConfig({}, controller.args[2], "btnForgotPassword"));
        var lblSknHidden = new voltmx.ui.Label(extendConfig({
            "height": "0%",
            "id": "lblSknHidden",
            "isVisible": true,
            "left": "0%",
            "skin": "Copykonympbl0a3439d8b192540",
            "textStyle": {},
            "top": "0%",
            "width": "0%",
            "zIndex": 1
        }, controller.args[0], "lblSknHidden"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSknHidden"), extendConfig({}, controller.args[2], "lblSknHidden"));
        flxForgotPassword.add(btnForgotPassword, lblSknHidden);
        var btnLogin = new voltmx.ui.Button(extendConfig({
            "centerX": "50.00%",
            "focusSkin": "CopyCopykonympsknprimaryActionFocus",
            "height": "7.30%",
            "id": "btnLogin",
            "isVisible": true,
            "left": 0,
            "onClick": controller.AS_Button_ab96dcafe43549d496aadeaf4ccd5338,
            "skin": "sknACMELoginButton",
            "text": "LOGIN",
            "top": "57%",
            "width": "89.78%",
            "zIndex": 3
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        var tbxUsername = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "CopysknFocusAcme",
            "height": "6.50%",
            "id": "tbxUsername",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_g2936b21e7db4947a4372a0728014371,
            "placeholder": "Username",
            "right": 0,
            "secureTextEntry": false,
            "skin": "sknACMELoginTbx",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "32.50%",
            "width": "89.80%",
            "zIndex": 3
        }, controller.args[0], "tbxUsername"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 1, 0, 1],
            "paddingInPixel": false
        }, controller.args[1], "tbxUsername"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopykonympblsknTbxPlaceholder"
        }, controller.args[2], "tbxUsername"));
        var tbxPassword = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "CopysknFocusAcme",
            "height": "6.50%",
            "id": "tbxPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "maxTextLength": 30,
            "onDone": controller.AS_TextField_f24debb2225b45d298fce638f13eabc6,
            "placeholder": "Password",
            "right": 0,
            "secureTextEntry": true,
            "skin": "sknACMELoginTbx",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "41.35%",
            "width": "89%",
            "zIndex": 3
        }, controller.args[0], "tbxPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 1, 0, 1],
            "paddingInPixel": false
        }, controller.args[1], "tbxPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopykonympblsknTbxPlaceholder"
        }, controller.args[2], "tbxPassword"));
        var btnFacebookLogin = new voltmx.ui.Button(extendConfig({
            "centerX": "50.01%",
            "focusSkin": "CopyCopyCopykonympsknprimaryActionFocus",
            "height": "7.30%",
            "id": "btnFacebookLogin",
            "isVisible": true,
            "left": 0,
            "skin": "sknACMEFacebookLoginButton",
            "text": "LOGIN WITH FACEBOOK",
            "top": "73%",
            "width": "89.78%",
            "zIndex": 3
        }, controller.args[0], "btnFacebookLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFacebookLogin"), extendConfig({}, controller.args[2], "btnFacebookLogin"));
        var flxSeparator = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7%",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "65%",
            "width": "100%",
            "appName": "KRADemo"
        }, controller.args[0], "flxSeparator"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(voltmx.flex.DP);
        var lblSep2 = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "1dp",
            "id": "lblSep2",
            "isVisible": true,
            "right": "84dp",
            "skin": "sknACMESeperator",
            "text": "Label",
            "textStyle": {},
            "top": "70.15%",
            "width": "25%",
            "zIndex": 11
        }, controller.args[0], "lblSep2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSep2"), extendConfig({}, controller.args[2], "lblSep2"));
        var lblOR = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblOR",
            "isVisible": true,
            "skin": "sknACMEOrSkin",
            "text": "or",
            "textStyle": {},
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 11
        }, controller.args[0], "lblOR"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOR"), extendConfig({}, controller.args[2], "lblOR"));
        var lblSep1 = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "1dp",
            "id": "lblSep1",
            "isVisible": true,
            "left": "84dp",
            "skin": "sknACMESeperator",
            "text": "Label",
            "textStyle": {},
            "top": "70.15%",
            "width": "25%",
            "zIndex": 11
        }, controller.args[0], "lblSep1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSep1"), extendConfig({}, controller.args[2], "lblSep1"));
        flxSeparator.add(lblSep2, lblOR, lblSep1);
        flxLogin.add(imgLogo, lblWelcome, flxRememberMe, flxForgotPassword, btnLogin, tbxUsername, tbxPassword, btnFacebookLogin, flxSeparator);
        var flxError = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "6.50%",
            "id": "flxError",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknACMEflxError",
            "top": 0,
            "width": "100%",
            "zIndex": 22,
            "appName": "KRADemo"
        }, controller.args[0], "flxError"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(voltmx.flex.DP);
        var lblError = new voltmx.ui.Label(extendConfig({
            "centerX": "55%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblError",
            "isVisible": true,
            "left": 0,
            "skin": "sknACMELoginLblError",
            "text": "Incorrect Username/Password.",
            "textStyle": {},
            "top": 0,
            "width": "76.44%",
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({}, controller.args[2], "lblError"));
        var imgClose = new voltmx.ui.Image2(extendConfig({
            "centerX": "10%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgClose",
            "isVisible": true,
            "left": 0,
            "onTouchStart": controller.AS_Image_cf8a1b03384b4fbe9aaf260325c9f5d4,
            "skin": "slImage",
            "src": "closeicon_3.png",
            "top": 0,
            "width": "9.50%",
            "zIndex": 1
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        flxError.add(lblError, imgClose);
        var btnSignUp = new voltmx.ui.Button(extendConfig({
            "centerX": "50.03%",
            "focusSkin": "CopyCopysknFocusSecondaryAction",
            "height": "6.18%",
            "id": "btnSignUp",
            "isVisible": true,
            "left": "0%",
            "skin": "sknACMELoginBtnSignUp",
            "text": "CREATE ACCOUNT",
            "top": "83%",
            "width": "81.03%",
            "zIndex": 22
        }, controller.args[0], "btnSignUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSignUp"), extendConfig({}, controller.args[2], "btnSignUp"));
        ACMELogin.add(flxLogin, flxError, btnSignUp);
        ACMELogin.compInstData = {}
        return ACMELogin;
    }
})