const inputArray: Array<any> | Array<number> = ['1', '5', "10", "335", "1000"];

let maxDiv : HTMLDivElement = document.querySelector('#receive-max') as HTMLDivElement;
let minDiv : HTMLDivElement = document.querySelector('#receive-min') as HTMLDivElement;
let mediaDiv : HTMLDivElement = document.querySelector('#receive-media') as HTMLDivElement;
let listDiv : HTMLDivElement = document.querySelector('#lista') as HTMLDivElement;

listDiv.innerHTML = inputArray.toString();

function isANumber(arr: Array<number>) : boolean{
    for(let i of arr) {
        if(isNaN(arr[i])) {
            console.log('Existe letras nesse array, faça com que seja somente números.')
            return false
        }
    }

    return true
}
function checkMaxAndMin(arr: Array<number>): number[]{
    if(isANumber(arr)) {
        // high order function para somar todos os valore do array
        const reduced: number = arr.reduce((acc, next) => acc + next) / arr.length;
        // retorno do array já com valores de menor e maior
        const output : Array<number> = [Math.max(...arr), Math.min(...arr), reduced];

        maxDiv.innerHTML = Math.max(...arr).toString();
        minDiv.innerHTML = Math.min(...arr).toString();
        mediaDiv.innerHTML = reduced.toString();

        return output;

    }

    return []
    
}

checkMaxAndMin(inputArray);

