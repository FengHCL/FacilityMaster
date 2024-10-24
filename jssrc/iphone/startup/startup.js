//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "FacilityMaster",
    appName: "KRADemo",
    appVersion: "1.0.0",
    isturlbase: "https://dsta-academy.demo-hclvoltmx.net/services",
    isDebug: false,
    isMFApp: true,
    appKey: "bfffbdb90d344ef8df647ab5e7aa46a6",
    appSecret: "b007a02440efefb842247ab382239308",
    serviceUrl: "https://100000035.auth.demo-hclvoltmx.net/appconfig",
    svcDoc: {
        "identity_meta": {},
        "app_version": "1.0",
        "baseId": "7d435ca3-d0ea-4147-8b17-7c29bbd8e995",
        "app_default_version": "1.0",
        "login": [{
            "provider_type": "salesforce",
            "alias": "SalesForceIdentity",
            "type": "oauth2",
            "prov": "SalesForceIdentity",
            "url": "https://100000035.auth.demo-hclvoltmx.net"
        }],
        "services_meta": {
            "KRADemoObjectService": {
                "offline": false,
                "metadata_url": "https://dsta-academy.demo-hclvoltmx.net/services/metadata/v1/KRADemoObjectService",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://dsta-academy.demo-hclvoltmx.net/services/data/v1/KRADemoObjectService"
            }
        },
        "selflink": "https://100000035.auth.demo-hclvoltmx.net/appconfig",
        "integsvc": {
            "_internal_logout": "https://dsta-academy.demo-hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "00000192706E2298",
        "appId": "72eabcef-53b4-485d-a63c-5c14008bfd1c",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "KRADemo",
        "reportingsvc": {
            "session": "https://dsta-academy.demo-hclvoltmx.net/services/IST",
            "custom": "https://dsta-academy.demo-hclvoltmx.net/services/CMS"
        },
        "Webapp": {
            "url": "https://dsta-academy.demo-hclvoltmx.net/apps/KRADemo"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 9500,
        isCompositeApp: false
    });
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    voltmx.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: function(eventObj) {
            return applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new voltmx.mvc.Navigation("frmLogin").navigate();
        }
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
voltmx.print = function() {
    return;
};
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
voltmx.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);