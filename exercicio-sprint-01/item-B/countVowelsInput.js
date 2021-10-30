"use strict";
// função que conta vogais a partir de input
const input = document.getElementById('textInput');
input.addEventListener('input', (event) => {
    function countInput() {
        // declara a variavel como um elemento input HTML
        const arrVowelsInput = event.currentTarget;
        // separa as vogais do input em um array
        const countVowels = arrVowelsInput.value.match(/['aeiou]/gi);
        // conta a quantidade de itens no array
        if (countVowels === null) {
            return console.error("INPUT VAZIO");
        }
        return countVowels.length;
    }
    return console.log(`Até aqui seu texto possui ${countInput()} vogais`);
});
