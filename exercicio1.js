console.log('m1-s03-e1');

function procuraMinMax(numeros) {
    if (!Array.isArray(numeros) || numeros.length<1){
        console.log('Não é possível encontrar.');
        return;
    }

    let min;
    let max;

    for (let i = 0; i<numeros.length; i++) {
        if (i==0) {
            min = numeros[i];
            max = numeros[i];
        }
        else
        {
            if (min>numeros[i]) {
                min = numeros[i];
            }  
            if (max<numeros[i]) {
                max = numeros[i];
            }
        }
    }
    console.log('Menor número: ' + min);
    console.log('Maior número: ' + max);
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2,-2,-2,-2]);
procuraMinMax([20,10, 30]);

const procuraMinMaxArrow = (numeros) => {
    if (!Array.isArray(numeros) || numeros.length<1){
        console.log('Não é possível encontrar.');
        return;
    }

    let min;
    let max;

    for (let i = 0; i<numeros.length; i++) {
        if (i==0) {
            min = numeros[i];
            max = numeros[i];
        }
        else
        {
            if (min>numeros[i]) {
                min = numeros[i];
            }  
            if (max<numeros[i]) {
                max = numeros[i];
            }
        }
    }
    console.log('Menor número: ' + min);
    console.log('Maior número: ' + max);
}

procuraMinMaxArrow([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMaxArrow([]);
procuraMinMaxArrow([1]);
procuraMinMaxArrow([1, -1]);
procuraMinMaxArrow(null);
procuraMinMaxArrow([-2,-2,-2,-2]);
procuraMinMaxArrow([20,10, 30]);