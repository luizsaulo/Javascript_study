// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosada', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

// Adicione uma chave id em cada objeto

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj};
    newObj.id = (indice);
});
console.log(comIds);