"use strict";
// função para contar vogais a partir de parametros
function countVowelsParams(word) {
    //  separa em um array somente as vogais
    var arrVowels = word.match(/['aeiou]/gi);
    // retorna a quantidade de itens dentro desse array
    return arrVowels.length;
}
console.log("O parametro possui " + countVowelsParams("Teste de funcionamento do código") + " vogais.");
