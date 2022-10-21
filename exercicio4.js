console.log('m1-so3-e4');

function mesclaObjetos(obj1, obj2) {
    return {...obj1, ...obj2};
}

const mesclaObjetosArrow = (o1, o2) => ({...o1, ...o2});

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);

const objUmA = { a: 1, b: 2 };
const objDoisA = { c: 3, d: 4 };
const novoObjetoA = mesclaObjetos(objUmA, objDoisA);
console.log(novoObjetoA);