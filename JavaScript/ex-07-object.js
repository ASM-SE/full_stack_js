'use strict';

//Exercício - Criar objeto de operações com as operações matemáticas básicas.

let operandos = {
  operando1 : 3,
  operando2 : 4
};

operandos.soma = function(p1 = operandos.operando1, p2 =operandos.operando2){
    return p1 + p2;

};

operandos.subtracao = function(p1 = operandos.operando1, p2 =operandos.operando2){
    return p1 - p2;

};

operandos.multiplicacao = function(p1 = operandos.operando1, p2 =operandos.operando2){
    return p1 * p2;

};

operandos.divisao = function(p1 = operandos.operando1, p2 =operandos.operando2){
if (p2 != 0) {
        return p1 / p2;
}else {
  return 'Divisor igual a zero!';
}



};

console.log('Soma:' + operandos.soma());
console.log('Subtracao:' + operandos.subtracao());
console.log('Multiplicacao:' + operandos.multiplicacao());
console.log('Divisao:' + operandos.divisao());
