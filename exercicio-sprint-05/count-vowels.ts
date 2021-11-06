const input = document.querySelector("#input-text") as HTMLInputElement;
const btn = document.querySelector('#btn') as HTMLButtonElement;
const div = document.querySelector('#div') as HTMLDivElement;

btn.addEventListener('click', () => {
    const arrVowelsInput = letters.counter;
    return div.innerHTML = `Seu input possui ${arrVowelsInput.toString()} vogal(ais).`;
})

class Vowels { 
    private _inputValue: string;
    constructor() {
        this._inputValue = "";
    }

    get gVowels() : RegExpMatchArray {
       return this._inputValue.match(/["aeiouéíóúìàáê"]/gi) as RegExpMatchArray;
    }

    get counter() {
        return this.gVowels.length;
    }

    set LiveValue(input : string) {
        this._inputValue = input;
    }
}

const letters = new Vowels();

input.addEventListener('input', (event : Event) => {
    const lettersOfInput = event.currentTarget as HTMLInputElement;
    return letters.LiveValue = lettersOfInput.value;
})



