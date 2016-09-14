//Considerando ECMAScript 2015 (ES6) e Strict Mode
'uses strict';

/*Strict Mode
Pode-se utilizar o strict mode apenas a nível de função:
strinctFunction(){
  'uses strinct';
  return 'Essa função é strict!!';
}

Por que usar o strict mode;
- Torna mais fácil e natural o desenvolvimento de JavaScript "seguro".
- Apresenta erro em "sintaxes inadequadas" (más práticas), geralmente aceitas em situções normais.
Em JavaScript não-strict, você não será avisado caso crie uma variável global
por engano (veja essa discussão). Já no strict mode, isto irá lançar um erro, tornando
impossível criar acidentalmente uma variável global.
- Enfim, o strict mode é importante para que sejamos guiados às tendências e
boas práticas de mercado. Além disso, o feedback imediato da diretiva previne equivocos
graves em nossos scripts.

*/



//Declaração de variáveis
var nome; //variável de escopo global
nome = 'Anderson';

let sobrenome = 'Marcolino'; //variável global

const SEXO = 'Masculino'; //convenção - tudo maiúsculo

/* O código abaixo está incorreto porque variáveis do tipo const devem receber o valor
na sua declaração, no lugar de ser deste modo:
const IDADE;
IDADE = 30;
O correto é:
const IDADE = 30;
*/

{
console.log(nome + ' '+ sobrenome +' '+ SEXO);

}

function imprime1(){
  return 'Função 1: ' + nome + ' '+ sobrenome +' '+ SEXO;
}

console.log(imprime1());

//Variável Local _nome
function imprime2(){
  var _nome = 'Khaleesi'; //variável local - função
  return _nome + 'é a mãe dos dragões!';
}

console.log(imprime2());

/*a próxima linha apresenta erro porque _nome não é uma variável global
console.log(_nome);  */

//Variável Bloco
{
  let _vilan = 'White Walker';
  const ARMA = 'dragon glass';
  var _hero = 'Jon Snow';
}

//variáveis do tipo let e const são variáveis locais de bloco, ou seja, se forem declaradas
//dentro de um bloco, não são visíveis fora dele, como no caso da variável _vilan e ARMA abaixo
//console.log('Vilão:' + _vilan);
//console.log(' Morre com: ' + ARMA);
//Já variáveis do tipo var pode ser utilizada, pois ela é global, mesmo estando dentro de um bloco
console.log('pelo Herói: (Fora) ' + _hero);

//o uso de variáeis do tipo restrito a um bloco ou função é recomendado caso espera-se utilizar
//o mesmo nome de variável em outros arquivos JS que possam ser utilizados juntos
//com o hoisting, isso pode gerar problemas, por isso indica-se utilizar variáveis locais

//Do modo abaixo é possível imprimir _vilan e ARMA, pois estão sendo utilizado dentro do bloco:
//Variável Bloco
{
  let _vilan = 'White Walker';
  const ARMA = 'dragon glass';
  var _hero = 'Jon Snow';
  console.log('Vilão: (Dentro)' + _vilan);
  console.log('Morre com: (Dentro)' + ARMA);
  console.log('pelo Herói: (Dentro)' + _hero);
}

/* Convenções para Variáveis:
Variáveis devem começar com letra, _ ou $.
Utilização do padrão CamelCase. UpperCamelCase para funções construtoras e lowerCamelCase para variáveis convencionais.
Constantes declaradas com CAPITAL_CASING.
Variáveis locais iniciadas com _.
Variáveis iniciadas com $ reservadas a frameworks, como o AngularJS e jQuery.
*/


//Variáveis e seus tipos
// Para identificar o tipo de uma variável, utiliza-se typeof
var x = 10;
var y = 'nome';
var z = function(){
  return 'Função z!';
}
console.log('Variável x é do tipo: ' + typeof x);
console.log('Variável y é do tipo: ' + typeof y);
console.log('Variável z é do tipo: ' + typeof z);

//Criando um objeto e atrelando uma função - que se chamará método a ele
//Objects are variables too. But objects can contain many values.
let pessoa = {
  'nome' : 'Anderson', //aqui é vírgula e dois pontos
  'sobrenome' : 'Marcolino',
  calculaIdade1 : function(){
    var _idade = 30;
    return _idade;
  }
}

//Imprimindo dados do objeto:
console.log('Impressão 1: Nome: '+ pessoa.nome + ' Sobrenome: ' + pessoa.sobrenome);
console.log('Impressão 2: ', pessoa['nome'], ' ' + pessoa['sobrenome']);

//Definindo uma função para o objeto pessoa
pessoa.calculaIdade2 = function(){
  var _idade = 30;
  return _idade;
}

//chamando as funçôes
console.log(pessoa.calculaIdade1());
console.log(pessoa.calculaIdade2());

var recebeFuncao = pessoa.calculaIdade1();
console.log(recebeFuncao);


//imprime todas as propriedades de um objeto
for(let objeto_pessoa in pessoa){
  console.log('O objeto pessoa possui um/uma', typeof pessoa[objeto_pessoa],' que é:');
  console.log(objeto_pessoa,':',pessoa[objeto_pessoa]);
}

//Não imprimir quando a propriedade for uma função
for(let objeto_pessoa2 in pessoa){
  if(typeof pessoa[objeto_pessoa2] != 'function'){
    console.log('A propriedade do objeto pessoa, desconsiderando funções, é:');
    console.log(objeto_pessoa2,':',pessoa[objeto_pessoa2]);
  }
}
