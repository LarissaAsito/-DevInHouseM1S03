console.log('m1-so3-e5');

function somaTudo(...numeros) {
    let acumulador = 0;
    for (let i=0; i<numeros.length; i++) {
        acumulador += numeros[i];
    }
    return acumulador;
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);

function somaTudoFE(...numeros) {
    let acumulador = 0;
    numeros.forEach(num => {
        acumulador += num;
    });
    return acumulador;
}

const resultadoFE = somaTudoFE(1, 2, 3, 4);
console.log(resultadoFE);

const somaTudoA = (...numeros) => {
    let acumulador = 0;
    numeros.forEach(num => {
        acumulador += num;
    });
    return acumulador;
}

const resultadoA = somaTudoA(1, 2, 3, 4);
console.log(resultadoA);