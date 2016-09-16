var Pessoa = ( function PessoaModel() { //uma função para isolar o contexto e depois ter o return
'use strict';


function Pessoa(nome, nickname){

  this.nome = nome;
  this.nickname = nickname;


}

 return Pessoa;


})();
