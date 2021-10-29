interface IProgrammers {
    id: number;
    name: string;
    bio: string;
}

interface IChangeBioName {
    id: number,
    name?: string;
    bio?: string;
}

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
    let programmer : any = list.find((prog) => prog.id === id ) // encontra o id desejado
    if(programmer.id === undefined) { // se o id for inválido retorno um erro
        return "id inválido";
    }
    return programmer.bio // id válido retorna bio
}

// ITEM B
function getNameByID(id: number, list: Array<IProgrammers>) : string {
    let programmer : any = list.find((prog) => prog.id === id ) // encontra o id desejado
    if(programmer.id === undefined) { // id inválido retorna erro
        return "id inválido" ;
    }
    return programmer.name // id válido retorna nome 
}

// ITEM C
function removeIdFromArray(id: number, list: Array<IProgrammers>) : Array<IProgrammers> {
    let removedProgrammer : Array<IProgrammers> = list.filter((prog) => prog.id !== id) // seleciona todos os id, excluindo o desejado
    return removedProgrammer //  retorna um array excluindo o selecionado
}

// ITEM D
// função para alterar name ou bio -- recebe 4 parametros(id, a lista, o que quer alterar * deve ser passado como string ("name" / "bio") *, e o conteudo da alteração) 
function changeBioNameById(id: number, list: Array<IChangeBioName>, toChange: string, content: string) : Array<IChangeBioName> {
    let whatChange : any = list.find((prog) => prog.id === id ) // pega o id desejado, utilizado para retornar um clone do objeto
    let removeIndex : Array<IChangeBioName> = list.filter((prog) => prog.id !== id) // retorna uma lista excluindo o id desejado

    if(whatChange.id === undefined) { // id inválido retorna erro
        alert("id inválido") 
    }

    const orderArray = () => removeIndex.sort((a : number | any, b : number | any) : number => a.id < b.id ? -1 : a.id > b.id ? 1 : 0 ) // função sort para manter a ordem do array

    // checa o que se quer alterar(name ou bio)
    if(toChange === "name") { // alterar name
        removeIndex.push({id: whatChange.id, name: content, bio: whatChange.bio}) // insere no array "removeIndex" um objeto com o id e bio do array alterado
        return orderArray()
    } else {
        removeIndex.push({id: whatChange.id, name: whatChange.name, bio: content}) // insere no array "removeIndex" um objeto com o id e bio do array alterado
        return orderArray()
    }
   
}

console.log(getBioByID(1, lista))
console.log(getNameByID(1, lista))
console.log(removeIdFromArray(1, lista))
console.log(changeBioNameById(1, lista, "name", "Cauê")) // mudando o "name" 
console.log(changeBioNameById(1, lista, "bio", "Talvez esse seja seu último código!")) // mudando o "bio" 