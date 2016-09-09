'use strict';

//funcao - retorna valor
//procedimento - só executa um procedimento
//metodo - executa algo relacionado a um objeto (algo atrelado a um objeto)

let pessoa = {// criando um objeto pessoa
  nome: 'Anderson',
  getSobrenome: function(){ //pode ser definida uma função a um objeto, também deste modo
    return this.nome;
  }
};

pessoa.getNome = function(){ //esse é um metodo pois está atrelado a um metodo
//  return nome; se deixar assim ele não vai obter a propriedade nome, já que é de um objeto
// return pessoa.nome; se usar assim, não garante que esteja pegando o valor do objeto pessoa correto, por isso usa-se o this:
  return this.nome;
};


console.log(pessoa.getNome());
