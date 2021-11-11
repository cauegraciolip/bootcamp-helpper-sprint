"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammerFactory = void 0;
const Person_1 = require("./Person");
class ProgrammerFactory extends Person_1.PersonFactory {
    showPerson(id, name, bio, invention) {
        return { id: id, name: name, bio: bio, invention: invention };
    }
    ;
    getPerson(id, name, bio, invention) {
        if (invention === undefined) {
            invention = "";
        }
        ;
        const person = this.showPerson(id, name, bio, invention);
        return person;
    }
    ;
}
exports.ProgrammerFactory = ProgrammerFactory;
;
