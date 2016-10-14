(function(angular){
  'use strict';
  angular.module('jobs').controller('UserController', controller);

  controller.$inject = []; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller(){
    const vm = this; //view model - como definido por john papa


    vm.initUsers = () =>{ //funcção que incializa a lista -- elemento ul na index.html
      vm.users = [];
    }

    vm.save = (user) =>{
      vm.users.push(user);
      vm.user = {};
    }


    vm.deleteSelected = (users) =>{
      vm.users = vm.users.filter((user)=>{
        return !user.selected;
      });
    }
  }

})(window.angular);
