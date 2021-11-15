// a função definida com a palavra function tem uma variável especial chamada ARGUMENTS que sustena todos os argumentos enviados
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

// observe que para uma função, não é necessário o ; depois de fechar a chave
// enquanto que em const ou let, se faz necessário o uso do ;
// para caracterizar o rest operator, é necessário o uso dos ...
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

const conta = (...args) => {
    console.log(args);
}
conta('+', 1, 20, 30, 40, 50);
