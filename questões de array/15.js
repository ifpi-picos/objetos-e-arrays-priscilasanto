
let filmes = [];

for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome do filme " + (i + 1));
    filmes.push(filme);
}

console.log("Filmes informados: ");
let numero = 1;
for (let filme of filmes) {
    console.log(numero + ". " + filme);
    numero++;
}
