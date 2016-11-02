(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller(UserService){
    const vm = this;

    };


})(window.angular);
