// função clássica
function soma(x, y){
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2, 4);
console.log(resultado);

// função anônima
const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//  arrow function
const raiz = n => n ** 0.5;  // se houver só 1 parâmetro na função, pode retirar os parêntesis

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));