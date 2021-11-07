const inputArray: Array<number> | Array<string> = [1, 5, 10, 335, 100];

let maxDiv : HTMLDivElement = document.querySelector('#receive-max') as HTMLDivElement;
let minDiv : HTMLDivElement = document.querySelector('#receive-min') as HTMLDivElement;
let mediaDiv : HTMLDivElement = document.querySelector('#receive-media') as HTMLDivElement;
let listDiv : HTMLDivElement = document.querySelector('#lista') as HTMLDivElement;

listDiv.innerHTML = inputArray.toString();

function isANumber(receivedArray: Array<number>) : void | boolean{
    for(let index of receivedArray) {
        if(isNaN(receivedArray[index])) {
           console.log('Existe letras nesse array, faça com que seja somente números.', index);
           return false;
        };
        return true;
    };
};
function checkMaxAndMin(receivedArray: Array<number>): number[]{
    if(isANumber(receivedArray)) {
        // high order function para somar todos os valore do array
        const reduced: number = receivedArray.reduce((primaryNumber, next) => primaryNumber + next) / receivedArray.length;

        // Div do HTML recebendo os valores de max, min e reduce;
        maxDiv.innerHTML = Math.max(...receivedArray).toString();
        minDiv.innerHTML = Math.min(...receivedArray).toString();
        mediaDiv.innerHTML = reduced.toString();


        // retorno do array já com valores de menor e maior
        return [Math.max(...receivedArray), Math.min(...receivedArray), reduced];

    };

    return [];
    
};

checkMaxAndMin(inputArray);
console.log(checkMaxAndMin(inputArray));
