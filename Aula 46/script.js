//const data = new Date();
//console.log(data.toString());

/*
const data = new Date(2019, 3); aqui se escreve na ordem ano, mês, dia, hora, minuto, segundo, milissegundo
console.log(data.toString());

ou

const data = new Date('2019-04-20 20:20:59');
console.log(data.toString());
Isso irá imprimir: Sat Apr 20 2019 20:20:59 GMT - 0300 (GMT-03:00)
Este formato é o mais utilizado
*/
/*
console.log('dia', data.getDate());
console.log('mês', data.getMonth() + 1); //o javascrip leva em conta Janeiro como o mês 0
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia da semana', data.getDay()); // 0 é domingo e 6 é sábado
*/


function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);