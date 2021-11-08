const input : HTMLInputElement = document.querySelector("#input-text") as HTMLInputElement;
const btn : HTMLButtonElement = document.querySelector('#btn') as HTMLButtonElement;
const div : HTMLDivElement = document.querySelector('#div') as HTMLDivElement;

// btn.addEventListener('click', () => {
//     const arrVowelsInput : number = letters.counter();
//     return div.innerHTML = `Seu texto possui ${arrVowelsInput.toString()} vogal(ais).`;
// })

// class Vowels { 
//     private _inputValue: string;
//     constructor() {
//         this._inputValue = "";
//     };

//     /**
//      * Método cria array somente com vogais e retorna número vogais.
//      * @returns retorna quantidade de vogais
//      */
//     public counter() : number {
//         const getVowels : RegExpMatchArray = this._inputValue.match(/["aeiouéíóúìàáê"]/gi) as RegExpMatchArray;
//         if(getVowels === null) {
//             return 0;
//         };
//         return getVowels.length;
//     };

//     /**
//      * Método que recebe valor do input e atribui a inputValue.
//      * @param input recebido do evento do eventlistener
//      * @returns reatribuição de _inputValue 
//      */
//     public valueOfInput(input : string) : string {
//         return this._inputValue = input;
//     };
// };

// const letters : Vowels = new Vowels();

// /**
//  * adiciona evento ao input
//  * @event input evento captura escrita do input
//  * @return retorna string com valor do input;
//  */
// input.addEventListener('input', (event : Event) : string => {
//     const lettersOfInput : HTMLInputElement = event.currentTarget as HTMLInputElement;
//     return letters.valueOfInput(lettersOfInput.value);
// });

class Vowels {
    /**
     * Método que retorna a quantidade de vogais de um input;
     * @param phrase recebe a string que será contada
     * @returns retorna a quantidade de vogais em phrase
     */
    static counter(phrase : string) : number {
        const valueOfInput : RegExpMatchArray = phrase.match(/['aeiouáàíóúêé']/gi) as RegExpMatchArray;
        return valueOfInput === null ? 0 : valueOfInput.length;
    };
    /**
     * Método que mostra a quantidade de vogais do input.
     * @returns Retorna uma string que irá ser visualizada em tela.
     */
    static showVowelsCounted() : string {
        const getVowelsCounted : number = this.counter(input.value);
        return div.innerHTML = `Seu texto possui ${getVowelsCounted} vogal(ais).`;
    };
};

btn.addEventListener('click', () => {
    Vowels.showVowelsCounted();
});
