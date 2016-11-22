(function(angular) {
  'use strict';

  angular.module('jobs').config(config);

  config.$inject = ['MessageServiceProvider'];//provedor de rotas

  function config(messageServiceProvider) { //ao colocar um config você pega o que foi passado pelo provider
    messageServiceProvider.addMessage('succesInserted', 'Registro inserido com sucesso!');
    messageServiceProvider.addMessage('succesUpdated', 'Registro atualizado com sucesso!');
  }

})(window.angular);
