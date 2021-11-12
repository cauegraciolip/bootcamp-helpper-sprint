interface IProgrammers {
    id: number;
    name: string;
    bio: string;
};

let listImperative: Array<IProgrammers> = [
    {
        id: 1, 
        name: "Ada Lovelace", 
        bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id : 2, 
        name: "Alan Turing", 
        bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id : 3, 
        name: "Nikola Tesla", 
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id : 4, 
        name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }];

function findBioById (id: number, list: Array<IProgrammers>) : string {
    let bio;
    for(let index of list) {
        if(index.id === id) {
            return bio = index.bio;
        };
    };
    console.log("Fing Bio using id : Imperative");
    return `Bio: ${bio}`;
};

function findNameById (id: number, list : Array<IProgrammers>) : string {
    let name;
    for(let index of list) {
        if (index.id === id) {
            return name = index.name;
        };
    };
    console.log("Find Name using Id : Imperative");
    return `Nome: ${name}`;
};

function removeThisId(id: number, list: Array<IProgrammers>) : Array<IProgrammers> {
    const newArray = [];
    for(let index of list) {
        if(index.id !== id) {
            newArray.push(index);
        };
    };
    console.log("Remove Id from array : Imperative");
    return newArray;
};

function changeThisId(id: number, list: Array<IProgrammers>, selected: string, content: string) : any {
    for(let i in list) {
        if(list[i].id === id) {
            let receiveChanged;
            if(selected === "name") {
                receiveChanged = {id: list[i].id, name: content, bio: list[i].bio};
            }

            else {
                receiveChanged = {id: list[i].id, name: list[i].name, bio: content};

            };
            console.log("Changing name or bio using Id : Imperative");
            return receiveChanged;
        };
        
    };

};


console.log(`Get Bio by Id Imperative = ${findBioById(1, listImperative)}`);
console.log(`Get Bio by Id Imperative = ${findNameById(1, listImperative)}`);
console.log(removeThisId(2, listImperative));

// teste item D
console.log(changeThisId(1, listImperative, "name", "Novo Nome"));
console.log(changeThisId(1, listImperative, "bio", "Nova Bio"));