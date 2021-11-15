/* Maneira convencional de escrever:
const pontuacaoUsuario >= 1000;

if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
    } else {
        console.log('Usuário normal');
    }
*/

// Operação ternária:
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'; 
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario);
