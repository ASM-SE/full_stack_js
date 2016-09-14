'use strict';


function criterio(x ,y){
  return x.nome >= y.nome;
}

//Higher order function - passagem de funções por parâmetro
//No caso está chamando a função criterio
function comparacao(obj1, obj2, criterio){
  return criterio(obj1, obj2);
}

var renan = {nome : 'Renan'};
var jose = {nome : 'José'};
var result = comparacao(renan, jose, criterio);

console.log(result);
