const data = {
    currentResource: null,
    resource: [],
    resourceType: [],
    resourceAllocation: [],
    loadObject(objectName, filterField, filterValue) {
        const promise = new Promise((resolve, reject) => {
            const objSvc = VMXFoundry.getObjectService("KRADemoObjectService", {
                "access": "online"
            });
            const dataObject = new voltmx.sdk.dto.DataObject(objectName);
            if (filterField) {
                dataObject.odataUrl = `$filter=${filterField} eq ${filterValue}`;
            }
            objSvc.fetch({
                "dataObject": dataObject
            }, (response) => {
                resolve(response.records);
            }, (error) => {
                reject(error);
            });
        });
        return promise;
    }
};