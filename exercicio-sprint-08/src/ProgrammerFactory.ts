import { IPerson } from "./interface";
import { PersonFactory } from "./Person";

export class ProgrammerFactory extends PersonFactory {
    showPerson(id: number, name: string, bio: string, invention?: string): IPerson {
        return {id: id, name: name, bio: bio, invention: invention};
    };

    getPerson(id: number, name: string, bio: string, invention?: string) : IPerson {
        if(invention === undefined) {
            invention = "";
        };
        const person : IPerson = this.showPerson(id, name, bio, invention);
        return person;
    };
};