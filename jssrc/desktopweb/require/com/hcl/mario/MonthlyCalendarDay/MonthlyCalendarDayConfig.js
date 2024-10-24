define(function() {
    return {
        "properties": [{
            "name": "skinDay",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "month",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "day",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "year",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["getDate", "addEventLine", "getFirstEmptyLine", "resetEventLines"],
        "events": ["onDayClick"]
    }
});