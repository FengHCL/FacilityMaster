define("com/hcl/kra/FormHome/userFormHomeController", function() {
    const ICON_HOUSING = 'j'; //1
    const ICON_MEETING = 'i'; //2
    const ICON_PARKING = 'P'; //3
    const ICON_EDIT = 'y';
    const ICON_ALL = '0';
    const ICONS = [ICON_ALL, ICON_HOUSING, ICON_MEETING, ICON_PARKING];
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.postShow = () => {
                if (!this.initDone) {
                    this.loadData().then(() => {
                        this.loadSegment(0);
                    });
                    this.initDone = true;
                }
            };
            let contentHeight = 0;
            this.view.flxContent.doLayout = () => {
                this.contentHeight = this.view.flxContent.frame.height;
                this.adjustSize();
            };
            this.view.flxSelectResourceTypeField.onClick = () => {
                this.view.flxSelectResourceTypeList.isVisible = !this.view.flxSelectResourceTypeList.isVisible;
                this.adjustSize();
            };
            //this.view.flxSelectResourceTypeList.onClick = () => this.view.flxSelectResourceTypeList.isVisible = false;
            this.view.segSelectResourceType.onRowClick = () => {
                const row = this.view.segSelectResourceType.selectedRowItems[0];
                const resourceType = parseInt(row.resourceType);
                this.view.iconType.text = ICONS[resourceType];
                this.view.resourceName.text = row.resourceName;
                this.loadSegment(resourceType);
                this.view.flxSelectResourceTypeList.isVisible = false;
                this.adjustSize();
            };
            this.view.segResources.onRowClick = () => {
                data.currentResource = this.view.segResources.selectedRowItems[0];
                new voltmx.mvc.Navigation('frmAllocation').navigate();
                voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true);
            };
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        loadData() {
            const promise = new Promise((resolve, reject) => {
                Promise.all([
                    data.loadObject('KRADemoResource'),
                    data.loadObject('KRADemoResourceType'),
                ]).then((response) => {
                    data.resource = [...response[0]];
                    data.resourceType = [...response[1]];
                    resolve();
                }).catch((error) => reject(error));
            });
            return promise;
        },
        loadSegment(resourceType) {
            const segData = [];
            data.resource.forEach((resource) => {
                if (resourceType === 0 || resourceType === resource.type) {
                    segData.push({
                        resourceId: resource.id,
                        resourceType: resource.type === 1 ? ICON_HOUSING : (resource.type === 2 ? ICON_MEETING : ICON_PARKING),
                        resourceName: resource.name,
                        iconEdit: ICON_EDIT
                    });
                }
            });
            this.view.segResources.setData([
                [{
                    resourceType: '',
                    resourceName: 'Resource Name'
                }, segData]
            ]);
        },
        adjustSize() {
            this.view.flxSelectResourceTypeList.isVisible && (this.view.flxResources.height = `${this.contentHeight - 204}dp`);
            this.view.flxSelectResourceTypeList.isVisible || (this.view.flxResources.height = `${this.contentHeight - 60}dp`);
        }
    };
});
define("com/hcl/kra/FormHome/FormHomeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/kra/FormHome/FormHomeController", ["com/hcl/kra/FormHome/userFormHomeController", "com/hcl/kra/FormHome/FormHomeControllerActions"], function() {
    var controller = require("com/hcl/kra/FormHome/userFormHomeController");
    var actions = require("com/hcl/kra/FormHome/FormHomeControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
