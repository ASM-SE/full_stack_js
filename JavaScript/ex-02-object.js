'use strict';

//objetos em javascript são uma coleção dinâmica de valores

let pessoa = {
  'nome': 'Anderson' //[propriedade] : [valor]
};

//Outros modos de definição:
let pessoa2 = {
  nome: 'Teste Pessoa 2' //[propriedade] : [valor]
};

let pessoa3 = { };
pessoa3.nome = 'Teste Pessoa 3';

let pessoa4 = { };
pessoa4['nome'] = 'Teste Pessoa 4';

console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

pessoa.idade =  24; //adiciona uma propriedade ao objeto pessoa - essa mudança é dinâmica e diferente
//de java - são como se fossem mapas

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);

let nome1 = pessoa.nome;
let nome2 = pessoa['nome'];
console.log(nome1, nome2);

//posso fazer a atribuição de modo diferente

pessoa['telefone'] = 'Teste';
console.log(pessoa);

console.log(typeof pessoa); //verificar que tipo de objeto é
