const input = document.getElementById('textInput') as HTMLInputElement;
const inputDiv : HTMLDivElement = document.querySelector('#input-div') as HTMLDivElement;
const button : HTMLButtonElement = document.querySelector('#execute-function') as HTMLButtonElement;


input.addEventListener('input', (event : Event) : string => {
     // declara a variavel como um elemento input HTML
     const arrVowelsInput: HTMLInputElement = event.currentTarget as HTMLInputElement;
     // separa as vogais do input em um array
     const countVowels: RegExpMatchArray = arrVowelsInput.value.match(/['aeiouáàíìóúê']/gi) as RegExpMatchArray;

     if(countVowels === null) {
          return inputDiv.innerHTML = "Input está vazio"
     }

     return inputDiv.innerHTML = countVowels.length.toString()

})
