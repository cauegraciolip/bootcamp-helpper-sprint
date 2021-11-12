const input : HTMLInputElement = document.querySelector("#input") as HTMLInputElement;
const div : HTMLDivElement = document.querySelector("#div") as HTMLDivElement;
const btn : HTMLButtonElement = document.querySelector("#btn") as HTMLButtonElement;

class Vowels {
    /**
     * Método que retorna a quantidade de vogais de um input;
     * @param phrase recebe a string que será contada
     * @returns retorna a quatidade de vogais em phrase
     */
    static counter(phrase : string) : number {
        const valueOfInput : RegExpMatchArray = phrase.match(/["aeiouéíóúàáê"]/gi) as RegExpMatchArray;
        return valueOfInput === null ? 0 : valueOfInput.length;
    };

    /**
     * Método que mostra a quantidade de vogais do input.
     * @returns retorna uma string que irá ser visualizada em tela;
     */
    static showVowelsCounted() : string {
        const getVowelsCounted : number = this.counter(input.value);
        return div.innerHTML = `Seu texto possui ${getVowelsCounted} vogal(ais)`;
    };
};

btn.addEventListener('click', () => {
    return Vowels.showVowelsCounted();
});
