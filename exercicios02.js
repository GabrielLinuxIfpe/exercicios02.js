// questão 01

function boasVindas(nome) {
    return `Olá, ${nome}!`
}

console.log(boasVindas('gabriel'))

// questão 02

let converterIdadeEmAnosParaDias = (idade) => idade*365

console.log(converterIdadeEmAnosParaDias(25))

// questão 03

function calcularSalario(qtdHrsTrabalhadas, valorPorHora) {
    let calculo = qtdHrsTrabalhadas * valorPorHora

    return `Salário igual a R$ ${calculo}`
}

console.log(calcularSalario(10, 11))

// questão 04

function nomeDoMes(dia) {
    objeto = {1: 'Janeiro',
            2: 'Fevereiro',
            3: 'Março',
            4: 'Abril',
            5: 'Maio',
            6: 'Junho',
            7: 'Julho',
            8: 'Agosto',
            9: 'Setembro',
            10: 'Outubro',
            11: 'Novembro',
            12: 'Dezembro'}

    return objeto[dia]
}

console.log(nomeDoMes(2))


// questão 05

function maiorOuIgual(num1, num2) {
    if(num1 >= num2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(5, 1))


// questão 06

function inverso(parametro) {
    if(typeof(parametro) === "boolean") {
        return !parametro
    } else if(typeof(parametro) === "number") {
        return -parametro
    } else {
        return `"booleano ou número esperados, mas o parâmetro é do tipo ${typeof(parametro)}`
    }
}

console.log(inverso(-8))
console.log(inverso("gabriel"))


// questão 07

function estaEntre(numero, minimo, maximo, inclusivo) {
    if(inclusivo === true) {
        if(numero === minimo || numero === maximo) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(estaEntre(3, 150, 3, true))


// questão 08

function multiplicar(num1, num2) {
    var soma = 0
    var cont = 0

    while(cont < num1) {
        soma += num2
        cont++
    }

    return soma
}

console.log(multiplicar(2, 9))


// questão 09

function repetir(elemento, vezes) {
    array = []
    for(let i=0; i< vezes; i++) {
        array.push(elemento)
    }

    return array
}

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))


// questão 10

function simboloMais(numero) {
    let str = '+'
    return str.repeat(numero)
}

console.log(simboloMais(3))


// questão 11

function receberPrimeiroEUltimoElemento(array) {
    arrayfinal = []

    var primeiro = array[0]
    var ultimo = array[array.length - 1];

    arrayfinal.push(primeiro)
    arrayfinal.push(ultimo)

    return arrayfinal
}


console.log(receberPrimeiroEUltimoElemento([7, 14, 'olá']))


// questão 12

function removerPropriedade(obj, chave) {
    
    delete obj[`${chave}`]
    return obj
}

console.log(removerPropriedade({"a": 1, "b": 2, "c": 3}, "a"))


// questão 13

function filtrarNumeros(array) {
    newArray = []

    for(variavel in array) {
        if(typeof(array[variavel]) === 'number'){
            newArray.push(array[variavel])
        }
        
    }

    return newArray
}


console.log(filtrarNumeros(['javascript', 1, '3', 'web', 20]))


// questão 14

function objetoParaArray(obj) {
    array = []
    arr = []
    for(variavel in obj) {
        arr.push(variavel)
        arr.push(obj[variavel])
        array.push(arr)
        arr = []
    }

    return array
}

console.log(objetoParaArray({'nome': 'maria', 'profissão': 'desenvolvedora'}))


// questão 15

function receberSomenteOsParesDeIndicesPares(array) {
    newArray = []
    for(variavel in array) {
        if(variavel % 2 == 0 && array[variavel] % 2 == 0) {
            newArray.push(array[variavel])
        }
    }

    return newArray
}


console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))


// questão 16

function checarAnoBissexto(ano) {
    if(ano % 4 == 0 && ano % 100 != 0) {
        return true
    } else if(ano % 400 == 0) {
        return true
    } else {
        return false
    }
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))


// questão 17

function somarNumeros(array) {
    let somador = 0

    for(variavel in array) {
        somador += array[variavel]
    }

    return somador
}

console.log(somarNumeros([10, 10, 10]))


// questão 18

function despesasTotais(array) {
    let somador = 0
    for(variavel of array) {
        valor = parseFloat(variavel.preço)
        somador+=valor
    }

    return somador
}

console.log(despesasTotais([
    {'nome': 'Jornal online', 'categoria': 'Informação', 'preço': 89.99},
    {'nome': 'Cinema', 'categoria': 'Entretenimento', 'preço': 150}
]))


// questão 19

function calcularMedia(array) {
    let somador = 0
    for(variavel of array) {
        somador+=variavel
    }

    let media = somador / array.length

    return media
}


console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))


// questão 20

function areaDoTriangulo(base, altura) {
    let area = (base*altura) / 2

    return area.toFixed(2)
}


console.log(areaDoTriangulo(10, 15))


// questão 21

function menorNumero(array) {
    let menor = 0
    for(variavel in array) {
        if(variavel == 0) {
            menor = array[variavel]
        }

        if(array[variavel] < menor) {
            menor = array[variavel]
        }
    }

    return menor
}


console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))


// questão 22

function funcaoDaSorte(num) {
    let aleatorio = Math.floor(Math.random() * 10);

    if(num === aleatorio) {
        console.log(`Parabéns! O número sorteado foi o ${aleatorio}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${aleatorio}`)
    }

    
}


funcaoDaSorte(3)


// questão 23

function contarPalavras(string) {
    let contador = 0
    for(variavel in string.split(" ")){
        let palavra = string.split(" ")[variavel]
        contador++
    }

    return contador
}


console.log(contarPalavras("eu sou bom"))


// questão 24

function contarCaractere(caracter, frase) {
    let contador = 0
    for(variavel in frase) {
        if(caracter === frase[variavel]) {
            contador++
        }
    }

    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))


// questão 25 

function buscarPalavrasSemelhantes(palavra, array) {
    let lista = []
    for(variavel of array) {
        if(variavel.includes(palavra)) {
            lista.push(variavel)
        }
    }

    return lista
}


console.log(buscarPalavrasSemelhantes("pro", ['programação', 'mobile', 'profissional']))


// questão 26

function removerVogais(palavra) {
    let novaPalavra = ''
    for(variavel of palavra) {
        if(variavel == 'a' || variavel == 'e' || variavel == 'i' || variavel == 'o' || variavel == 'u') {
            continue
        } else {
            novaPalavra+=variavel
        }
    }

    return novaPalavra
}

console.log(removerVogais('cod3r'))
console.log(removerVogais('aeiou3'))


// questão 27

function inverter(obj) {
    newObj = {}
    for(variavel in obj) {
        //console.log(obj[variavel]) // retorna values
        //console.log(variavel) // retorna chaves

        newObj[obj[variavel]] = variavel
    }

    return newObj
}

console.log(inverter({'a': 1, 'b': 2}))


// questão 28

function filtrarPorQuantidadeDeDigitos(array, numero) {
    lista = []
    for(variavel of array) {
        if(variavel.toString().length === numero) {
            lista.push(variavel)
        }
    }
    
    return lista
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))


// questão 29

function segundoMaior(array) {
    array.sort(function(a, b) {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })

    var penultimo = array[array.length - 2]
    return penultimo
}

console.log(segundoMaior([3, 5, 10, 9]))
console.log(segundoMaior([8, 4, 5, 6]))



// questão 30

function receberMelhorEstudante(obj) {
    
}
