"use strict";
var inputArray = [1, 5, 10, 335, 100];
var maxDiv = document.querySelector('#receive-max');
var minDiv = document.querySelector('#receive-min');
var mediaDiv = document.querySelector('#receive-media');
var listDiv = document.querySelector('#lista');
listDiv.innerHTML = inputArray.toString();
function isANumber(receivedArray) {
    for (var _i = 0, receivedArray_1 = receivedArray; _i < receivedArray_1.length; _i++) {
        var index = receivedArray_1[_i];
        if (isNaN(receivedArray[index])) {
            console.log('Existe letras nesse array, faça com que seja somente números.', index);
            return false;
        }
        ;
        return true;
    }
    ;
}
;
function checkMaxAndMin(receivedArray) {
    if (isANumber(receivedArray)) {
        // high order function para somar todos os valore do array
        var reduced = receivedArray.reduce(function (primaryNumber, next) { return primaryNumber + next; }) / receivedArray.length;
        // Div do HTML recebendo os valores de max, min e reduce;
        maxDiv.innerHTML = Math.max.apply(Math, receivedArray).toString();
        minDiv.innerHTML = Math.min.apply(Math, receivedArray).toString();
        mediaDiv.innerHTML = reduced.toString();
        // retorno do array já com valores de menor e maior
        return [Math.max.apply(Math, receivedArray), Math.min.apply(Math, receivedArray), reduced];
    }
    ;
    return [];
}
;
checkMaxAndMin(inputArray);
console.log(checkMaxAndMin(inputArray));
