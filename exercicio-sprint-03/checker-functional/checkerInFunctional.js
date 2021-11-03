"use strict";
var inputArray = ['1', '5', "10", "335", "1000"];
var maxDiv = document.querySelector('#receive-max');
var minDiv = document.querySelector('#receive-min');
var mediaDiv = document.querySelector('#receive-media');
var listDiv = document.querySelector('#lista');
listDiv.innerHTML = inputArray.toString();
function isANumber(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (isNaN(arr[i])) {
            console.log('Existe letras nesse array, faça com que seja somente números.');
            return false;
        }
    }
    return true;
}
function checkMaxAndMin(arr) {
    if (isANumber(arr)) {
        // high order function para somar todos os valore do array
        var reduced = arr.reduce(function (acc, next) { return acc + next; }) / arr.length;
        // retorno do array já com valores de menor e maior
        var output = [Math.max.apply(Math, arr), Math.min.apply(Math, arr), reduced];
        maxDiv.innerHTML = Math.max.apply(Math, arr).toString();
        minDiv.innerHTML = Math.min.apply(Math, arr).toString();
        mediaDiv.innerHTML = reduced.toString();
        return output;
    }
    return [];
}
checkMaxAndMin(inputArray);
