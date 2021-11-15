const numeros = [5, 50, , 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// some todos os números (reduce)

//const total = numeros.reduce(function(acumulador, valor, indice, array){
//    acumulador += valor;
//    return acumulador;
// }, 0);
//console.log(total);

// Retorne um array com os números pares (Filter)

//const total = numeros.reduce(function(acumulador, valor) {
  //  if(valor % 2=== 0) acumulador.push(valor);
  //  return acumulador;
// }, []);
// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63},
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
