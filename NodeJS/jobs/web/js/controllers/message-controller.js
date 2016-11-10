(function(angular){
  'use strict';


  angular.module('jobs').controller('MessageController', controller);

  controller.$inject = [ '$rootScope'];

  function controller($rootScope){
    const vm = this;

    vm.init = () => {
      $rootScope.$on('success-message', (event, mensagem) => {
        $mdToast.show($mdToast.simple().textContent(mensagem).position('bottom right').hideDelay(3000));
      })

      $rootScope.$on('error-message', (event, mensagem) => {
        vm.errors.push(mensagem);
      })
    };


}

})(window.angular);
