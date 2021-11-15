//Global
function retornaFuncao(){
    const nome = 'Luiz'
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Otávio');
console.dir(funcao);
console.dir(funcao2);