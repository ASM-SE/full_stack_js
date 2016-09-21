'use strict';


//classe animal e quantidade de pernas
//metodo andar imprimir andando com a quantidade de pernas
//criar três animas, casa um com uma forma diferente de setar o prototipo

var pernas = {
  qtdPernas: 4,
  andar: function(){
    return `${this.animal} Andando com ${this.qtdPernas} pernas!` //se utilizasse o EC06
    //modo normal seria: this.animal + ' anda com ' + this.qtdPernas + ' pernas!';

  }
};

//PROTO
var animal01 = {
  animal: 'Jacaré',
  __proto__: pernas
};

console.log(animal01.andar());

//CREATE
var animal02 = Object.create(pernas);
animal02.animal = 'Aranha';
animal02.qtdPernas = 8;

console.log(animal02.andar());

//PROTOTYPE_OF
var animal03 = {
  animal: 'Cobra',
  andar: function() {
    console.log('Cobra não anda!');
  }
};

Object.setPrototypeOf(animal03, pernas);
animal03.qtdPernas = 0;

console.log(animal03.andar());
