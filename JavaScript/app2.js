'use strict';

//como está no escopo global, terei acesso ao que está no script app1.js
//é o que acontece no log abaixo, apresentado a var inputNome delcarada no app1.js
// console.log(inputNome); //colocando a função para isolamento, apresentará erro


function  sendMessage(){
  console.log('Vai Goku!!');
}
/*Quando no app1 utilizado (function(){ CODIGO AQUI})(); (IIFE)
essa função não irá sobrescrever a sendMessage do app1*/
