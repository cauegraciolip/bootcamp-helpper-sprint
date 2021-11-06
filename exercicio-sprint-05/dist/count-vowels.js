"use strict";
var input = document.querySelector("#input-text");
var btn = document.querySelector('#btn');
var div = document.querySelector('#div');
btn.addEventListener('click', function () {
    var arrVowelsInput = letters.counter;
    return div.innerHTML = "Seu input possui " + arrVowelsInput.toString() + " vogal(ais).";
});
var Vowels = /** @class */ (function () {
    function Vowels() {
        this._inputValue = "";
    }
    Object.defineProperty(Vowels.prototype, "gVowels", {
        get: function () {
            return this._inputValue.match(/["aeiouéíóúìàáê"]/gi);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vowels.prototype, "counter", {
        get: function () {
            return this.gVowels.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vowels.prototype, "LiveValue", {
        set: function (input) {
            this._inputValue = input;
        },
        enumerable: false,
        configurable: true
    });
    return Vowels;
}());
var letters = new Vowels();
input.addEventListener('input', function (event) {
    var lettersOfInput = event.currentTarget;
    return letters.LiveValue = lettersOfInput.value;
});
