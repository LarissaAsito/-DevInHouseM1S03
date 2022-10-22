console.log('m1-so3-e7');

function montaMensagem(pessoa) {
    const { nome, idade, profissao } = pessoa;
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}`;
}

const montaMensagemArrow = ({ nome, idade, profissao }) =>
    `Esta é ${nome}, tem ${idade} anos e é ${profissao}`;


const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };

const mensagem = montaMensagem(pessoa);

console.log({ mensagem });

const mensagemA = montaMensagemArrow(pessoa);

console.log({ mensagemA });