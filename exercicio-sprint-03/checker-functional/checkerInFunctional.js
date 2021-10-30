"use strict";
var inputArray = [10, 300, 45, 21, 634, 71, 1, 22, 3];
function checkMaxAndMin(arr) {
    var reduced = arr.reduce(function (acc, next) { return acc + next; });
    var media = reduced / arr.length;
    var output = [Math.max.apply(Math, arr), Math.min.apply(Math, arr), media];
    return output;
}
checkMaxAndMin(inputArray);
