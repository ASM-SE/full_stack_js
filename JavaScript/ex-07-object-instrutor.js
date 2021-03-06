'use strict';

//Exercício - Criar objeto de operações com as operações matemáticas básicas.

const operacoes = {
  x : 10,
  y : 20,
  soma : function(){
    return this.x + this.y;
  },
  subtracao : subtracao //atribuindo a funcao subtracao para o método
};

function subtracao(){
  return this.x - this.y;
};

operacoes.divisao = function (){
  return this.x/this.y;
};

var multiplicacao = function(){
  return this.x * this.y;
};

operacoes.multiplicacao = multiplicacao;

console.log(operacoes.soma());
console.log(operacoes.subtracao());
console.log(operacoes.divisao());
console.log(operacoes.multiplicacao());
