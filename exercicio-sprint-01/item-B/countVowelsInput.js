"use strict";
// função que conta vogais a partir de input
var input = document.getElementById('textInput');
input.addEventListener('input', function (event) {
    function countInput() {
        // declara a variavel como um elemento input HTML
        var arrVowelsInput = event.currentTarget;
        // separa as vogais do input em um array
        var countVowels = arrVowelsInput.value.match(/['aeiou]/gi);
        // conta a quantidade de itens no array
        if (countVowels === null) {
            console.error("INPUT VAZIO");
        }
        return countVowels.length;
    }
    return console.log("At\u00E9 aqui seu texto possui " + countInput() + " vogais");
});
