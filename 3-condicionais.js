const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`,
);

const idadeDoComprador = 19;
console.log(listaDeDestinos);

if(idadeDoComprador >= 18){
    listaDeDestinos.splice(1, 1);
    console.log("Comprador maior de idade");
}else{
    console.log("Comprador menor de idade NÃO posso vender");
}
console.log(listaDeDestinos);

// <18
// >18
// <=18
// >18
// ==18