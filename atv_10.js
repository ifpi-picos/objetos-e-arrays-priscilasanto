const filmes = [
  "Matrix",
  "Star Wars",
  "O Poderoso Chefão",
  "O Senhor dos Anéis",
  "Titanic",
];

filmes.forEach((filme, indice) => {
    if (indice === 0) {
        console.log(
            "Matrix: Um clássico que revolucionou o cinema com seus efeitos visuais inovadores e uma trama que desafia a realidade. Imperdível para fãs de ficção científica.\n"
        );
    } else if (indice === 1) {
        console.log("Star Wars: Uma saga épica que transporta os espectadores para um universo de aventura, mitologia e personagens icônicos. Um marco na cultura pop.\n");
    } else if (indice === 2) {
        console.log("O Poderoso Chefão: Um filme que define o gênero de gangster, com atuações brilhantes e uma narrativa envolvente que explora poder, família e traição.\n");
    } else if (indice === 3) {
        console.log("O Senhor dos Anéis: Uma jornada épica através de terras mágicas e perigosas, repleta de personagens memoráveis e batalhas grandiosas. Um clássico da fantasia.\n");
    } else if (indice === 4) {
        console.log("Titanic: Uma história de amor trágica situada no cenário deslumbrante do navio Titanic. Um filme que emociona e deixa uma marca duradoura no espectador.\n");
    }
});
