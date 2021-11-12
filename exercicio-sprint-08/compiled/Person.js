"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(id, name, bio, inventorOf) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.inventor = inventorOf;
    }
    ;
    /**
     * Método para retornar um objeto;
     * @returns Retorna um objeto seguinte a interface IProgrammer;
     */
    createPerson() {
        return { id: this.id, name: this.name, bio: this.bio, inventor: this.inventor };
    }
    ;
    get getName() {
        return this.name;
    }
    ;
    get getBio() {
        return this.bio;
    }
    ;
    get getInvento() {
        return this.inventor;
    }
    ;
}
exports.Person = Person;
;
