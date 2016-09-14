'use strict';


//Logger

function preparaLabel(label){
  return function(mensagem){
    return label + ' ' + mensagem;
  }
}

console.log(preparaLabel('Nome:')('Esse é o nome da pessoa!'));


var valor = preparaLabel('Log: ');

console.log(valor('Erro X'));
console.log(valor('Aviso Y'));
