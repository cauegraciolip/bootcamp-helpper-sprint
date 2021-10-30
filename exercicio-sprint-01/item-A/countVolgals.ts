// função para contar vogais a partir de parametros
function countVowelsParams (word: String): number {
     //  separa em um array somente as vogais
     const arrVowels: RegExpMatchArray = word.match(/['aeiou]/gi) as RegExpMatchArray
     // retorna a quantidade de itens dentro desse array
     return arrVowels.length
}

console.log(`O parametro possui ${countVowelsParams("Teste de funcionamento do código")} vogais.`)
