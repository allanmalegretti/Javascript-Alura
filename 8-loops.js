console.log(`\n Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";
// const destino = "São Paulo";
// const destino = "Rio de Janeiro";
// const destino = "Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        console.log("Destino disponível:", listaDeDestinos[contador]);
        break;
    } else {
        // destinoExiste = false;
        console.log("Destino indisponível:", destino);
        break;
    }
    contador += 1;
}

// console.log("Destino disponível:", destinoExiste)

// if(podeComprar && destinoExiste){
//     console.log("Boa Viagem");
// }else{
//     console.log("Desculpe tivemos um erro!");
// }

for (let i = 0 ; i <3 ; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        console.log("Destino disponível:", listaDeDestinos[i]);
        break;
    } else {
        // destinoExiste = false;
        console.log("Destino indisponível:", destino);
        break;
    }
}