import { IPerson } from "./factory-interface";
import { IProgrammer } from "./object-interface";
import { Person } from "./person";
import { ProgrammerFactory } from "./programmer-factory";

export class Programmer extends ProgrammerFactory {

    /**
     * 
     * @param id number : identificar do objeto;
     * @param name string : nome de algo ou alguém;
     * @param bio string : biografia ou descrição de algo ou alguém;
     * @returns retorna a criação de um objeto do tipo IPorrammer;
     */
    getProgrammer(id: number, name: string, bio: string, invention?: string) : Person {
        if(invention === undefined) {
            invention = "";
        };
        if(name.toLowerCase() === "jean ichbiah") {
            invention = "Esse é o criador da linguagem Ada!";
        };
        return new Person(id, name, bio, invention);
    };
};