//Considerando ECMAScript 2015 (ES6) e Strict Mode
'uses strict';

//Tipos de dados
//Como o JavaScript é uma linguagem dinamicamente tipada os tipos de dados são convertidos
//automaticamente durante a execução do script.
//Isso permite a utilização de uma mesma variável para a atribuição de dois tipos distintos de dados.

//conversão em soma e subtração:
let a = 10;
let b = 20;
console.log(a + b);
console.log(b - a);

//a soma não calcula, quando uma variável é string, ela contatena
console.log('10' + 20);
//a subtração calcula, reduzindo o valor, ainda que ele seja string
console.log('20' - 10);

//Boolean
/* O tipo boolean é o tipo mais simples de dados e o mesmo possui dois valores
literais (true/false) além do wrapper Boolean.
Um ponto importante sobre o JavaScript é que as seguintes expressões são evaluadas como false:

false
0
''
""
NaN
null
undefined
'false'
"false" */

//Para forçar a conversão dinâmica do tipo utilizar negação da negação !!
//no caso para forçar o false, colocando uma negação fica false... Ele imprime false como string:
console.log(!'false');
//Comparando e testando
var bo = 'false';
console.log(typeof bo);//comprova que false continua como string
var bo = !!'false';
console.log(typeof bo); //mostra que o valor agora foi convertido para Boolean
var ba = Boolean('false'); //força a variável a receber o valor boolean
//ngando três vezes ele fica como false... se negar duas, a primeira converte a segunda transforma em true
console.log(!!!'false');
console.log(!!!"false");

console.log(!!0);
console.log(!!'');
console.log(!!"");
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);


//Number
/*Em JavaScript todos os números são agrupados pelo tipo Number. Além de representar os números
o mesmo possui três valores simbólicos,
 +Infinity, -Infinity e NaN. Isso mesmo, por mais incrível que pareça, typeof NaN é Number!*/
console.log(0.1 + 0.2); //apresentará um resíduo - lixo da conversão binária

//Objetc
 var pessoa = {};

 
