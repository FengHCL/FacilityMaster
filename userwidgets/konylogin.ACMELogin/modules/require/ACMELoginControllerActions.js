define({
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