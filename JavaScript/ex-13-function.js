'use strict';


//Exercicio - criar uma funcao construtora com os atributos nome, cor e ano de lancamento
//Criar um método que compara dois carros com critério que deverá ser passado como parâmetro

function Carro(nome, cor, ano){
  this.nome = nome;
  this.cor = cor;
  this.ano = ano;

  this.comparar = function(obj, criterio){
    return criterio(this, obj);
  }

}

const car1 = new Carro('Uno','Vermelho',2016);
const car2 = new Carro('Scort', 'Preto', 1998);

const result = car1.comparar(car2, function(x, y){
  return x.ano >= y.ano;
});

console.log(result);



/* Tentar ver a questão da constante >=
var carro1 = new Carro('Uno','Vermelho','2016');
var carro2 = new Carro('Scort', 'Preto', '1998');

console.log(carro1);
console.log(carro2);

function comparaCarros(obj1, obj2, criterio){
  return criterio(obj1, obj2);

}

const caracteristica = Carro['nome'];
const tipo = '>=';

function criterio(a, b, caracteristica, tipo){
  return a.caracteristica, tipo, b.caracteristica;
}

var resultado = comparaCarros(carro1, carro2, criterio);
console.log(resultado);
*/
