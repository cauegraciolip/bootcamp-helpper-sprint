"use strict";
var inputArray = [1, 5, 10];
function checkMaxAndMin(arr) {
    // high order function para somar todos os valore do array
    var reduced = arr.reduce(function (acc, next) { return acc + next; }) / arr.length;
    // retorno do array já com valores de menor e maior
    var output = [Math.max.apply(Math, arr), Math.min.apply(Math, arr), reduced];
    return output;
}
checkMaxAndMin(inputArray);
