const table : HTMLTableElement = document.getElementById('table-to-list') as HTMLTableElement;
const tableId : HTMLInputElement= document.getElementById("number-id") as HTMLInputElement;
const property : HTMLSelectElement = document.getElementById("select-edit") as HTMLSelectElement;
const tableContent : HTMLInputElement = document.getElementById("content-edit") as HTMLInputElement;

const button : HTMLButtonElement = document.getElementById("edit-table") as HTMLButtonElement;

interface IPerson {
    id: number;
    name: string;
    bio: string;
};

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


tableId.setAttribute('max', `${lista.length}`); // limite do input é o tamanho da lista

// ITEM A e B


const myTable : string = "<tr><th>ID</th><th>NAME</th><th>BIO</th><th>&nbsp;</th></tr>";

// a função recebe o conteúdo inicial e concatena com o contéudo da lista
// a função sempre vai iniciar com table.innerHTML abaixo, para que caso tenha alterção com CTA, seja mostrado em tela
function showThisTable(arr : Array<IPerson>) : void {
    table.innerHTML = myTable;
    arr.forEach((element) => {
        table.innerHTML += `<tr>
                                <td>${element.id.toString()}</td> 
                                <td>${element.name.toString()}</td>
                                <td>${element.bio.toString()}</td>
                                <td><img class="delete-button" onclick="deleteThisItem(this)" id="${element.id}" src="./times-circle-solid.svg" alt=""></td>
                            </tr>`
    })
};

showThisTable(lista);


// ITEM C

function setEdit() : void {
    // pega a selecao do input, se é name ou bio
    const optionValue : string = property.options[property.selectedIndex].value;
    // pega o numero selecionado no input tipo number
    const numberTableId : number = parseInt(tableId.value);
    // acha o index que foi selecionado no numberTableId
    let findPeople : IPerson = lista.find((person : IPerson) => person.id === numberTableId) as IPerson;

    // if que verifica o que foi selecionado no optionValue para entao mostrar na lista
    // sempre irá retornar a função showThisTable() com o novo conteúdo
    if(optionValue === "name") {
    
        findPeople.name = tableContent.value;

        return showThisTable(lista);

    } else if (optionValue === "bio") {

        findPeople.bio = tableContent.value;
        
        return showThisTable(lista);

    };

    return showThisTable(lista);
};

// ======

let deleteButton : NodeListOf<Element> = document.querySelectorAll('.delete-button');
let personId : number;

function deleteThisItem(element : Element) : void {
    personId = parseInt(element.id)
    for (let i of lista) {
        if(i.id === personId) {
            lista = lista.filter((element) => element.id !== i.id);
        }
    }

    return showThisTable(lista)
}

