define("com/hcl/kra/FormAllocation/userFormAllocationController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.flxLeft.onClick = () => new voltmx.mvc.Navigation('frmHome').navigate();
            this.view.cmpCalendar.onSelect = (selectedDate) => {
                this.view.cmpEditAllocation.show({
                    allocations: this.findAllocations(selectedDate),
                    selectedDate
                });
            };
            this.view.cmpEditAllocation.onDone = () => {
                voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true);
                this.loadAllocations();
            };
            this.view.preShow = () => {
                voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true);
                this.view.lblRight.text = data.currentResource.resourceType;
                this.view.lblTitle.text = data.currentResource.resourceName;
            };
            this.view.postShow = () => {
                this.loadAllocations();
            };
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        loadAllocations() {
            data.loadObject('KRADemoResourceAllocation', 'idResource', data.currentResource.resourceId).then((response) => {
                voltmx.application.dismissLoadingScreen();
                this.allocations = [...response];
                this.loadAllocationsInCalendar(response);
            }).catch((error) => {
                voltmx.application.dismissLoadingScreen();
                alert('Error loading resource allocation data.');
            });
        },
        loadAllocationsInCalendar(allocations) {
            let allocationEvents = [];
            this.view.cmpCalendar.visibleDates.forEach((visibleDate) => {
                allocations.forEach((allocation) => {
                    const startDate = allocation.startDate;
                    const endDate = allocation.endDate;
                    const startTime = allocation.startTime;
                    const endTime = allocation.endTime;
                    if (visibleDate >= startDate && visibleDate <= endDate) {
                        allocationEvents.push({
                            id: allocation.id,
                            date: visibleDate,
                            startDate,
                            startTime: visibleDate === startDate ? startTime : null,
                            endTime: visibleDate === endDate ? endTime : null,
                            eventType: 'allocation',
                            description: allocation.notes
                        });
                    }
                });
            });
            allocationEvents.sort((a, b) => {
                return a.startDate < b.startDate ? -1 : (a.startDate > b.startDate ? 1 : 0);
            });
            this.view.cmpCalendar.setDayEvents(allocationEvents);
        },
        findAllocations(selectedDate) {
            const allocations = [];
            this.allocations.forEach((allocation) => {
                if (selectedDate >= allocation.startDate && selectedDate <= allocation.endDate) {
                    allocations.push(allocation);
                }
            });
            return allocations;
        }
    };
});
define("com/hcl/kra/FormAllocation/FormAllocationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/kra/FormAllocation/FormAllocationController", ["com/hcl/kra/FormAllocation/userFormAllocationController", "com/hcl/kra/FormAllocation/FormAllocationControllerActions"], function() {
    var controller = require("com/hcl/kra/FormAllocation/userFormAllocationController");
    var actions = require("com/hcl/kra/FormAllocation/FormAllocationControllerActions");
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
