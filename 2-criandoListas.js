console.log("Trabalhando com listas")
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);
listaDeDestinos.push(`Curitiba`, `Brasilia`); //Adicionando um item a lista, sem alterar a lista original.
listaDeDestinos.splice(1, 1); // O comando splice remove elemementos da lista.
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);