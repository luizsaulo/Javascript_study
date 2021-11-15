//             0       1        2         3      4
let alunos = ['Luiz', 'Maria', 'João']; //Luiza, Eduardo

console.log(typeof alunos);
console.log(alunos instanceof Array);

//  alunos.push('Luiza'); adiciona no fim do array
//  alunos.push('Eduardo'); adiciona no fim do array
//  alunos.unshift('José'); adicionaria no início do array, na primeira posição
//  alunos.shift(); excluir um elemento que está na primeira posição no array
//  alunos.pop(); vai excluir um elemento do final do array

//  console.log(alunos.slice(0,-2)); vai imrimir de Maria até João
//  console.log(alunos, slice(0, 3)); também vai imprimir de Maria até João

//  const removido = alunos.shift(); aqui você cria uma constante para armezenar o item que foi removido no começo do array
//  console.log(removido); aqui você imprime o item que foi removido
//  console.log(alunos); aqui você imprime a lista para verificar ela sem o item que foi removido



//  console.log(alunos[50]);  tentar acessar um índice que não existe, o resultado vai ser undefined

//  delete.alunos[1]; deleta o elemento, mas não exclui o índice, que aparecerá como vazio
//  console.log(alunos[1]); irá imprimir um índice vazio

//  alunos.push('Luiza'); adiciona um elemento no fim do array;
//  alunos.push('Eduardo'); adiciona um elemento no fim do array;

//  alunos[0] = 'Eduardo'; altera o valor do elemento de posição 0
//  alunos[3] = 'Luiza'; outra forma de adicionar um elemento em um índice que ianda não existe no array

//  alunos[alunos.length] = 'Luiza' outra forma de adicionar no fim 
//  alunos[alunos.length] = 'Fábio' outra forma de adicionar no fim
//  alunos[alunos.length] = 'Luana' outra forma de adicionar no fim

// console.log(alunos); imprime o array completo
// console.log(alunos[0]); imprime só o elemento de índice 0 do array
// console.log(alunos[2]); imprime só o elemento de índice 2 do array