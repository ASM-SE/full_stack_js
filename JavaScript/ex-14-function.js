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

  this.comparar = function(obj, criterio, prop){
    return criterio(this, obj, prop);
  };

};

function comparaProp(obj1, obj2, prop){
  return obj1[prop] >= obj2[prop];
}

const pessoa1 = new Pessoa('Anderson', 30,'ander@teste.com');
const pessoa2 = new Pessoa('Joao', 21,'joao@joao.com');


const result = pessoa1.comparar(pessoa2, comparaProp, 'nome');

console.log(result);
