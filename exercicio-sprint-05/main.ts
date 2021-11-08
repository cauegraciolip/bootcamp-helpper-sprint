interface IPerson {
    id: number;
    name: string;
    bio: string;
}

let lista : Array<IPerson> = [
    {
        id : 1, 
        name: "Ada Lovelace", 
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id : 2, 
        name: "Alan Turing", 
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3, 
        name: "Nikola Tesla", 
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {
        id: 4, 
        name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];

class Programmers{

    public findThisWithId(id : number, list : Array<IPerson>, search : string) : string | void {
        const scientists = list.find((person) => person.id === id) as IPerson;
        if(scientists.id === undefined) 
            return "ID inválido";
        if(search = "name")
            return scientists.name;
        else 
            return scientists.bio;
    };
    
};

const sci : Programmers = new Programmers();

console.log(sci.findThisWithId(1, lista, "name"));


