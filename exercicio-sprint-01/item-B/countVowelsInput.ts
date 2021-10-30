// função que conta vogais a partir de input
const input = document.getElementById('textInput') as HTMLInputElement;

input.addEventListener('input', (event) => {
     function countInput(): number | void {
          // declara a variavel como um elemento input HTML
          const arrVowelsInput: HTMLInputElement = event.currentTarget as HTMLInputElement;
          // separa as vogais do input em um array
          const countVowels: RegExpMatchArray = arrVowelsInput.value.match(/['aeiou]/gi) as RegExpMatchArray
          // conta a quantidade de itens no array
          if(countVowels === null) {
               return console.error("INPUT VAZIO")
          }
          return countVowels.length
     }

     return console.log(`Até aqui seu texto possui ${countInput()} vogais`)
})
