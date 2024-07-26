function imprimirPrimeiroNome(nomeCompleto) {

    let partes = nomeCompleto.trim().split(' ');


    if (partes.length === 0) {
        console.log('Nome completo inválido. Certifique-se de fornecer pelo menos um nome.');
        return;
    }

    let primeiroNome = partes[0];
    

    console.log('Primeiro nome:', primeiroNome);
}


imprimirPrimeiroNome('Priscila do Espirito Santo Sousa');
