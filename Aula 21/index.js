let num1 = prompt ("Digite um número");
let num2 = prompt ("Digite outro número");

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert('O resultado foi: ' + resultado);

/* ou podemos escrever=> alert(`O resultado foi: ${resultado}`); */

// ou ainda podemos escreve=> alert(`O resultado foi: ${num1 + num2}`); eliminando o const resultado = num1 + num2