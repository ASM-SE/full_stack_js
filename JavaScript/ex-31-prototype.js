'use strict';

//raiz quadrada


parseInt(1).__proto__.__proto__.sqrt = function(){
  return Math.sqrt(this);
}

console.log(144.0.sqrt());
