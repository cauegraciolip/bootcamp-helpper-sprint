"use strict";
const input = [10, 9, 4, 3, 7, 12, 3, 4];
let majorDiv = document.querySelector('#receive-max-imp');
let minorDiv = document.querySelector('#receive-min-imp');
let mdDiv = document.querySelector('#receive-media-imp');
let listaDiv = document.querySelector('#lista-imp');
let maior = input[0];
let menor = input[0];
let acc = 0;
function checkIsNumber(arr) {
    for (let i in arr) {
        if (isNaN(arr[i])) {
            console.log('Existem letras ou string nesse array, faça com que seja somente números.');
            return false;
        }
    }
    return true;
}
const findMinorMajorAndMedia = (arr) => {
    if (checkIsNumber(arr)) {
        for (let index of arr) {
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
        const media = acc / arr.length;
        mdDiv.innerHTML = media.toString();
        return [maior, menor, media];
    }
};
console.log(findMinorMajorAndMedia(input));
majorDiv.innerHTML = maior.toString();
minorDiv.innerHTML = menor.toString();
listaDiv.innerHTML = input.toString();
