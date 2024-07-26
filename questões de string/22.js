function imprimirPrimeiroEUltimoNome(nomeCompleto) {
    let partes = nomeCompleto.trim().split(' ');

    if (partes.length < 2) {
        console.log('Nome completo inválido. Certifique-se de fornecer pelo menos um primeiro nome e um sobrenome.');
        return;
    }

 
    let primeiroNome = partes[0];
    

    let ultimoNome = partes[partes.length - 1];

    console.log('Primeiro nome:', primeiroNome);
    console.log('Último nome:', ultimoNome);
}


imprimirPrimeiroEUltimoNome('Priscila do Espirito Santo Sousa');
