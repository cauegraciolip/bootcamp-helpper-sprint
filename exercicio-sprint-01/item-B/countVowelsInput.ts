// função que conta vogais a partir de input
let input = document.getElementById('textInput') as HTMLInputElement;

input.addEventListener('input', (event) => {
     function countInput(): number {
          // declara a variavel como um elemento input HTML
          let arrVowelsInput = event.currentTarget as HTMLInputElement;
          // separa as vogais do input em um array
          let countVowels = arrVowelsInput.value.match(/['aeiou]/gi) as RegExpMatchArray
          // conta a quantidade de itens no array
          if(countVowels === null) {
               console.error("INPUT VAZIO")
          }
          return countVowels.length
     }

     return console.log(`Até aqui seu texto possui ${countInput()} vogais`)
})