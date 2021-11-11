"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programmer = void 0;
const person_1 = require("./person");
const programmer_factory_1 = require("./programmer-factory");
class Programmer extends programmer_factory_1.ProgrammerFactory {
    /**
     *
     * @param id number : identificar do objeto;
     * @param name string : nome de algo ou alguém;
     * @param bio string : biografia ou descrição de algo ou alguém;
     * @returns retorna a criação de um objeto do tipo IPorrammer;
     */
    getProgrammer(id, name, bio, invention) {
        if (invention === undefined) {
            invention = "";
        }
        ;
        if (name.toLowerCase() === "jean ichbiah") {
            invention = "Esse é o criador da linguagem Ada!";
        }
        ;
        return new person_1.Person(id, name, bio, invention);
    }
    ;
}
exports.Programmer = Programmer;
;
