define("com/hcl/kra/EditAllocation/userEditAllocationController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.flxLeft.onClick = () => this.view.isVisible = false;
            this.view.fieldStartDate.onOpenSelector = () => {
                this.view.cmpDateSelector.show(this.view.fieldStartDate.value, this.view.fieldStartDate.id);
            };
            this.view.fieldEndDate.onOpenSelector = () => {
                this.view.cmpDateSelector.show(this.view.fieldEndDate.value, this.view.fieldEndDate.id);
            };
            this.view.cmpDateSelector.onSelect = (selectedDate, widgetId) => {
                this.view[widgetId].value = selectedDate;
            };
            this.view.fieldStartTime.onOpenSelector = () => {
                this.view.cmpTimeSelector.show(this.view.fieldStartTime.value, this.view.fieldStartTime.id);
            };
            this.view.fieldEndTime.onOpenSelector = () => {
                this.view.cmpTimeSelector.show(this.view.fieldEndTime.value, this.view.fieldEndTime.id);
            };
            this.view.cmpTimeSelector.onSelect = (selectedTime, widgetId) => {
                this.view[widgetId].value = selectedTime;
            };
            this.view.buttonAllocate.onClick = () => {
                const startDate = this.view.fieldStartDate.value;
                const startTime = this.view.fieldStartTime.value || '00:00';
                const endDate = this.view.fieldEndDate.value;
                const endTime = this.view.fieldEndTime.value || '23:59';
                const notes = this.view.fieldNotes.value;
                if (startDate && endDate && notes) {
                    if (this.checkDates({
                            startDate,
                            startTime,
                            endDate,
                            endTime
                        })) {
                        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true);
                        const objSvc = VMXFoundry.getObjectService("KRADemoObjectService", {
                            "access": "online"
                        });
                        const dataObject = new voltmx.sdk.dto.DataObject("KRADemoResourceAllocation");
                        dataObject.addField("idResource", data.currentResource.resourceId);
                        dataObject.addField("startDate", startDate);
                        dataObject.addField("endDate", endDate);
                        dataObject.addField("startTime", startTime);
                        dataObject.addField("endTime", endTime);
                        dataObject.addField("notes", notes);
                        objSvc.create({
                            "dataObject": dataObject
                        }, (response) => {
                            voltmx.application.dismissLoadingScreen();
                            this.view.isVisible = false;
                            this.onDone();
                        }, (error) => {
                            voltmx.application.dismissLoadingScreen();
                            alert("Error while creating resource allocation.");
                        });
                    } else {
                        alert("Invalid dates.");
                    }
                } else {
                    alert('Please enter values in all required fields');
                }
            };
            this.view.buttonDelete.onClick = () => {
                voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true);
                const objSvc = VMXFoundry.getObjectService("KRADemoObjectService", {
                    "access": "online"
                });
                const dataObject = new voltmx.sdk.dto.DataObject("KRADemoResourceAllocation");
                dataObject.addField("id", this.idAllocation);
                dataObject.addField("primaryKeyField", "id");
                objSvc.deleteRecord({
                    "dataObject": dataObject
                }, (response) => {
                    voltmx.application.dismissLoadingScreen();
                    this.view.isVisible = false;
                    this.onDone();
                }, (error) => {
                    voltmx.application.dismissLoadingScreen();
                    alert("Error deleting resource allocation.");
                });
            };
            this.view.buttonUpdate.onClick = () => {
                const startDate = this.view.fieldStartDate.value;
                const startTime = this.view.fieldStartTime.value || '00:00';
                const endDate = this.view.fieldEndDate.value;
                const endTime = this.view.fieldEndTime.value || '23:59';
                const notes = this.view.fieldNotes.value;
                if (startDate && endDate && notes) {
                    if (this.checkDates({
                            startDate,
                            startTime,
                            endDate,
                            endTime
                        })) {
                        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true);
                        const objSvc = VMXFoundry.getObjectService("KRADemoObjectService", {
                            "access": "online"
                        });
                        const dataObject = new voltmx.sdk.dto.DataObject("KRADemoResourceAllocation");
                        dataObject.addField("id", this.idAllocation);
                        dataObject.addField("primaryKeyField", "id");
                        dataObject.addField("startDate", startDate);
                        dataObject.addField("endDate", endDate);
                        dataObject.addField("startTime", startTime);
                        dataObject.addField("endTime", endTime);
                        dataObject.addField("notes", notes);
                        objSvc.update({
                            "dataObject": dataObject
                        }, (response) => {
                            voltmx.application.dismissLoadingScreen();
                            this.view.isVisible = false;
                            this.onDone();
                        }, (error) => {
                            voltmx.application.dismissLoadingScreen();
                            alert("Error udating resource allocation.");
                        });
                    } else {
                        alert("Invalid dates.");
                    }
                } else {
                    alert('Please enter values in all required fields');
                }
            };
        },
        initGettersSetters() {},
        show({
            allocations,
            selectedDate
        }) {
            this.view.flxButtonAllocate.isVisible = allocations.length === 0;
            this.view.flxButtons.isVisible = allocations.length > 0;
            if (allocations.length > 0) {
                const allocation = allocations[0];
                this.idAllocation = allocation.id;
                this.view.fieldStartDate.value = allocation.startDate;
                this.view.fieldStartTime.value = allocation.startTime;
                this.view.fieldEndDate.value = allocation.endDate;
                this.view.fieldEndTime.value = allocation.endTime;
                this.view.fieldNotes.value = allocation.notes;
            } else {
                this.view.fieldStartDate.value = selectedDate;
                this.view.fieldEndDate.value = selectedDate;
                this.view.fieldStartTime.value = '00:00';
                this.view.fieldEndTime.value = '23:59';
                this.view.fieldNotes.value = '';
            }
            this.view.isVisible = true;
        },
        checkDates({
            startDate,
            startTime,
            endDate,
            endTime
        }) {
            let ret;
            if (startDate < endDate) {
                ret = true;
            } else if (startDate === endDate) {
                ret = startTime < endTime;
            } else {
                ret = false;
            }
            return ret;
        },
        onDone() {}
    };
});
define("com/hcl/kra/EditAllocation/EditAllocationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/kra/EditAllocation/EditAllocationController", ["com/hcl/kra/EditAllocation/userEditAllocationController", "com/hcl/kra/EditAllocation/EditAllocationControllerActions"], function() {
    var controller = require("com/hcl/kra/EditAllocation/userEditAllocationController");
    var actions = require("com/hcl/kra/EditAllocation/EditAllocationControllerActions");
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
