// escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imagem (number)
// Retorne true se a imagem estiver no modo paisagem

function ePaisagem(altura, largura){
    if (altura > largura){
        return false;
    } else {
        return true;
    }
}

console.log(ePaisagem(2, 1))

//acima foi a resolução que eu consegui fazer sozinho
//abaixo segue a resolução do professor

/*
function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}
console.log(ePaisagem(1080, 1920));
*/


//abaixo uma versão mais simples ainda:

/*

function ePaisagem(largura, altura){
    return largura > altura;
}
console.log(ePaisagem(1080, 1920));

*/


// E ABAIXO A VERSÃO MAIS SIMPLES DE TODAS:

/*

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));

*/