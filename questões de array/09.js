let frutas = ['maçã', 'banana'];
let maisFrutas = ['laranja', 'pera'];


let todasFrutas = frutas.concat(maisFrutas);


console.log("Array resultante:");
todasFrutas.forEach((item) => console.log('- ' + item));
