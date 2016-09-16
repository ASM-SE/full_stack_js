( function PessoaController(document, console, Pessoa) {
'use strict';

var inputNome = document.getElementById('nome');
var inputNickname = document.getElementById('nickname');
var sendButton = document.getElementById('send');

sendButton.addEventListener('click', function addPessoa(){
  var p1 = new Pessoa(inputNome.value, inputNickname.value);
  console.log(p1);
});


})(document, console, Pessoa);
