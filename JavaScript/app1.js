( function(document, console) { //indica uma referencia externa e restrita ao scopo de nossa função
  //no caso, só se passa coisas específicas - passar referências comuns, como document e console
  //não é viável, visto que sempre serão utilziados.
'use strict';

//por estar considerando a compatibilidade com o browser, não será utilizado o ES56
var inputNome = document.getElementById('nome');
var sendButton = document.getElementById('send');

/*Exemplo 1
sendButton.addEventListener('click', sendMessage); // a função sendMessage aqui é enviada como callback

function sendMessage(){
  console.log(inputNome.value);
}*/


/*Exemplo 2 - Problema de isolamento com função do arquivo app2.js
se colocar dentro de uma função, os itens não vazar para os demais arquivos js porém ela
não é executa - isola-se mas não permite a execução - se colocar entre parênteses a
função ela vira um objeto e poderá ser então executado: (function(){ CODIGO AQUI})();
essa técnica se chama IIFE (Expressão de Função Imediatamente Invocada ou
Immediately-Invoked Function Expression) em JavaScript
No node não acontece isso, porque o node coloca automaticamente essa função no código
 )*/
sendButton.addEventListener('click', function eventClick() {
    sendMessage(inputNome.value);
});

function sendMessage(message){
  console.log(message);
}


})(document, console);//indica uma referencia externa - se colocou na chamada da função de isolamento na
//primeira linha, tem que ser incluído aqui também
