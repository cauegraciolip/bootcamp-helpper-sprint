import { IPerson } from "./factory-interface";
import { IProgrammer } from "./object-interface";

export class Person implements IPerson {
    public id: number;
    public name: string;
    public bio: string;
    public inventor: string | undefined;
    constructor(id: number, name: string, bio: string, inventorOf?: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.inventor = inventorOf;
    };

    /**
     * Método para retornar um objeto;
     * @returns Retorna um objeto seguinte a interface IProgrammer;
     */
    public createPerson() : IProgrammer {
        return {id: this.id, name: this.name, bio: this.bio, inventor: this.inventor};
    };
};