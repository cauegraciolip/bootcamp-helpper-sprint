"use strict";
let lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
class Programmers {
    /**
     * Método que procura um objeto especifico a partir do id;
     * @param id number : numero recebido para comparar com id do array lista
     * @returns retorna o objeto desejado;
     */
    findId(id) {
        return lista.find((person) => person.id === id);
    }
    ;
    /**
     * Método que filtra o array retornando somente os objetos diferentes ao desejado.
     * @param id number : numero recebido para comparar com id do array da lista
     * @returns retorna os objetos diferentes do objeto desejado;
     */
    filterId(id) {
        return lista.filter((person) => person.id !== id);
    }
}
;
class FindProgrammerById extends Programmers {
    /**
     * Método para encontrar e retornar o conteúdo da propriedade do objeto;
     * @param idParameter number : parametro recebe o id desejado;
     * @param search string : recebe o que se deseja retornar
     * @returns retorna string com name ou bio;
     */
    findSomeWithId(idParameter, search) {
        const scientist = this.findId(idParameter);
        if (search === "name") {
            return scientist.name;
        }
        else if (search === "bio") {
            return scientist.bio;
        }
        else {
            return "Essa propriedade não existe.";
        }
        ;
    }
    ;
}
;
class EraseThisIdFromList extends Programmers {
    /**
     * Método para excluir objeto a partir do id do objeto;
     * @param idParameter number : parametro recebe o id desejado;
     * @returns array : retorna array com o id selecionado excluído;
     */
    findToErase(idParameter) {
        const erasedId = this.filterId(idParameter);
        return erasedId;
    }
    ;
}
;
class EditThisId extends Programmers {
    /**
     * Método para alterar informação do objeto a partir de parametros.
     * @param idParameter number : parametro recebe o id desejado
     * @param toChange string : recebe o que se deseja alterar;
     * @param text string : recebe o texto para alteração
     * @returns retorna o objeto com os dados alterados -- a lista original também é alterada.
     */
    editThisProgrammer(idParameter, toChange, text) {
        const receivedList = this.findId(idParameter);
        const changed = receivedList;
        if (toChange === "name") {
            changed.name = text;
            return receivedList;
        }
        else if (toChange === "bio") {
            changed.bio = text;
            return receivedList;
        }
        else {
            return "Propriedade inexistente!";
        }
        ;
    }
    ;
}
;
const prog1 = new FindProgrammerById().findSomeWithId(1, "name");
console.log("Achei esse nome: ");
console.log(prog1);
const prog2 = new EraseThisIdFromList().findToErase(1);
console.log("Id 1 não está mais na lista!");
console.log(prog2);
const prog3 = new EditThisId().editThisProgrammer(3, "name", "Cauê Palacio");
console.log("O id escolhido foi alterado!");
console.log(prog3);
