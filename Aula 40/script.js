const hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}


// else if só é usado depois de if já ter sido usado anteriormente
// não há limite de uso para else if
// só é possível haver 1 else na checagem, que só será validado caso nenhuma das condições anteriores foram verdadeiras
// podemos usar condições sem else if, utilizando somente if e else
// para abrir ou fechar as chaves, não é necessário o uso de ponto e vírgula, somente dentro das chaves