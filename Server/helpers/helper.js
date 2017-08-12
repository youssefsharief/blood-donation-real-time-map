function findObject(array, id) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            return i;
        }
    }
    return -1;
}

function findObjects(array, property, id) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
        if (id == 'null' || id == '') {
            results.push(array[i])
            continue;
        }
        var test = array[i][property];
        if (test && test.toLowerCase().indexOf(id.toLowerCase()) != -1) {
            results.push(array[i]);
        }
    }
    return results;
}

function filterObjects(array, filter) {
    //TODO Probably shouldn't use a null string
    var filterList = [100, 0];

    var property = 'name';
    var stringId = 'null';
    if (filter) {
        filterList = filter.split(",");
        var regex = /([^ ]+) (?:startsWith|contains) '(.*)'/;
        var matches = regex.exec(filterList[filterList.length - 1])
        if (matches) {
            property = matches[1];
            stringId = matches[2];
        }
    }

    var results = findObjects(array, property, stringId)
    return {
        take: filterList[0],
        skip: filterList[1],
        totalCount: results.length,
        items: results
    }
}

module.exports = { filterObjects, findObject, findObjects}