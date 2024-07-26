
let numeros = [];
for (let i = 1; i <= 10; i++) {
    numeros.push(i);
}


let multiplicadosPorDois = numeros.map(function(numero) {
    return numero * 2;
});


console.log(multiplicadosPorDois);
