(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller(UserService){
    const vm = this; //view model - como definido por john papa


    vm.initUsers = () =>{ //funcção que incializa a lista -- elemento ul na index.html
      UserService.getUsers()
      .then((res) =>{
        vm.users =  res.data;
      })
      .catch((err)=>{
        console.log(err);
      })


    }

    vm.save = (user) =>{
      UserService.saveUser(user)
      .then((res) =>{
        vm.user = {};
        vm.initUsers();
      })
      .catch((err)=>{
        console.log(err);
      })

    }


    vm.deleteSelected = (users) =>{
      vm.users = vm.users.filter((user)=>{
        return !user.selected;
      });
    }
  }

})(window.angular);
