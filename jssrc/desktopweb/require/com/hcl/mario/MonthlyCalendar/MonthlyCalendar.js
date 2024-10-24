define(function() {
    return function(controller) {
        var MonthlyCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "MonthlyCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "skinFlxWhiteBorderRounded",
            "top": "0dp",
            "width": "420dp",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "KRADemo"
        }, controller.args[0], "MonthlyCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "MonthlyCalendar"), extendConfig({}, controller.args[2], "MonthlyCalendar"));
        MonthlyCalendar.setDefaultUnit(voltmx.flex.DP);
        var topCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "bottom": 10,
            "clipBounds": false,
            "id": "topCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "right": 10,
            "skin": "slFbox",
            "top": "10dp",
            "width": "400dp",
            "appName": "KRADemo"
        }, controller.args[0], "topCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "topCalendar"), extendConfig({}, controller.args[2], "topCalendar"));
        topCalendar.setDefaultUnit(voltmx.flex.DP);
        var flxSelectors = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "40dp",
            "id": "flxSelectors",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo"
        }, controller.args[0], "flxSelectors"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSelectors"), extendConfig({}, controller.args[2], "flxSelectors"));
        flxSelectors.setDefaultUnit(voltmx.flex.DP);
        var flxMonthYearSelectors = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "100%",
            "id": "flxMonthYearSelectors",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "KRADemo"
        }, controller.args[0], "flxMonthYearSelectors"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMonthYearSelectors"), extendConfig({}, controller.args[2], "flxMonthYearSelectors"));
        flxMonthYearSelectors.setDefaultUnit(voltmx.flex.DP);
        var monthSelector = new com.hcl.mario.MonthSelector(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "monthSelector",
            "isVisible": true,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "right": 160,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "monthSelector",
            "overrides": {
                "MonthSelector": {
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared"
                }
            }
        }, controller.args[0], "monthSelector"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "monthSelector"), extendConfig({
            "overrides": {}
        }, controller.args[2], "monthSelector"));
        monthSelector.month = 1;
        monthSelector.year = 2023;
        var flxToday = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "100%",
            "id": "flxToday",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "40dp",
            "appName": "KRADemo"
        }, controller.args[0], "flxToday"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxToday"), extendConfig({}, controller.args[2], "flxToday"));
        flxToday.setDefaultUnit(voltmx.flex.DP);
        var lblToday = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblToday",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblIconRed100",
            "text": "h",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblToday"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToday"), extendConfig({}, controller.args[2], "lblToday"));
        flxToday.add(lblToday);
        flxMonthYearSelectors.add(monthSelector, flxToday);
        flxSelectors.add(flxMonthYearSelectors);
        var weekdays = new com.hcl.mario.Weekdays(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "height": "40dp",
            "id": "weekdays",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "overrides": {}
        }, controller.args[0], "weekdays"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "weekdays"), extendConfig({
            "overrides": {}
        }, controller.args[2], "weekdays"));
        var flxCalendar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": 10,
            "centerX": "50%",
            "clipBounds": true,
            "height": "320dp",
            "id": "flxCalendar",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "90dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo"
        }, controller.args[0], "flxCalendar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCalendar"), extendConfig({}, controller.args[2], "flxCalendar"));
        flxCalendar.setDefaultUnit(voltmx.flex.DP);
        var week1 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "60dp",
            "id": "week1",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "week1",
            "overrides": {
                "MonthlyCalendarWeek": {
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
        }, controller.args[0], "week1"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week1"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week1"));
        var week2 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "60dp",
            "id": "week2",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "week2",
            "overrides": {
                "MonthlyCalendarWeek": {
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
        }, controller.args[0], "week2"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week2"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week2"));
        var week3 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "60dp",
            "id": "week3",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "week3",
            "overrides": {
                "MonthlyCalendarWeek": {
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
        }, controller.args[0], "week3"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week3"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week3"));
        var week4 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "60dp",
            "id": "week4",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "week4",
            "overrides": {
                "MonthlyCalendarWeek": {
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
        }, controller.args[0], "week4"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week4"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week4"));
        var week5 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "60dp",
            "id": "week5",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "week5",
            "overrides": {
                "MonthlyCalendarWeek": {
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
        }, controller.args[0], "week5"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week5"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week5"));
        var week6 = new com.hcl.mario.MonthlyCalendarWeek(extendConfig({
            "height": "60dp",
            "id": "week6",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "KRADemo",
            "viewType": "week6",
            "overrides": {
                "MonthlyCalendarWeek": {
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
        }, controller.args[0], "week6"), extendConfig({
            "paddingInPixel": false,
            "overrides": {}
        }, controller.args[1], "week6"), extendConfig({
            "overrides": {}
        }, controller.args[2], "week6"));
        flxCalendar.add(week1, week2, week3, week4, week5, week6);
        topCalendar.add(flxSelectors, weekdays, flxCalendar);
        MonthlyCalendar.add(topCalendar);
        MonthlyCalendar.breakpointResetData = {};
        MonthlyCalendar.breakpointData = {
            maxBreakpointWidth: 1366,
            "640": {
                "MonthlyCalendar": {
                    "isVisible": true,
                    "segmentProps": [],
                    "isSrcCompTopFlex": true
                },
                "flxSelectors": {
                    "segmentProps": []
                },
                "flxMonthYearSelectors": {
                    "bottom": {
                        "type": "string",
                        "value": ""
                    },
                    "height": {
                        "type": "string",
                        "value": "40dp"
                    },
                    "right": {
                        "type": "string",
                        "value": ""
                    },
                    "segmentProps": []
                },
                "monthSelector": {
                    "centerX": {
                        "type": "string",
                        "value": ""
                    },
                    "left": {
                        "type": "string",
                        "value": "0dp"
                    },
                    "right": {
                        "type": "string",
                        "value": ""
                    },
                    "segmentProps": [],
                    "parentWgtAccessPath": ["monthSelector"]
                },
                "weekdays": {
                    "segmentProps": [],
                    "parentWgtAccessPath": ["weekdays"]
                },
                "flxCalendar": {
                    "segmentProps": []
                }
            },
            "1024": {
                "flxSelectors": {
                    "segmentProps": []
                },
                "flxMonthYearSelectors": {
                    "height": {
                        "type": "string",
                        "value": "40dp"
                    },
                    "segmentProps": []
                },
                "monthSelector": {
                    "centerX": {
                        "type": "string",
                        "value": ""
                    },
                    "left": {
                        "type": "string",
                        "value": "0"
                    },
                    "right": {
                        "type": "string",
                        "value": ""
                    },
                    "segmentProps": [],
                    "parentWgtAccessPath": ["monthSelector"]
                },
                "weekdays": {
                    "segmentProps": [],
                    "parentWgtAccessPath": ["weekdays"]
                },
                "flxCalendar": {
                    "segmentProps": []
                }
            },
            "1366": {
                "flxMonthYearSelectors": {
                    "segmentProps": []
                },
                "monthSelector": {
                    "centerX": {
                        "type": "string",
                        "value": ""
                    },
                    "left": {
                        "type": "string",
                        "value": "0"
                    },
                    "right": {
                        "type": "string",
                        "value": ""
                    },
                    "segmentProps": [],
                    "parentWgtAccessPath": ["monthSelector"]
                }
            }
        }
        MonthlyCalendar.compInstData = {
            "monthSelector": {
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": ""
            },
            "week1": {
                "right": "",
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerX": "",
                "centerY": ""
            },
            "week2": {
                "right": "",
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerX": "",
                "centerY": ""
            },
            "week3": {
                "right": "",
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerX": "",
                "centerY": ""
            },
            "week4": {
                "right": "",
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerX": "",
                "centerY": ""
            },
            "week5": {
                "right": "",
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerX": "",
                "centerY": ""
            },
            "week6": {
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
        return MonthlyCalendar;
    }
})