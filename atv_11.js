const filmes = [
    "The Witcher",
    "Harry Potter",
    "Senhor dos Aneis",
    "Interestelar",
    "Gente Grande",
];

for (let indice = 0; indice < filmes.length; indice++) {
    if (indice === 0) {
        console.log(
            "The Witcher: Se eu fosse um dos produtores da Netflix, não gastava dinheiro com a quarta temporada, vai jogar dinheiro fora pois público é zero, depois não adianta chorar e fazer mea-culpa.\n"
        );
    } else if (indice === 1) {
        console.log("Harry Potter: Filme incrível e emocionante, a animação e a representatividade incrível. Realmente se superaram nessa vez, cada mínimo detalhe é possível ver a cultura colombiana, e você sente uma semelhança com o Brasil, por ser da América Latina, o café, arroz e feijão, a dança com vestido rodado, simplesmente lindo. Magia, Inimigo.\n");
    } else if (indice === 2) {
        console.log("Senhor dos Anéis: Sabe esse pessoal que leu os livros e se acha expert? É só ignorar. Gente chata e que se acha dona. A série está um pouco devagar, mas está ótima.\n");
    } else if (indice === 3) {
        console.log("Interestelar: Me fez refletir sobre um postulado que desenvolvi quando tinha uns 10 anos e que sempre falei para as pessoas e algumas concordam. Que é sobre espaço, tempo, no mais, é isso, penso que vale a pena assistir.\n");
    } else if (indice === 4) {
        console.log("Gente Grande: Em meio a piadas de gosto duvidoso e até politicamente incorretas (que nunca seriam filmadas atualmente), o filme passa também algumas mensagens sobre lealdade, amizade e tolerância que são sempre bem-vindas.\n");
    }
}
