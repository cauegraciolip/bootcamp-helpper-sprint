"use strict";
var inputArray = [1, 5, 10];
function checkMaxAndMin(arr) {
    var reduced = arr.reduce(function (acc, next) { return acc + next; }) / arr.length;
    var output = [Math.max.apply(Math, arr), Math.min.apply(Math, arr), reduced];
    console.log(output);
    return output;
}
checkMaxAndMin(inputArray);
