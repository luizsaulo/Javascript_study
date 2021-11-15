const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if (numero === 2){
        console.log('Pulei o nuúmero 2');
        continue;
    }

    console.log(numero);

    if(numero === 7){
        console.log('7 encontrado, saindo...');
        break;
    }
}

// no continue, o código pula o número indicado, mas continua sendo executado até o final
// no break, o código interrompe sua execuação e é finalizado