import { IPerson } from "./interface";

export abstract class PersonFactory implements IPerson {
    id!: number;
    name!: string;
    bio!: string;
    invention?: string | undefined;
    abstract showPerson(id: number, name: string, bio: string, invention: string): IPerson;
};
