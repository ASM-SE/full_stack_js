'use strict';


//Exercicio - criar uma funcao construtora de Pessoa
//adicione os atributos nome, idade e email
//Crie um metodo de comparacao de pessoas com uma
//condicional dinamica que receba o nome da
//propriedade a ser comparada dois objetos

function Pessoa(nome, idade, email){
  this.nome = nome;
  this.idade = idade;
  this.email = email;

  this.comparar = function(obj, criterio){
    return criterio(this, obj);
  };

};

function preparaCriterio(prop){
  return function(obj1, obj2){
    return obj1[prop] >= obj2[prop];
  }
}

const pessoa1 = new Pessoa('Anderson', 30,'ander@teste.com');
const pessoa2 = new Pessoa('Joao', 21,'joao@joao.com');


const comparaNome = preparaCriterio('nome');
const comparaIdade = preparaCriterio('idade');
const comparaEmail = preparaCriterio('email');

var result = pessoa1.comparar(pessoa2, preparaCriterio('nome'));

console.log(result);

console.log(pessoa1.comparar(pessoa2, comparaNome));
console.log(pessoa1.comparar(pessoa2, comparaIdade));
console.log(pessoa1.comparar(pessoa2, comparaEmail));
