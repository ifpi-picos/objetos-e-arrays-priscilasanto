let numeros = [1, 2, 3, 4, 5];


let elementoRemovido = numeros.shift();


console.log("Array resultante:");
numeros.forEach((item) => console.log('- ' + item));


console.log("Elemento removido:");
console.log(elementoRemovido);
