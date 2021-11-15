/*
function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Oliveira', 44);
const pessoa5 = criaPessoa('Jean', 'Chera', 33);

console.log(pessoa1.nome, pessoa1.sobrenome);

*/
/*
const pessoa1 = {
    nome: 'Luiz',
    sombrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log("Olá mundo!");
    }
};

pessoa1.fala();
*/

const pessoa1 = {
    nome: 'Luiz',
    sombrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();