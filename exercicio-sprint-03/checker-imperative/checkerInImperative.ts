const input : number[] = [10, 9, 4, 3, 7, 12, 3, 4];

let majorDiv : HTMLDivElement = document.querySelector('#receive-max-imp') as HTMLDivElement;
let minorDiv : HTMLDivElement = document.querySelector('#receive-min-imp') as HTMLDivElement;
let mdDiv : HTMLDivElement = document.querySelector('#receive-media-imp') as HTMLDivElement;
let listaDiv : HTMLDivElement = document.querySelector('#lista-imp') as HTMLDivElement;


let maior : number = input[0];
let menor : number = input[0];
let acc = 0;

const findMinorMajorAndMedia = (arr : Array<number>) : Array<number> => {
    for(let index of arr) {
        
        // acumula os valores dentro de acc;
        acc += index;

        // confere se o index é menor ou maior que os atribuidos nas variaveis e atribui um novo valor caso true;
        if(index < menor) {
            menor = index;
        } else if (index > maior){
            maior = index
        } else {
           index++
        }
    };

    // media do acumulado
    const media : number = acc / arr.length;

    return [maior, menor, media];

}

console.log(findMinorMajorAndMedia(input))

majorDiv.innerHTML = maior.toString();
minorDiv.innerHTML = menor.toString();
mdDiv.innerHTML = acc.toString();
listaDiv.innerHTML = input.toString();
