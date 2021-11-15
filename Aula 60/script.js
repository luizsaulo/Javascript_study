// escreva uma função que recebe 2 números e retorne o maior deles
// abaixo a primeira versão, a mais simples

function max(x, y){
    if (x > y){
        return x;
    } else {
        return y;
    }
}

console.log(max(1, 2));

// abaixo uma versão mais aprimorada

/*
function max(x, y){
    return x > y ? x : y;
}

console.log(max(1, 2));
*/

// abaixo uma versão mais simplificada ainda

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 20));