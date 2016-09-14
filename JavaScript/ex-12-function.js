'use strict';


//Função construtora

//simula uma classe
function Pessoa(nome){
  this.nome = nome;

}

//para invoncar uma funcao construtora, utiliza-se o new
var anderson = new Pessoa('Anderson');

console.log(anderson);


//utilizando o call - o operador new praticamente simula
var jose = {};
Pessoa.call(jose, 'jose');
console.log(jose);


// no ECMA 6 já tem a declaração de classes, metodos construtores, etc
