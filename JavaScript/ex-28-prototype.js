'use strict';


//fazer um objeto contas a pagar
//imposto valor x taxa - o valor da taxa é 0.10
//criar duas contas - uma delas a taxa será 0.05 a outra será 0.10

//resposta professor

var conta = {
  taxa: 0.10,
  calculaImposto : function() {
    return this.valor * this.taxa;
  }
};

var contaDeAgua = {
  valor: 150.00,
  __proto__: conta
}

console.log(contaDeAgua.calculaImposto());

var contaDeLuz = Object.create(conta);

contaDeLuz.valor = 100.00;
contaDeLuz.taxa = 0.05;

console.log(contaDeLuz.calculaImposto());
