"use strict";
let lista = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
];
// ITEM A
function getBioByID(id, list) {
  let programmerId = list.find((prog) => prog.id === id); // encontra o id desejado
  if (
    (programmerId === null || programmerId === void 0
      ? void 0
      : programmerId.id) === undefined
  ) {
    // se o id for inválido retorno um erro
    return console.error("id inválido");
  }
  return programmerId === null || programmerId === void 0
    ? void 0
    : programmerId.bio; // id válido retorna bio
}
// ITEM B
function getNameByID(id, list) {
  let programmerName = list.find((prog) => prog.id === id); // encontra o id desejado
  if (
    (programmerName === null || programmerName === void 0
      ? void 0
      : programmerName.id) === undefined
  ) {
    // id inválido retorna erro
    return console.error("id inválido");
  }
  return programmerName === null || programmerName === void 0
    ? void 0
    : programmerName.name; // id válido retorna nome
}
// ITEM C
function removeIdFromArray(id, list) {
  let removedProgrammer = list.filter((prog) => prog.id !== id); // seleciona todos os id, excluindo o desejado
  return removedProgrammer; //  retorna um array excluindo o selecionado
}
// ITEM D
// função para alterar name ou bio -- recebe 4 parametros(id, a lista, o que quer alterar * deve ser passado como string ("name" / "bio") *, e o conteudo da alteração)
function changeBioNameById(id, list, toChange, content) {
  let whatChange = list.find((prog) => prog.id === id); // pega o id desejado, utilizado para retornar um clone do objeto
  let removeIndex = list.filter((prog) => prog.id !== id); // retorna uma lista excluindo o id desejado
  if (
    (whatChange === null || whatChange === void 0 ? void 0 : whatChange.id) ===
    undefined
  ) {
    // id inválido retorna erro
    return console.log("id inválido");
  }
  const orderArray = () =>
    removeIndex.sort((a, b) => {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
  // checa o que se quer alterar(name ou bio)
  if (toChange === "name") {
    // alterar name
    removeIndex.push({
      id: whatChange === null || whatChange === void 0 ? void 0 : whatChange.id,
      name: content,
      bio:
        whatChange === null || whatChange === void 0 ? void 0 : whatChange.bio,
    }); // insere no array "removeIndex" um objeto com o id e bio do array alterado
    return orderArray();
  } else {
    removeIndex.push({
      id: whatChange === null || whatChange === void 0 ? void 0 : whatChange.id,
      name:
        whatChange === null || whatChange === void 0 ? void 0 : whatChange.name,
      bio: content,
    }); // insere no array "removeIndex" um objeto com o id e bio do array alterado
    return orderArray();
  }
}
