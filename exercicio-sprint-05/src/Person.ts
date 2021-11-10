export default class Person {
    id: number;
    name: string;
    bio: string;
    invention: string;
    constructor(id: number, name: string, bio: string, invention: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.invention = invention;
    };
};