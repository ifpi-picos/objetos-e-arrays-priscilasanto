
let carros = [
    { nome: 'Fusca', ano: 2008 },
    { nome: 'Civic', ano: 2015 },
    { nome: 'Camaro', ano: 2018 },
    { nome: 'Gol', ano: 2010 },
    { nome: 'Mustang', ano: 2022 }
];


let carrosRecentes = carros.filter(function(carro) {
    return carro.ano > 2010;
});


console.log(carrosRecentes);
