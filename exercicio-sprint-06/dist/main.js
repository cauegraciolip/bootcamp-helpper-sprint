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
    findId(id) {
        return lista.find((person) => person.id === id);
    }
    ;
    filterId(id) {
        return lista.filter((person) => person.id !== id);
    }
}
;
class FindProgrammerById extends Programmers {
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
    findToErase(idParameter) {
        const erasedId = this.filterId(idParameter);
        return erasedId;
    }
    ;
}
;
class EditThisId extends Programmers {
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
const prog1 = new EditThisId().editThisProgrammer(1, "name", "Caue");
console.log(prog1);
console.log(lista);
