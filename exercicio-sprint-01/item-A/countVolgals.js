"use strict";
let parameterDiv = document.querySelector('#parameter-div');
let parameterText = document.querySelector('#text-parameter');
// função para contar vogais a partir de parametros
function countVowelsParams(word) {
    //  separa em um array somente as vogais
    const arrVowels = word.match(/['aeiouéáàíóúê']/gi);
    // mostra a palavra passado pelo parametro
    parameterText.innerHTML = word.toString();
    // coloca o length de arrVowels na div parameter-div
    return parameterDiv.innerHTML = arrVowels.length.toString();
}
countVowelsParams('paralelepipedo');
