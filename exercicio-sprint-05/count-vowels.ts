const input : HTMLInputElement = document.querySelector("#input-text") as HTMLInputElement;
const btn : HTMLButtonElement = document.querySelector('#btn') as HTMLButtonElement;
const div : HTMLDivElement = document.querySelector('#div') as HTMLDivElement;


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
        const getVowelsCounted : number = this.counter(input.value) as number;
        return div.innerHTML = `Seu texto possui ${getVowelsCounted} vogal(ais).` as string;
    };
};

btn.addEventListener('click', () : Vowels => {
    return Vowels.showVowelsCounted() as Vowels;
});
