let parameterDiv : HTMLDivElement = document.querySelector('#parameter-div') as HTMLDivElement
let parameterText : HTMLDivElement = document.querySelector('#text-parameter') as HTMLDivElement


// função para contar vogais a partir de parametros
function countVowelsParams (word: String): string {
     //  separa em um array somente as vogais
     const arrVowels: RegExpMatchArray = word.match(/['aeiouéáàíóúê']/gi) as RegExpMatchArray
     // mostra a palavra passado pelo parametro
     parameterText.innerHTML = word.toString()
     // coloca o length de arrVowels na div parameter-div
     return parameterDiv.innerHTML = arrVowels.length.toString()
}

countVowelsParams('paralelepipedo')
