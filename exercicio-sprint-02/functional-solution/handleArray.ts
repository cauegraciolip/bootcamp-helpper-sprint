interface IProgrammers {
    id: number;
    name: string;
    bio: string;
};

let lista: Array<IProgrammers> = [
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

// ITEM A
function getBioByID(id: number, list: Array<IProgrammers>) : string {
    const programmer : IProgrammers = list.find((prog) => prog.id === id ) as IProgrammers; // encontra o id desejado
    if(programmer.id === undefined) { // se o id for inválido retorno um erro
        return "id inválido";
    }
    return programmer.bio; // id válido retorna bio
}

// ITEM B
function getNameByID(id: number, list: Array<IProgrammers>) : string {
    const programmer : IProgrammers = list.find((prog) => prog.id === id ) as IProgrammers; // encontra o id desejado
    if(programmer.id === undefined) { // id inválido retorna erro
        return "id inválido";
    }
    return programmer.name; // id válido retorna nome 
}

// ITEM C
function removeIdFromArray(id: number, list: Array<IProgrammers>) : Array<IProgrammers> {
    const removedProgrammer : Array<IProgrammers> = list.filter((prog) => prog.id !== id); // seleciona todos os id, excluindo o desejado
    console.log("Remove Id From Array : Functional");
    return removedProgrammer; //  retorna um array excluindo o selecionado
}

// ITEM D
// função para alterar name ou bio -- recebe 4 parametros(id, a lista, o que quer alterar * deve ser passado como string ("name" / "bio") *, e o conteudo da alteração) 
function changeBioNameById(id: number, list: Array<IProgrammers>, toChange: string, content: string) : IProgrammers{

    let findId : IProgrammers = list.find((prog) => prog.id !== id) as IProgrammers // retorna uma lista excluindo o id desejado

    let changed : IProgrammers = findId

    if(toChange === "name") {
    
        changed.name = content

        return findId

    } else if (toChange === "bio") {

        changed.bio = content
        
        return findId
    }

    return findId
   
}

console.log(`Get Bio by Id Functional = ${getBioByID(1, lista)}`);
console.log(`Get Name by Id Functional = ${getNameByID(1, lista)}`);
console.log(removeIdFromArray(1, lista));
console.log(changeBioNameById(1, lista, "name", "Cauê")); // mudando o "name" 
console.log(changeBioNameById(1, lista, "bio", "Talvez esse seja seu último código!")); // mudando o "bio" 
