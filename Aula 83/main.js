const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2);
// outra forma de concatenar é por spread, veja abaixo
const a3 = [...a1, ...a2, ...[7, 8, 9]];
console.log(a3);

