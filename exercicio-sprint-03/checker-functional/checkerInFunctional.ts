const inputArray: Array<number>= [1, 5, 10];

function checkMaxAndMin(arr: Array<number>): number[]{
    const reduced: number = arr.reduce((acc, next) => acc + next) / arr.length;
    const output : Array<number> = [Math.max(...arr), Math.min(...arr), reduced];
    console.log(output)
    return output;
}

checkMaxAndMin(inputArray)

