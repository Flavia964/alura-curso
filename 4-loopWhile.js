const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`,
);
console.log("Destinos possíveis");
console.log(listaDeDestinos);

const idadeDoComprador = 19;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador"

const podeComprar = idadeDoComprador >=18 || estaAcompanhado === true;

let contador = 0;
let destinoExiste = false;
while (contador<=3) {
    if (listaDeDestinos[contador] === destino) {
        destinoExiste = true;
        break;
    }
    contador ++;
}
console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe tivemos um erro!");
}