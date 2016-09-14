'use strict';


//call e apply
function soma (x, y){
  return x + y;
}
//atribuo a funcao e passo o contexto para a funcao para o qual o this vai apontar
const result = soma.call({}, 10, 20);
//ou const result = soma.call(null, 10, 20);

//no apply os parâmetros são passados como array
const resultApply = soma.apply({}, [10, 20]);
console.log(result);
console.log(resultApply);
