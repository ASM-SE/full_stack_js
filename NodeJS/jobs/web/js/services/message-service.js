(function(angular){
'use strict';

 angular.module('jobs').service('MessageService', service);

 service.$inject = ['$mdToast'];

function service($mdToast) {
  const svc = this;

  svc.send = (mensagem) => {
    $mdToast.show($mdToast.simple().textContent(message));
  };

}



})(window.angular);
