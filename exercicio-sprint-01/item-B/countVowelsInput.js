"use strict";
const input = document.getElementById('textInput');
const inputDiv = document.querySelector('#input-div');
const button = document.querySelector('#execute-function');
input.addEventListener('input', (event) => {
    // declara a variavel como um elemento input HTML
    const arrVowelsInput = event.currentTarget;
    // separa as vogais do input em um array
    const countVowels = arrVowelsInput.value.match(/['aeiouáàíìóúê']/gi);
    if (countVowels === null) {
        return inputDiv.innerHTML = "Input está vazio";
    }
    return inputDiv.innerHTML = countVowels.length.toString();
});
