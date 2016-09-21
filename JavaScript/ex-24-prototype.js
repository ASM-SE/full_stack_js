'use strict';


//manipulação de protótipo - cadeia de protótipos
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

console.log(renan.__proto__); //referencia objeto pessoa
console.log(renan.__proto__.__proto__); //prototipo do objeto pessoa é object {}
console.log(renan.__proto__.__proto__.__proto__); // o prototipo do object é null

//o acesso __proto__ não é muito elegante - há uma outra forma
