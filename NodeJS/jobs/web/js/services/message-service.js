(function(angular){
'use strict';

 angular.module('jobs').service('MessageService', service);

 service.$inject = ['$rootScope'];

function service($rootScope) {
  const svc = this;

  //não trato nada que altera a tela aqui, como o $mdToast - este é um serviço!! Boa prática!
  svc.success = (mensagem) => {
    $rootScope.$broadcast(mensagem, 'success-message');
  };

  svc.error = (mensagem) => {
    $rootScope.$broadcast(mensagem, 'error-message');
  };


}



})(window.angular);
