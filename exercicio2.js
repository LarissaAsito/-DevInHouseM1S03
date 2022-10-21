console.log('m1-so3-e2');

const campo = document.getElementById('nome');
const botao = document.getElementById('botao');
const p = document.getElementById('paragrafo');

const mensagemOla = (nome) => `Olá, ${nome}!`;

botao.addEventListener('click', () => {
    //console.log(mensagemOla(campo.value));
    const mensagem = mensagemOla(campo.value);
    p.innerHTML = mensagem;
    console.log(mensagem);
});



console.log(mensagemOla("Mariana"));