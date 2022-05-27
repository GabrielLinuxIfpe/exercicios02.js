function basket(string) {
    let lista = [];
    let listaRetorno = [];
    let contadorRecorde = 0;
    
    let inicio = 0;
    let maior = 0;
    let menor = -1;
    let posiMenor = 0;
    
    for(variavel in string.split(" ")) {
        let numAtual = parseInt(string.split(" ")[variavel]);
        lista.push(numAtual);

    }

    for(variavel in lista) {
        if(variavel == 0) {
            inicio = lista[variavel];
            maior = lista[variavel];
            menor = lista[variavel];
        }
    
        if(lista[variavel] > maior) {
            contadorRecorde++;
            maior = lista[variavel];
        }

        if(lista[variavel] < menor) {
            menor = lista[variavel];
            posiMenor = parseInt(variavel);
        }

    }

    listaRetorno.push(contadorRecorde);
    listaRetorno.push(posiMenor+1);

    return listaRetorno;

}



