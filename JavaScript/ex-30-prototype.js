'use strict';

var propriedades =  'nome, idade, sexo, cpf';

function  quebrarCSV(csv){
  return csv.split(',');
}

console.log(quebrarCSV(propriedades));


//não é recomendado trocar uma funcão padrão do JS
''.__proto__.quebrarCSV02 = function(){
  return this.split(',');
}

console.log(propriedades.quebrarCSV02());
console.log('123,456'.quebrarCSV02());
