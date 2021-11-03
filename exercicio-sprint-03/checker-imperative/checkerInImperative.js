"use strict";
var input = [10, 9, 4, 3, 7, 12, 3, 4];
var majorDiv = document.querySelector('#receive-max-imp');
var minorDiv = document.querySelector('#receive-min-imp');
var mdDiv = document.querySelector('#receive-media-imp');
var listaDiv = document.querySelector('#lista-imp');
var maior = input[0];
var menor = input[0];
var acc = 0;
function checkIsNumber(arr) {
    for (var i in arr) {
        if (isNaN(arr[i])) {
            console.log('Existem letras ou string nesse array, faça com que seja somente números.');
            return false;
        }
    }
    return true;
}
var findMinorMajorAndMedia = function (arr) {
    if (checkIsNumber(arr)) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var index = arr_1[_i];
            // acumula os valores dentro de acc;
            acc += index;
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
        }
        ;
        // media do acumulado
        var media = acc / arr.length;
        mdDiv.innerHTML = media.toString();
        return [maior, menor, media];
    }
};
console.log(findMinorMajorAndMedia(input));
majorDiv.innerHTML = maior.toString();
minorDiv.innerHTML = menor.toString();
listaDiv.innerHTML = input.toString();
