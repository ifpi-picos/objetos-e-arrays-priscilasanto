let numeros = [50, 10, 1, 30, 20, 2];


numeros.sort((a, b) => a - b);


console.log("Array resultante:");
numeros.forEach((item) => console.log('- ' + item));
