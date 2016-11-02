(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('MenuController', controller);

  controller.$inject = ['$mdSidenav']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller($mdSidenav){
    const vm = this; //view model - como definido por john papa
    const MENU_ID = 'left';

    vm.toggleMenu = function(){
      return $mdSidenav(MENU_ID).toggle();
    };


}

})(window.angular);
