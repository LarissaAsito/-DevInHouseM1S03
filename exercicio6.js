console.log('m1-so3-e6');

function verificaPalindromo(texto) {
    if (typeof texto !== 'string') {
        console.log('Texto inválida!');
        return;
    }

    const metade = texto.length / 2;
    const fim = texto.length - 1;
    let palindromo = true;
    for (let i = 0; i<metade; i++) {
        if (texto[i] !== texto[fim - i]) {
            palindromo = false;
            break;
        }
        /*console.log({
            i,
            ini: texto[i],
            fim: texto[fim - i]
        });*/
    }
    //console.log({texto});

    return palindromo;
}

function verificaPalindromoReverse(texto) {
    if (typeof texto !== 'string') {
        console.log('Texto inválida!');
        return;
    }

    const reverso = texto.split('').reverse().join('');
    //const reverso = [...texto].reverse().join(''); com spread
    
    return texto === reverso;
}

const teste1 = verificaPalindromo("ana");
console.log(teste1);

const teste2 = verificaPalindromo("julia");
console.log(teste2);

const teste1R = verificaPalindromoReverse("ana");
console.log(teste1R);

const teste2R = verificaPalindromoReverse("julia");
console.log(teste2R);