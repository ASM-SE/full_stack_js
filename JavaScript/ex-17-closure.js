'use strict';

//closure


function hipotenusa(catAdj){
  return function(catOps){
    return Math.sqrt(Math.pow(catAdj, 2) + Math.pow(catOps, 2));
  }

}

var alterarCatetos = hipotenusa(3);
console.log(alterarCatetos(4));

//por ser duas funções, não executa
console.log(hipotenusa(3,4));

//posso passar os parametros separados hipotenusa(3)(4)
