let cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza'];


let indiceBH = cidades.indexOf('Belo Horizonte');


let indiceSalvador = cidades.indexOf('Salvador');


cidades.splice(indiceBH, 2);


console.log("Array resultante:");
cidades.forEach((item) => console.log('- ' + item));
