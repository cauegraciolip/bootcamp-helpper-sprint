"use strict";
const inputArray = ['1', '5', "10", "335", "1000"];
let maxDiv = document.querySelector('#receive-max');
let minDiv = document.querySelector('#receive-min');
let mediaDiv = document.querySelector('#receive-media');
let listDiv = document.querySelector('#lista');
listDiv.innerHTML = inputArray.toString();
function isANumber(arr) {
    for (let i of arr) {
        if (isNaN(arr[i])) {
            console.log('Existe letras nesse array, faça com que seja somente números.');
            return false;
        }
    }
    return true;
}
function checkMaxAndMin(arr) {
    if (isANumber(arr)) {
        // high order function para somar todos os valore do array
        const reduced = arr.reduce((acc, next) => acc + next) / arr.length;
        // retorno do array já com valores de menor e maior
        const output = [Math.max(...arr), Math.min(...arr), reduced];
        maxDiv.innerHTML = Math.max(...arr).toString();
        minDiv.innerHTML = Math.min(...arr).toString();
        mediaDiv.innerHTML = reduced.toString();
        return output;
    }
    return [];
}
checkMaxAndMin(inputArray);
