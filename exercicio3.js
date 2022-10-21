console.log('m1-so3-e3');

function concatena(vetor1, vetor2) {
    return [...vetor1, ...vetor2];
}

const concatenaArrow = (vetor1, vetor2) => [...vetor1, ...vetor2];

const novoArray = concatena([1, 2, 3], [4, 5, 6]);

console.log(novoArray);

const novoArrayArrow = concatenaArrow([1, 2, 3], [4, 5, 6]);

console.log(novoArrayArrow);