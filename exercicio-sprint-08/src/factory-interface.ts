import { IProgrammer } from "./object-interface";

/**
 * Interface para implementar método em classes;
 */
export interface IPerson {
    createPerson(id: number, name: string, bio: string) : IProgrammer ;
};