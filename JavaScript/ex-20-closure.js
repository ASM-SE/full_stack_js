'use strict';


//Logger
//Currying - uma função aninhada em outra... 
function configuraDebug(label){
  return function sendMessage(mensagem){ //não precisa ter um nome aqui na funcao... poderia ser direto function
    console.log(label, mensagem);
  }
}

const debugDoArquivo = configuraDebug('Arquivo');
const debugDaFuncao = configuraDebug('Arquivo');

debugDoArquivo('teste 1');
debugDaFuncao('teste 2');


console.log(configuraDebug('Nome:')('Esse é o nome da pessoa!'));


var valor = configuraDebug('Log: ');

console.log(valor('Erro X'));
console.log(valor('Aviso Y'));
