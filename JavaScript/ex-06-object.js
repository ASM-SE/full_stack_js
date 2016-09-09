'use strict';

let pessoa = {
  nome: 'Anderson',

};

pessoa.getNome = getNome;

function getNome(){
  return this.nome
}

console.log(getNome());

console.log(pessoa.getNome());
