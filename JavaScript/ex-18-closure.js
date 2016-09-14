'use strict';

//closure
//crie uma função de soma que seja invocada da
//seguinte maneira soma(5)(10)
function soma(x){
  return function(y){
    return x + y;
  }
}


var passaValor = soma(1);

console.log(passaaVlor(2));

console.log(soma(5)(10));
