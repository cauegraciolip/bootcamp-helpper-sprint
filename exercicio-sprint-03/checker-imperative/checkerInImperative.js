"use strict";
var input = [10, 9, 4, 3, 7, 12, 3, 4];
var majorDiv = document.querySelector('#receive-max-imp');
var minorDiv = document.querySelector('#receive-min-imp');
var mdDiv = document.querySelector('#receive-media-imp');
var listaDiv = document.querySelector('#lista-imp');
var maior = input[0];
var menor = input[0];
var accumulated = 0;
function checkIsNumber(receivedArray) {
    for (var index in receivedArray) {
        if (isNaN(receivedArray[index])) {
            console.log('Existem letras ou string nesse array, faça com que seja somente números.');
            return false;
        }
        ;
    }
    ;
    return true;
}
;
var findMinorMajorAndMedia = function (receivedArray) {
    if (checkIsNumber(receivedArray)) {
        for (var _i = 0, receivedArray_1 = receivedArray; _i < receivedArray_1.length; _i++) {
            var index = receivedArray_1[_i];
            // acumula os valores dentro de acc;
            accumulated += index;
            // confere se o index é menor ou maior que os atribuidos nas variaveis e atribui um novo valor caso true;
            if (index < menor) {
                menor = index;
            }
            else if (index > maior) {
                maior = index;
            }
            else {
                index++;
            }
            ;
        }
        ;
        // media do acumulado
        var media = accumulated / receivedArray.length;
        mdDiv.innerHTML = media.toString();
        return [maior, menor, media];
    }
};
console.log(findMinorMajorAndMedia(input));
majorDiv.innerHTML = maior.toString();
minorDiv.innerHTML = menor.toString();
listaDiv.innerHTML = input.toString();
