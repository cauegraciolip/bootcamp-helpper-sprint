"use strict";
var input = document.querySelector("#input");
var div = document.querySelector("#div");
var btn = document.querySelector("#btn");
var Vowels = /** @class */ (function () {
    function Vowels() {
    }
    /**
     * Método que retorna a quantidade de vogais de um input;
     * @param phrase recebe a string que será contada
     * @returns retorna a quatidade de vogais em phrase
     */
    Vowels.counter = function (phrase) {
        var valueOfInput = phrase.match(/["aeiouéíóúàáê"]/gi);
        return valueOfInput === null ? 0 : valueOfInput.length;
    };
    ;
    /**
     * Método que mostra a quantidade de vogais do input.
     * @returns retorna uma string que irá ser visualizada em tela;
     */
    Vowels.showVowelsCounted = function () {
        var getVowelsCounted = this.counter(input.value);
        return div.innerHTML = "Seu texto possui " + getVowelsCounted + " vogal(ais)";
    };
    ;
    return Vowels;
}());
;
btn.addEventListener('click', function () {
    return Vowels.showVowelsCounted();
});
