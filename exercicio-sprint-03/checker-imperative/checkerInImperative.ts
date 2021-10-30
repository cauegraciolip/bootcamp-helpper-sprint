const input : number[] | string = [10, 10, 45, 21, 6, 71, 1, 22, 3];

let maior : number | string = input[0];
let menor : number | string = input[0];

for(let i of input) {
    
    if(i < menor) {
        menor = i;
        i++
    } else if (i > maior){
        maior = i
         i++
    } else {
        i++
    }
}

console.log(maior, menor)

    
