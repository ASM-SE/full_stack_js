'use strict';


//manipulação de protótipo
let pessoa = {
  sexo: 'Masculino'
};

let renan = {
  nome: 'Renan',
  __proto__ : pessoa //nem todos os interpretadores conseguem acessar assim
  //dificilmente se usa assim
};


console.log(renan); //aqui não imprime a propriedade sexo que foi incluído no objeto
console.log(renan.sexo); //aqui consigo acessar a propriedade - protótipo faz uma extensão do objeto
