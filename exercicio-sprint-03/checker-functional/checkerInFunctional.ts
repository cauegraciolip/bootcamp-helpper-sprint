const inputArray : number[] = [10, 300, 45, 21, 634, 71, 1, 22, 3]

function checkMaxAndMin(arr : number[]) : number[] {
    const reduced : number = arr.reduce((acc, next) => acc + next);
    const media : number = reduced / arr.length
    const output = [Math.max(...arr), Math.min(...arr), media]
    return output
}

checkMaxAndMin(inputArray)


