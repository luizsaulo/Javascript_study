// Escreva uma função que recebe um número e retorne o seguinte:
// número é divisível por 3 = Fizz
// número é divisível por 5 = Buzz
// número é divisível por 3 e 5 = FizzBuzz
// numero NÃO é divisível por 3 e 5 = retorna o próprio número
// checar se o número é realmente um número
// use a função com números de 0 a 100

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}