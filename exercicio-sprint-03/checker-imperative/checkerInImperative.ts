const input : number[] = [10, 9, 4, 3, 7, 12, 3, 4];

let majorDiv : HTMLDivElement = document.querySelector('#receive-max-imp') as HTMLDivElement;
let minorDiv : HTMLDivElement = document.querySelector('#receive-min-imp') as HTMLDivElement;
let mdDiv : HTMLDivElement = document.querySelector('#receive-media-imp') as HTMLDivElement;
let listaDiv : HTMLDivElement = document.querySelector('#lista-imp') as HTMLDivElement;


let maior : number = input[0];
let menor : number = input[0];
let acc = 0;

function checkIsNumber(arr : Array<number>) : boolean{
    for(let i in arr) {
        if(isNaN(arr[i])) {
            console.log('Existem letras ou string nesse array, faça com que seja somente números.')
            return false
        }
    }

    return true
}


const findMinorMajorAndMedia = (arr : Array<number>) : Array<number> | void => {
    if(checkIsNumber(arr)) {
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
        mdDiv.innerHTML = media.toString();

        return [maior, menor, media];

    }    

}

console.log(findMinorMajorAndMedia(input))

majorDiv.innerHTML = maior.toString();
minorDiv.innerHTML = menor.toString();
listaDiv.innerHTML = input.toString();
