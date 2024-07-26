
let pessoas = [
    { nome: 'Pedro', idade: 17 },
    { nome: 'Aline', idade: 20 },
    { nome: 'Patricia', idade: 25 },
    { nome: 'Luis', idade: 16 }
];


let pessoaMaiorDeIdade = pessoas.find(function(pessoa) {
    return pessoa.idade > 18;
});

if (pessoaMaiorDeIdade) {
    console.log('A primeira pessoa com idade maior que 18 é:', pessoaMaiorDeIdade);
} else {
    console.log('Nenhuma pessoa com idade maior que 18 foi encontrada.');
}
