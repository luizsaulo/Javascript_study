/* Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.80 de altura e seu IMC é  de .... 
Luiz Otávio nasceu em .... */

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;
console.log(anoNascimento)
 console.log(nome + " " + sobrenome + " tem " + idade + " anos" + " e tem " + imc + " de índice de massa corpórea");

 // ou na forma abaixo //

 console.log(`${nome} ${sobrenome} tem ${idade} anos e tem ${imc} de índice de massa corpórea`)