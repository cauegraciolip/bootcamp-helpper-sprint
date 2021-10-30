let inputArray = [10, 300, 45, 21, 634, 71, 1, 22, 3]

function checkMaxAndMin(arr : number[]) : number[] {
    arr.sort((a: number, b: number) : number => {
        return a < b ? -1 : a > b ? 1 : 0 
    })

    const reduced : number = arr.reduce((acc, next) => acc + next);
    const media : number = reduced / arr.length
    const output = [Math.max(...arr), Math.min(...arr), media]
    console.log(output)
    return arr
}

checkMaxAndMin(inputArray)


