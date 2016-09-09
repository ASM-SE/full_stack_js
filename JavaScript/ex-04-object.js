'use strict';

//exemplo de criação de função
function getNome(){
  return 'renan'; //em js não precisa definir os tipos de dados no parâmetro, nem se retorna ou não
}


let minhaFuncao = getNome; //dependendo do contexto a função pode se tornar um objeto

console.log(minhaFuncao);
console.log(minhaFuncao());

//se passar a funcao, o que será salva será o que está na função, o seu resultado:
let testeFuncao = getNome(); //neste caso testeFuncao vai receber o resultado da função, no caso, renan
console.log(testeFuncao);

function getNome2(sufixo = ' valor_default'){
  return 'anderson' + sufixo;
}

let minhaFuncao2 = getNome2;
console.log(minhaFuncao2());
