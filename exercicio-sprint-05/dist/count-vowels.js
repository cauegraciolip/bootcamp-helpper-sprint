"use strict";
var input = document.querySelector("#input-text");
var btn = document.querySelector('#btn');
var div = document.querySelector('#div');
btn.addEventListener('click', function () {
    var arrVowelsInput = letters.counter();
    return div.innerHTML = "Seu texto possui " + arrVowelsInput.toString() + " vogal(ais).";
});
var Vowels = /** @class */ (function () {
    function Vowels() {
        this._inputValue = "";
    }
    ;
    /**
     * Método cria array somente com vogais e retorna número vogais.
     * @returns retorna quantidade de vogais
     */
    Vowels.prototype.counter = function () {
        var getVowels = this._inputValue.match(/["aeiouéíóúìàáê"]/gi);
        if (getVowels === null) {
            return 0;
        }
        ;
        return getVowels.length;
    };
    ;
    /**
     * Método que recebe valor do input e atribui a inputValue.
     * @param input recebido do evento do eventlistener
     * @returns reatribuição de _inputValue
     */
    Vowels.prototype.valueOfInput = function (input) {
        return this._inputValue = input;
    };
    ;
    return Vowels;
}());
;
var letters = new Vowels();
/**
 * adiciona evento ao input
 * @event input evento captura escrita do input
 * @return retorna string com valor do input;
 */
input.addEventListener('input', function (event) {
    var lettersOfInput = event.currentTarget;
    return letters.valueOfInput(lettersOfInput.value);
});
