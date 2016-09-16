'use strict';



function funcao1(){
  console.log('funcao1');
  return false;
}

function funcao2(){
  console.log('funcao2');
  return true;
}

var result1 = (funcao1() && funcao2());

console.log(result1);
//&& = e - ou seja, se um dos valores é falso, a expressao inteira será falsa e será executado
//até encontrar a função falsa - o que deixará mais rápido

var result2 = (funcao1() & funcao2());

console.log(result2);

//& = e - ou seja, se um dos valores é falso, a expressao inteira será falsa porém as duas funções
//serão executadas


var result3 = (funcao2() || funcao1());

console.log(result3);


var result4 = (funcao2() | funcao1());

console.log(result4);
