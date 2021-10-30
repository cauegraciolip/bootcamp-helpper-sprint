const inputArray: Array<number>= [1, 5, 10];

function checkMaxAndMin(arr: Array<number>): number[]{
    // high order function para somar todos os valore do array
    const reduced: number = arr.reduce((acc, next) => acc + next) / arr.length;
    // retorno do array já com valores de menor e maior
    const output : Array<number> = [Math.max(...arr), Math.min(...arr), reduced];

    return output;
}

checkMaxAndMin(inputArray)

