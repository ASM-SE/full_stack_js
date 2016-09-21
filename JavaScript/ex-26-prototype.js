'use strict';


//manipulação de protótipo
//object.create - outra forma de setar o prototipe
let pessoa = {
  sexo: 'Masculino'
};

let renan = Object.create(pessoa);

console.log(renan);
console.log(renan.sexo);
