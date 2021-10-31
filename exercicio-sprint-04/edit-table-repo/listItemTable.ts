const table : HTMLTableElement = document.getElementById('table-to-list') as HTMLTableElement

const button : HTMLButtonElement = document.getElementById("edit-table") as HTMLButtonElement

interface IPerson {
    id: number;
    name: string;
    bio: string;
}

let lista: Array<IPerson> = [
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
    }
];


// ITEM A

lista.forEach((element) : void => {
    table.innerHTML += `<td>${element.id.toString()}</td> <td>${element.name.toString()}</td> <td>${element.bio.toString()}</td>`
})  


// ITEM B

function setEdit () : IPerson{
    const tableId : HTMLInputElement= document.getElementById("number-id") as HTMLInputElement;
    const property : HTMLSelectElement = document.getElementById("select-edit") as HTMLSelectElement;
    const tableContent : HTMLInputElement = document.getElementById("content-edit") as HTMLInputElement;

    let optionValue : string = property.options[property.selectedIndex].value;

    let numberTableId : number = parseInt(tableId.value);

    let findPeople : IPerson = lista.find((person) => person.id === numberTableId) as IPerson;

    let changed : IPerson = findPeople

    if(optionValue === "name") {
    
        changed.name = tableContent.value

        console.log(lista)

        return findPeople

    } else if (optionValue === "bio") {

        changed.bio = tableContent.value

        console.log(lista)
        
        return findPeople
    }

    console.log(findPeople)

    return findPeople
}


  
