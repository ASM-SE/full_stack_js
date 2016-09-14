'use strict';

//closure faz com que as funções - se forem movidas para outros locais
//é encontrado, pois está no contexto - estão próximos
var x = 0;

function soma(y){
  return x + y;
}

var result = soma(10);
console.log(result);
