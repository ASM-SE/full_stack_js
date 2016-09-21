'use strict';


//manipulação de protótipo
//Uma forma mais elegante de manipulação do protótipo de objetos se dá através
//dos métodos getPrototypeOf e setPrototypeOf contidos em Object.
let pessoa = {
  sexo: 'Masculino'
};

let renan = {
  nome: 'Renan',
  idade: 24
};

Object.setPrototypeOf(renan, pessoa); //atribui o protótipo a um objeto passa dois parâmetros - objeto que recebe o protótipo e o protótipo

let jose = {
  nome: 'Jose',
  idade: 30
}

Object.setPrototypeOf(jose, pessoa);

console.log(renan);
console.log(renan.sexo);
console.log(jose.sexo);
console.log(Object.getPrototypeOf(renan));


pessoa.sexo  = 'Feminino';
console.log(renan.sexo);
console.log(jose.sexo);

renan.sexo = 'Masculino'; //propriedade do JS chamada shadow - ele procura primeiro no prototipo do objeto (pessoa), se não encontrar
//procura no prototipo do prototipo
console.log(renan.sexo);
console.log(jose.sexo);

//a propriedade do objeto sobrepoe a propriedade do prototipo - shadowing
console.log(renan); //renan mostra sexo porque a propriedade sexo foi atribuido
//quando o sexo é sobrescrito (sofre shadowing) essa propriedade é atribuída diretamente ao objeto que recebeu o prototipo
console.log(jose);
