(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('UserListController', controller);

  controller.$inject = ['UserService', '$location']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller(UserService, $location){
    const vm = this;

    vm.initList = () =>{
      UserService.getUsers()
      .then((res) =>{
        vm.users = res.data;
      })
    };

    vm.new = () =>{
      $location.path('/user/new');
    };

    vm.edit = (user) =>{
      $location.path(`/user/${user._id}/edit`);
    };




    };


})(window.angular);
