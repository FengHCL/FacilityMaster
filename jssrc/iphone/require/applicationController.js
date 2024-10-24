define({
    appInit: function(params) {
        skinsInit();
        voltmx.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        voltmx.application.setDefaultTextboxPadding(false);
        voltmx.application.setRespectImageSizeForImageWidgetAlignment(true);
        voltmx.mvc.registry.add("com.hcl.kra.FieldDate", {
            "viewName": "FieldDate",
            "controllerName": "FieldDateController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.kra",
            "classname": "FieldDate",
            "name": "com.hcl.kra.FieldDate"
        });
        voltmx.mvc.registry.add("com.hcl.kra.FieldTextArea", {
            "viewName": "FieldTextArea",
            "controllerName": "FieldTextAreaController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.kra",
            "classname": "FieldTextArea",
            "name": "com.hcl.kra.FieldTextArea"
        });
        voltmx.mvc.registry.add("com.hcl.kra.FieldTime", {
            "viewName": "FieldTime",
            "controllerName": "FieldTimeController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.kra",
            "classname": "FieldTime",
            "name": "com.hcl.kra.FieldTime"
        });
        voltmx.mvc.registry.add("com.hcl.kra.FormHome", {
            "viewName": "FormHome",
            "controllerName": "FormHomeController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.kra",
            "classname": "FormHome",
            "name": "com.hcl.kra.FormHome"
        });
        voltmx.mvc.registry.add("com.hcl.mario.DayEventLine", {
            "viewName": "DayEventLine",
            "controllerName": "DayEventLineController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "DayEventLine",
            "name": "com.hcl.mario.DayEventLine"
        });
        voltmx.mvc.registry.add("com.hcl.mario.MonthSelector", {
            "viewName": "MonthSelector",
            "controllerName": "MonthSelectorController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "MonthSelector",
            "name": "com.hcl.mario.MonthSelector"
        });
        voltmx.mvc.registry.add("com.hcl.mario.TimeSelectorElement", {
            "viewName": "TimeSelectorElement",
            "controllerName": "TimeSelectorElementController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "TimeSelectorElement",
            "name": "com.hcl.mario.TimeSelectorElement"
        });
        voltmx.mvc.registry.add("com.hcl.mario.Weekdays", {
            "viewName": "Weekdays",
            "controllerName": "WeekdaysController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "Weekdays",
            "name": "com.hcl.mario.Weekdays"
        });
        voltmx.mvc.registry.add("konylogin.ACMELogin", {
            "viewName": "ACMELogin",
            "controllerName": "ACMELoginController"
        });
        voltmx.application.registerMaster({
            "namespace": "konylogin",
            "classname": "ACMELogin",
            "name": "konylogin.ACMELogin"
        });
        voltmx.mvc.registry.add("com.hcl.mario.MonthlyCalendarDay", {
            "viewName": "MonthlyCalendarDay",
            "controllerName": "MonthlyCalendarDayController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "MonthlyCalendarDay",
            "name": "com.hcl.mario.MonthlyCalendarDay"
        });
        voltmx.mvc.registry.add("com.hcl.mario.TimeSelector", {
            "viewName": "TimeSelector",
            "controllerName": "TimeSelectorController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "TimeSelector",
            "name": "com.hcl.mario.TimeSelector"
        });
        voltmx.mvc.registry.add("com.hcl.mario.MonthlyCalendarWeek", {
            "viewName": "MonthlyCalendarWeek",
            "controllerName": "MonthlyCalendarWeekController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "MonthlyCalendarWeek",
            "name": "com.hcl.mario.MonthlyCalendarWeek"
        });
        voltmx.mvc.registry.add("com.hcl.mario.BiMonthlyCalendar", {
            "viewName": "BiMonthlyCalendar",
            "controllerName": "BiMonthlyCalendarController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "BiMonthlyCalendar",
            "name": "com.hcl.mario.BiMonthlyCalendar"
        });
        voltmx.mvc.registry.add("com.hcl.mario.MonthlyCalendar", {
            "viewName": "MonthlyCalendar",
            "controllerName": "MonthlyCalendarController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "MonthlyCalendar",
            "name": "com.hcl.mario.MonthlyCalendar"
        });
        voltmx.mvc.registry.add("com.hcl.mario.DateSelector", {
            "viewName": "DateSelector",
            "controllerName": "DateSelectorController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.mario",
            "classname": "DateSelector",
            "name": "com.hcl.mario.DateSelector"
        });
        voltmx.mvc.registry.add("com.hcl.kra.EditAllocation", {
            "viewName": "EditAllocation",
            "controllerName": "EditAllocationController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.kra",
            "classname": "EditAllocation",
            "name": "com.hcl.kra.EditAllocation"
        });
        voltmx.mvc.registry.add("com.hcl.kra.FormAllocation", {
            "viewName": "FormAllocation",
            "controllerName": "FormAllocationController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.kra",
            "classname": "FormAllocation",
            "name": "com.hcl.kra.FormAllocation"
        });
        voltmx.mvc.registry.add("flxResourceTypeSelector", {
            "viewName": "flxResourceTypeSelector",
            "controllerName": "flxResourceTypeSelectorController"
        });
        voltmx.mvc.registry.add("flxResources", {
            "viewName": "flxResources",
            "controllerName": "flxResourcesController"
        });
        voltmx.mvc.registry.add("flxResourcesHeader", {
            "viewName": "flxResourcesHeader",
            "controllerName": "flxResourcesHeaderController"
        });
        voltmx.mvc.registry.add("frmAllocation", {
            "viewName": "frmAllocation",
            "controllerName": "frmAllocationController"
        });
        voltmx.mvc.registry.add("frmHome", {
            "viewName": "frmHome",
            "controllerName": "frmHomeController"
        });
        voltmx.mvc.registry.add("frmLogin", {
            "viewName": "frmLogin",
            "controllerName": "frmLoginController"
        });
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("frmLogin").navigate();
    }
});