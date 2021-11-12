interface IPerson {
    id: number;
    name: string;
    bio: string;
}

let listaImp : Array<IPerson> = [
    {
        id : 1, 
        name: "Ada Lovelace", 
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id : 2, 
        name: "Alan Turing", 
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3, 
        name: "Nikola Tesla", 
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {
        id: 4, 
        name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
class ProgrammersImp {
    /**
     * Método que procura um objeto especifico a partir do id;
     * @param id number : numero recebido para comparar com id do array lista
     * @returns retorna o objeto desejado;
     */
    public findId(id : number) : IPerson | void {
        for(let index of listaImp) {
            if(index.id === id) {
               return index;
            };
            return index;
        };
    };

    /**
     * Método que filtra o array retornando somente os objetos diferentes ao desejado.
     * @param id number : numero recebido para comparar com id do array da lista
     * @returns retorna os objetos diferentes do objeto desejado;
     */
    public filterId(id : number) : Array<IPerson> {
        const newList : IPerson[] = [];
        for (let index of listaImp) {
            if(index.id !== id) {
                newList.push(index);
            };
        };

        return newList;
    };
};

class FindProgrammerByIdImp extends ProgrammersImp {
    /**
     * Método para encontrar e retornar o conteúdo da propriedade do objeto;
     * @param idParameter number : parametro recebe o id desejado;
     * @param search string : recebe o que se deseja retornar
     * @returns retorna string com name ou bio;
     */
    public findSomeWithId(idParameter : number, search : string) : IPerson | string {
        const scientist : IPerson = this.findId(idParameter) as IPerson;
        if(search === "name") {
            return scientist.name;
        } else if (search === "bio") {
            return scientist.bio;
        } else {
            return "Essa propriedade não existe."
        };
    };

};

class EraseThisIdFromListImp extends ProgrammersImp {
    /**
     * Método para excluir objeto a partir do id do objeto;
     * @param idParameter number : parametro recebe o id desejado; 
     * @returns array : retorna array com o id selecionado excluído;
     */
    public findToErase(idParameter : number) : Array<IPerson> {
        const erasedId : Array<IPerson> = this.filterId(idParameter) as Array<IPerson>;
        return erasedId;
    };
};

class EditThisIdImp extends ProgrammersImp {
    /**
     * Método para alterar informação do objeto a partir de parametros.
     * @param idParameter number : parametro recebe o id desejado
     * @param toChange string : recebe o que se deseja alterar;
     * @param text string : recebe o texto para alteração
     * @returns retorna o objeto com os dados alterados -- a lista original também é alterada.
     */
    public editThisProgrammer(idParameter : number, toChange : string, text : string) : IPerson | string {
        const receivedList : IPerson = this.findId(idParameter) as IPerson;

        const changed : IPerson = receivedList;

        if(toChange === "name") {
            changed.name = text;
            return receivedList;
        } else if(toChange === "bio") {
            changed.bio = text;
            return receivedList;
        } else {
            return "Propriedade não existe no objeto."
        }
    };
};

const prog1Imp = new FindProgrammerById().findSomeWithId(4, "name");
console.log("Achei esse nome: ");
console.log(prog1Imp);

const prog2Imp = new EraseThisIdFromList().findToErase(3);
console.log("Id 3 não está mais na lista!");
console.log(prog2Imp);

const prog3Imp = new EditThisId().editThisProgrammer(1, "name", "Cauê Palacio");
console.log("O id escolhido foi alterado!");
console.log(prog3Imp);

