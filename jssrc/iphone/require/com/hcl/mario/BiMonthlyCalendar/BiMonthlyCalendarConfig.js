define(function() {
    return {
        "properties": [{
            "name": "selectedDate",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "visibleDates",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "eventTypes",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "weekRowHeight",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["refresh", "setDayEvents", "resetDayEvents"],
        "events": ["onSelect", "onChangeMonth"]
    }
});