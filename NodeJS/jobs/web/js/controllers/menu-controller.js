(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('MenuController', controller);

  controller.$inject = ['$mdSidenav','$location']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller($mdSidenav, $location){
    const vm = this; //view model - como definido por john papa
    const MENU_ID = 'left';
    vm.sections = [];

    vm.sections.push({
      title: 'Administration',
      itens: [{ icon: 'social:people', //img/icons/ic_people_black_24px.svg
                title: 'Users',
                path: '/users' },
              { icon: 'admin:business',
                title: 'Companies',
                path: '/companies' },
              { icon: 'admin:jobs',
                title: 'Jobs',
                path: '/jobs' }]
    });

    vm.sections.push({
        title: 'Personal',
        itens: [{ icon: 'social:people_pin',
                  title: 'My Profile',
                  path: '/profile' },
                { icon: 'admin:logout',
                  title: 'Logout',
                  path: '/login' }]
    });


    vm.toggleMenu = function(){
      return $mdSidenav(MENU_ID).toggle();
    };

    vm.goTo = (item) =>{
      $location.path(item.path);
      vm.toggleMenu();
    }


}

})(window.angular);
