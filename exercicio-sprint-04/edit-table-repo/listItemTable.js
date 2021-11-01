"use strict";
const table = document.getElementById('table-to-list');
const tableId = document.getElementById("number-id");
const property = document.getElementById("select-edit");
const tableContent = document.getElementById("content-edit");
const button = document.getElementById("edit-table");
let lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
tableId.setAttribute('max', `${lista.length}`); // limite do input é o tamanho da lista
// ITEM A e B
// a função recebe o conteúdo inicial e concatena com o contéudo da lista
// a função sempre vai iniciar com table.innerHTML abaixo, para que caso tenha alterção com CTA, seja mostrado em tela
function showThisTable(arr) {
    let initialId = 0;
    table.innerHTML = "<tr><th>ID</th><th>NAME</th><th>BIO</th></tr>";
    arr.forEach((element) => {
        table.innerHTML += `<tr><td>${element.id.toString()}</td> <td>${element.name.toString()}</td> <td>${element.bio.toString()}</td></tr>`;
    });
}
;
showThisTable(lista);
// ITEM C
function setEdit() {
    // pega a selecao do input, se é name ou bio
    const optionValue = property.options[property.selectedIndex].value;
    // pega o numero selecionado no input tipo number
    const numberTableId = parseInt(tableId.value);
    // acha o index que foi selecionado no numberTableId
    let findPeople = lista.find((person) => person.id === numberTableId);
    // filtro para caso o usuário queira excluir um item da lista
    const filterList = lista.filter((element) => element.id !== numberTableId);
    // if que verifica o que foi selecionado no optionValue para entao mostrar na lista
    // sempre irá retornar a função showThisTable() com o novo conteúdo
    if (optionValue === "name") {
        findPeople.name = tableContent.value;
        return showThisTable(lista);
    }
    else if (optionValue === "bio") {
        findPeople.bio = tableContent.value;
        return showThisTable(lista);
    }
    else if (optionValue === "excluir") {
        return showThisTable(filterList);
    }
    return showThisTable(lista);
}
