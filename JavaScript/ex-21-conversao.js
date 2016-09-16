'use strict';

//conversão

function Pessoa(nome){

  this.nome = nome;
  this.toString = function(){ //converte o valor para poder ser utilizado em uma comparação booleana
    return this.nome;
  }

}

var result1 = new Pessoa('Renan') == 'Renan';
console.log(result1);

var result2 = new Pessoa('Renan') === 'Renan'; //se usar ===, como os tipos são distintos, dará falso
console.log(result2);
