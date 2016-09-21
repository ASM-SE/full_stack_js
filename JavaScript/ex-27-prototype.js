'use strict';


//fazer um objeto contas a pagar
//imposto valor x taxa - o valor da taxa é 0.10
//criar duas contas - uma delas a taxa será 0.05 a outra será 0.10

let imposto = {
  taxa: 0.10
};


let contas_a_pagar01 = {
  tipo: 'agua',
  valor: 150
};


let contas_a_pagar02 = {
  tipo: 'luz',
  valor: 100
};


function calculaImposto(valor, taxa){
  return taxa * valor + valor;
}


Object.setPrototypeOf(contas_a_pagar01, imposto);
Object.setPrototypeOf(contas_a_pagar02, imposto);

contas_a_pagar02.taxa = 0.05;

console.log(calculaImposto(contas_a_pagar01.valor, contas_a_pagar01.taxa));
console.log(calculaImposto(contas_a_pagar02.valor, contas_a_pagar02.taxa));
