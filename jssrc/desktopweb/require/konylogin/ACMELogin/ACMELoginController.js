/*
#
#  Created by Team Kony.
#  Copyright (c) 2019 Kony Inc. All rights reserved.
#
*/
define("konylogin/ACMELogin/userACMELoginController", function() {
    constants.DEFAULT_MINIMUM_CHAR_LENGTH = 8;
    constants.USERNAME_VALIDATION_MESSAGE = "Username too small";
    constants.PASSWORD_VALIDATION_MESSAGE = "Password too small";
    constants.USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password are too small";
    constants.EMPTY_USERNAME_VALIDATION_MESSAGE = "Username cannot be empty";
    constants.EMPTY_PASSWORD_VALIDATION_MESSAGE = "Password cannot be empty";
    constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password cannot be empty";
    constants.LOGIN_SUCCESS_EVENT_MISSING_MESSAGE = "Login Success but loginSuccessEvent not defined";
    constants.LOGIN_FAILURE_EVENT_MISSING_MESSAGE = "Login Failed but loginFailureEvent not defined";
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(basicConfig, layoutConfig, pspConfig) {
            this._usernameMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._passwordMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._usernameValidationMsg = constants.USERNAME_VALIDATION_MESSAGE;
            this._passwordValidationMsg = constants.PASSWORD_VALIDATION_MESSAGE;
        },
        /**
         * @function onDoneCredentials
         * @description Common onDone function for username and password textboxes
         * @private
         * @param {Object} view
         */
        onDoneCredentials: function(view) {
            try {
                if (view.id == "lblUsername") {
                    this.validateUsername();
                } else if (view.id == "lblPassword") {
                    this.validatePassword();
                }
            } catch (exception) {
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function changeImage
         * @description Invoked when user toggles remember me icon
         * @private
         */
        changeImage: function() {
            try {
                if (this.view.imgRememberme.isVisible === true) {
                    this.view.imgRememberme.isVisible = false;
                    this.view.imgUnselected.isVisible = true;
                } else {
                    this.view.imgRememberme.isVisible = true;
                    this.view.imgUnselected.isVisible = false;
                }
                this.view.flxRememberMe.forceLayout();
            } catch (exception) {
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function rememberMe
         * @description Stores user credentials by encrypting them
         * @public
         */
        rememberMe: function() {
            this.changeImage();
        },
        /**
         * @function validateUsername
         * @description Validates username entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validateUsername: function() {
            try {
                if (parseInt(this._usernameMinimumChar) > this.getUsername().length) {
                    this.view.tbxUsername.text = this.getUsername();
                    this.view.lblError.text = constants.USERNAME_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function validatePassword
         * @description Validates password entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validatePassword: function() {
            try {
                if (parseInt(this._passwordMinimumChar) > this.getPassword().length) {
                    this.view.tbxPassword.text = this.getPassword();
                    this.view.lblError.text = constants.PASSWORD_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**  
         * @function validateUsernameAndPassword
         * @description validates empty username and password
         * @private
         * @return {boolean} true/false
         */
        validateUsernameAndPassword: function() {
            var isUsernameEmpty = !this.getUsername().length;
            var isPasswordEmpty = !this.getPassword().length;
            var errorText = null;
            if (isUsernameEmpty && isPasswordEmpty) {
                errorText = constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE;
            } else if (isUsernameEmpty) {
                errorText = constants.EMPTY_USERNAME_VALIDATION_MESSAGE;
            } else if (isPasswordEmpty) {
                errorText = constants.EMPTY_PASSWORD_VALIDATION_MESSAGE;
            }
            if (!errorText) {
                var isUsernameSmall = parseInt(this._usernameMinimumChar) > this.getUsername().length;
                var isPasswordSmall = parseInt(this._passwordMinimumChar) > this.getPassword().length;
                if (isUsernameSmall && isPasswordSmall) {
                    errorText = constants.USERNAME_PASSWORD_VALIDATION_MESSAGE;
                } else if (isUsernameSmall) {
                    errorText = constants.USERNAME_VALIDATION_MESSAGE;
                } else if (isPasswordSmall) {
                    errorText = constants.PASSWORD_VALIDATION_MESSAGE;
                }
            }
            if (errorText) {
                this.view.lblError.text = errorText;
                this.view.flxError.isVisible = true;
                this.view.flxError.forceLayout();
            } else {
                this.view.flxError.isVisible = false;
            }
        },
        /**
         * @function validate
         * @description validates username and password
         * Can be called before service invocation is made.
         * @private
         * @return {boolean} true/false
         */
        validate: function() {
            try {
                if (this.getUsername() !== null && this.validateUsername()) {
                    if (this.getPassword() !== null && this.validatePassword()) {
                        return true;
                    }
                }
                return false;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function rememberMeStub
         * @description This function is should be invoked on the success of invocation of authentication service
         * Here is where the encryption and storage of credentials would take placeo n the device.
         */
        rememberMeStub: function() {},
        /**
         * @function getUsername
         * @description Returns username entered by the user
         * @public
         * @return {string} username
         */
        getUsername: function() {
            try {
                var uname = (this.view.tbxUsername.text).trim();
                return uname;
            } catch (exception) {
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function getPassword
         * @description Returns password entered by the user
         * @public
         * @return {string} password
         */
        getPassword: function() {
            try {
                var pwd = (this.view.tbxPassword.text).trim();
                return pwd;
            } catch (exception) {
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        }
    };
});
define("konylogin/ACMELogin/ACMELoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ab96dcafe43549d496aadeaf4ccd5338: function AS_Button_ab96dcafe43549d496aadeaf4ccd5338(eventobject) {
        var self = this;
        return self.validateUsernameAndPassword.call(this);
    },
    AS_FlexContainer_b558ce3d37ea4028b1883b08012e2350: function AS_FlexContainer_b558ce3d37ea4028b1883b08012e2350(eventobject) {
        var self = this;
        this.rememberMe();
    },
    AS_Image_cf8a1b03384b4fbe9aaf260325c9f5d4: function AS_Image_cf8a1b03384b4fbe9aaf260325c9f5d4(eventobject, x, y) {
        var self = this;
        self.view.flxError.isVisible = false;
    },
    AS_TextField_f24debb2225b45d298fce638f13eabc6: function AS_TextField_f24debb2225b45d298fce638f13eabc6(eventobject, changedtext) {
        var self = this;
        return self.validatePassword.call(this);
    },
    AS_TextField_g2936b21e7db4947a4372a0728014371: function AS_TextField_g2936b21e7db4947a4372a0728014371(eventobject, changedtext) {
        var self = this;
        return self.validateUsername.call(this);
    }
});
define("konylogin/ACMELogin/ACMELoginController", ["konylogin/ACMELogin/userACMELoginController", "konylogin/ACMELogin/ACMELoginControllerActions"], function() {
    var controller = require("konylogin/ACMELogin/userACMELoginController");
    var actions = require("konylogin/ACMELogin/ACMELoginControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
