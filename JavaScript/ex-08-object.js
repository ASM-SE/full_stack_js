'use strict';

//Exercício - Criar objeto de operações com as operações matemáticas básicas.

const operacoes = {
  x : 10,
  y : 20,
  nome: 30,
  casa: 'teste',
  subtracao : subtracao //atribuindo a funcao subtracao para o método
};

console.log(typeof operacoes.y);

operacoes.soma = function(){ //funcao que somará todos os atributos se eles forem do tipo number
   var _var = 0;
   for(let ope in operacoes){
     if(typeof operacoes[ope] == 'number'){
       _var += operacoes[ope];
     }
   }
  return _var;
};

function subtracao(){
  var _var = 0;
  for(let ope in operacoes){
    if(typeof operacoes[ope] == 'number'){
      _var -= operacoes[ope];
    }
  }
 return _var;
};


//divisao e multiplicacao não funcionam para esse exemplo
operacoes.divisao = function (){
  var _var = 0;
  for(let ope in operacoes){
    if(typeof operacoes[ope] == 'number' && operacoes[ope] != 0){
      _var /= operacoes[ope];
    }
  }
 return _var;
};

var multiplicacao = function(){
  var _var = 0;
  for(let ope in operacoes){
    if(typeof operacoes[ope] == 'number' && operacoes[ope] != 0){
      _var *= operacoes[ope];
    }
  }
 return _var;
};

operacoes.multiplicacao = multiplicacao;

console.log(operacoes.soma());
console.log(operacoes.subtracao());
console.log(operacoes.divisao());
console.log(operacoes.multiplicacao());
