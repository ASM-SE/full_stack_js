(function(angular){
  'use strict';
  //const API_PATH = 'http://localhost:3000'; vai sar passado na injeção de dependências - definida em uma constante



  angular.module('jobs').controller('UserController', controller);

  controller.$inject = ['UserService', 'ToastService', '$routeParams']; //injentando dependencias segundo o jhonpapa https://github.com/johnpapa/angular-styleguide

  function controller(UserService, ToastService, $routeParams){
    const vm = this; //view model - como definido por john papa



    vm.initForm = () => {
      let _id = $routeParams.id;
      if(_id){
        UserService.getUser(_id)
        .then((res) => {

            vm.user = res.data;

        })
      }
    };


    vm.save = (user) =>{
      UserService.saveUser(user)
      .then((res) =>{
        if(!user._id){

          user._id = res.data._id;
            ToastService.defaultToaster('Usuário incluído com sucesso!');
      }
    })
  };


    vm.remove = (user) => {
      UserService.remove(user._id)
      .then((res) =>{
          vm.user = {};
            ToastService.defaultToaster('Usuário excluído com sucesso!');
      })


    };

}

})(window.angular);
