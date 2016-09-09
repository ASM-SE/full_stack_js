'use strict';

//Exercício - Criar uma funcao que adiciona propriedades ao objeto
const obj = {}

obj.add = function(){obj.nome = 'Anderson Marcolino'};

obj.addFuncao = function(){obj.soma = function(){
  return 1 + 2;
}};


//resposta do instrutor

add(obj, 'nome', 'anderson');

function add(obj, nomeProp, valorProp){
  obj[nomeProp] = valorProp;
}



console.log(obj.add());
console.log(obj.addFuncao());
console.log(obj);
